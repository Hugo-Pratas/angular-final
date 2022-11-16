import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent {

  @Input() isFavoriteLayout?: boolean
  @Input() id!: number;
  @Input() image = "";
  @Input() country = "";
  @Input() city = "";
  @Input() rating!: number;
  @Input() data = ""
  @Input() host_type = "";
  @Input() price!: number;


  constructor() {
  }
}
