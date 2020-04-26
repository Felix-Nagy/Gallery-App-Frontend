import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProfileComponent } from './profile/profile.component';
import { GalleryDetailComponent } from './gallery/gallery-detail/gallery-detail.component';
import { GalleryEditComponent } from './gallery/gallery-edit/gallery-edit.component';
import { FeaturedComponent } from './featured/featured.component';
import { GalleryListComponent } from './gallery/gallery-list/gallery-list.component';
import { GalleryItemComponent } from './gallery/gallery-list/gallery-item/gallery-item.component';
import {AlertComponent} from "./shared/alert/alert.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    GalleryComponent,
    ProfileComponent,
    GalleryDetailComponent,
    GalleryEditComponent,
    FeaturedComponent,
    GalleryListComponent,
    GalleryItemComponent,
    AlertComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
