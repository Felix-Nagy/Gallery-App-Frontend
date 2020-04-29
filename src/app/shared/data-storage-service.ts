import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, tap, take, exhaustMap} from 'rxjs/operators';
import {Image} from '../gallery/image.model'
import {ImageService} from "../gallery/image.service";
import {AuthService} from "../auth/auth.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private imageService: ImageService,
    private authService: AuthService
  ) {
  }

  fetchImages() {
    return this.http.get<Image[]>(
      'https://gallery-app-web-server.herokuapp.com/images'
    ).pipe(
      map(images => {
        return images.map(image => {
          return {
            _id: image._id,
            name: image.name,
            description: image.description,
            upvotes: image.upvotes,
            tags: image.tags,
            data: "https://gallery-app-web-server.herokuapp.com/images/" + image._id
          };
        })
      }),
      tap(images => {
        this.imageService.setImages(images)
      })
    )

  }

  searchImage(tag, name) {
    let url = 'https://gallery-app-web-server.herokuapp.com/images?name=' + name
    if (tag) {
      'https://gallery-app-web-server.herokuapp.com/images?tags=' + tag + '&name=' + name
    }
    return this.http.get<Image[]>(
      url
    ).pipe(
      map(images => {
        return images.map(image => {
          return {
            _id: image._id,
            name: image.name,
            description: image.description,
            upvotes: image.upvotes,
            tags: image.tags,
            data: "https://gallery-app-web-server.herokuapp.com/images/" + image._id
          };
        })
      }),
      tap(images => {
        this.imageService.setImages(images)
      })
    )
  }

  fetchImagesByTag(tag) {
    let url =
      'https://gallery-app-web-server.herokuapp.com/images?tags=' + tag
    return this.http.get<Image[]>(
      url
    ).pipe(
      map(images => {
        return images.map(image => {
          return {
            _id: image._id,
            name: image.name,
            description: image.description,
            upvotes: image.upvotes,
            tags: image.tags,
            data: "https://gallery-app-web-server.herokuapp.com/images/" + image._id
          };
        })
      }),
      tap(images => {
        this.imageService.setImages(images)
      })
    )
  }

  likeImage(index) {
    let image = this.imageService.getImage(index)
    return this.http.patch("https://gallery-app-web-server.herokuapp.com/images/" + image._id, {
      upvotes: String(image.upvotes)
    }).subscribe(response => {
    })
  }

  getUser(){
    return this.http.get('https://gallery-app-web-server.herokuapp.com/users/me').subscribe(res => {
      console.log(res)
    })
  }

  getMyImages() {
    return this.http.get<Image[]>(
      'https://gallery-app-web-server.herokuapp.com/myimages'
    ).pipe(
      map(images => {
        return images.map(image => {
          return {
            _id: image._id,
            name: image.name,
            description: image.description,
            upvotes: image.upvotes,
            tags: image.tags,
            data: "https://gallery-app-web-server.herokuapp.com/images/" + image._id
          };
        })
      }),
      tap(images => {
        this.imageService.setImages(images)
      })
    )
  }

  uploadImage(formInput) {
    const formData = new FormData();
    formData.append('data', formInput.data)
    formData.append('name', formInput.name)
    formData.append('description', formInput.description)
    formData.append('tags', formInput.tag)
    formData.append('upvotes', '0')
    return this.http.post('https://gallery-app-web-server.herokuapp.com/images', formData).subscribe( res => {})
  }

  patchImage(formInput, id) {
    return this.http.patch("https://gallery-app-web-server.herokuapp.com/images/" + id, formInput).subscribe()
  }

  deleteImage(id) {
    return this.http.delete("https://gallery-app-web-server.herokuapp.com/images/" + id).subscribe()
  }
}




