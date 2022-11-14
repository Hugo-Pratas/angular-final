import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BnbService} from "../../Services/bnb.service";

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {

  id_house = 0
  data: any;

  constructor(private route: ActivatedRoute, private _service: BnbService) {
  }

  ngOnInit(): void {
    this.id_house = this.route.snapshot.params['id_house'];
    this._service.getHouseDetails(this.id_house).subscribe(data => {
      this.data = data;
    })
  }

}
