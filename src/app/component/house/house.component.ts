import {Component, Input} from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent {

  faStar=faStar;
  @Input() image="";
  @Input() country="";
  @Input() city="";
  @Input() rating!: number;
  @Input() host_type= "";
  @Input() price!: number;


  constructor() { }




}
