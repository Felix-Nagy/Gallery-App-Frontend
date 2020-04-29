import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Image } from './image.model';
import { DataStorageService } from '../shared/data-storage-service'
import { ImageService } from './image.service';

@Injectable({ providedIn: 'root' })
export class GalleryResolverService implements Resolve<Image[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private imageService: ImageService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const images = this.imageService.getImages();
    if (images.length === 0) {
      return this.dataStorageService.fetchImages();
    } else {
      return images;
    }
  }
}
