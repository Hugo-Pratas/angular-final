import {Component, OnInit} from '@angular/core';
import {BnbService} from "../../Services/bnb.service";

@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.scss']
})
export class ReservesComponent implements OnInit {

  currentReserves!: any[]
  pastReserves!: any[]

  constructor(private _service: BnbService) {
  }

  ngOnInit(): void {
    this._service.getCurrentReserves().subscribe(data => {
      // @ts-ignore
      this.currentReserves = data.data;
    })
    this._service.getPastReserves().subscribe(data => {
      // @ts-ignore
      this.pastReserves = data.data;
    })
  }

}
