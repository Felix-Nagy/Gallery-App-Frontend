import {Injectable, OnInit} from '@angular/core';
import { Subject } from 'rxjs';

import { Image } from './image.model'

@Injectable()
export class ImageService implements OnInit{
  imagesChanged = new Subject<Image[]>();

  private images: Image[] = [];
  private likedImages: string[]  = [];

  constructor() {
  }

  ngOnInit(): void {
    if(localStorage.getItem("likedImages")){
      this.likedImages = JSON.parse(localStorage.getItem("likedImages"))
    }
  }

  setLikedImages(array) {
    this.likedImages = array;
  }

  addToLiked(id){
    this.likedImages.push(id)
    localStorage.setItem("likedImages", JSON.stringify(this.likedImages))
  }
  checkIfLiked(id) {
    for(let images in this.likedImages) {
     if(this.likedImages[images] == id) {
       return true;
     }
    }
  }

  setImages(images: Image[]) {
    this.images= images;
    this.imagesChanged.next(this.images.slice())
  }

  getImages() {
    return this.images.slice();
  }

  getImage(index: number) {
    return this.images[index];
  }

  addImage(image: Image) {
    this.images.push(image)
    this.imagesChanged.next(this.images.slice())
  }


  updateImage(index: number, newImage: Image) {
    this.images[index] = newImage
    this.imagesChanged.next(this.images.slice())
  }

  deleteImage(index:number) {
    this.images.slice(index,1);
    this.imagesChanged.next(this.images.slice())
  }

  searchImage(name) {
    const searchedImages = []
    for (let image in this.images) {
      if(this.images[image].name == name) {
        searchedImages[image] = this.images[image].name
      }
    }
    this.images = searchedImages
    this.imagesChanged.next(this.images.slice())
  }

}
