import { Component, OnInit, Input } from '@angular/core';
import { Image} from "../../image.model";

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
  @Input() image: Image;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }



}
