import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent {

  @Input() id!: number;
  @Input() image = "";
  @Input() country = "";
  @Input() city = "";
  @Input() rating!: number;
  @Input() host_type = "";
  @Input() price!: number;


  constructor() {
  }
}
