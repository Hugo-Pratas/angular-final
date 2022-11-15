import {Component, Input, OnInit} from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  faStar = faStar;
  @Input() rating!: number;
  @Input() fontSize!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
