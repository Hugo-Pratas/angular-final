import {Component, Input, OnInit} from '@angular/core';
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";
import {BnbService} from "../../Services/bnb.service";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  faHeart = faHeart
  faHeartSolid = faHeartSolid
  @Input() id!: number
  @Input() src!: string

  constructor(private _service: BnbService) {
  }

  get IconFav() {
    return this._service.isFavorite(this.id) ? faHeartSolid : faHeart;
  }

  toggleFavorite() {
    this._service.toggleFavorite(this.id)
  }

  ngOnInit(): void {

  }
}

