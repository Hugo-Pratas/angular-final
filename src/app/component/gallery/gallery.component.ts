import {Component, Input, OnInit} from '@angular/core';
import {BnbService} from "../../Services/bnb.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() id!: number
  @Input() featured_photo!: string
  photos: string[] = []

  constructor(private _service: BnbService) {
  }

  ngOnInit(): void {
    this._service.getGallery(this.id).subscribe(data => {
      // @ts-ignore
      this.populatePhotos(data.photos)
    })
  }

  populatePhotos(photos: string[]) {
    for (let p of photos) {
      if (this.photos.indexOf(p) === -1 && p !== this.featured_photo) {
        this.photos.push(p)
      }
    }
  }
}
