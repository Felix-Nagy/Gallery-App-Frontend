import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {Image} from "../image.model";
import {ImageService} from "../image.service";
import {DataStorageService} from "../../shared/data-storage-service";


@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {
  images: Image[];
  subscription: Subscription;
  isLoading=false;

  constructor(private imageService: ImageService,
              private dataStorageService: DataStorageService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.subscription = this.imageService.imagesChanged.
    subscribe(
      (images: Image[]) => {
        this.images = images;
      }
    );

    this.images = this.imageService.getImages();
    this.isLoading=false
  }

  onNewImage() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
