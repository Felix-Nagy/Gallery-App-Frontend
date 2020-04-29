import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GalleryComponent} from "./gallery/gallery.component";
import {GalleryEditComponent} from "./gallery/gallery-edit/gallery-edit.component";
import {GalleryDetailComponent} from "./gallery/gallery-detail/gallery-detail.component";
import {AuthComponent} from "./auth/auth.component";
import {GalleryResolverService} from "./gallery/gallery-resolver.service";
import {GalleryItemComponent} from "./gallery/gallery-list/gallery-item/gallery-item.component";
import {GalleryListComponent} from "./gallery/gallery-list/gallery-list.component";
import { AuthGuard } from './auth/auth.guard';
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {path: '', redirectTo: '/gallery', pathMatch: 'full'},
  {
    path: 'gallery',
    component: GalleryComponent,
    children: [
      {
        path:'' ,component: GalleryListComponent,
        resolve: [GalleryResolverService]
      },
      {
        path: ':id',
        component: GalleryDetailComponent,
         resolve: [GalleryResolverService]
      },
      {
        path: ':id/edit',
        component: GalleryEditComponent,
        resolve: [GalleryResolverService]
      },
      {path: 'upload', component: GalleryEditComponent},
    ]
  },
  {path: 'auth', component: AuthComponent},

  {path: 'profile', component: ProfileComponent,  canActivate: [AuthGuard], children: [  {
      path:'' ,component: GalleryListComponent,
      resolve: [GalleryResolverService]
    },
      {
        path: ':id',
        component: GalleryEditComponent,
        resolve: [GalleryResolverService]
      },
      {
        path: 'new',
        component: GalleryEditComponent,
        resolve: [GalleryResolverService]
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
