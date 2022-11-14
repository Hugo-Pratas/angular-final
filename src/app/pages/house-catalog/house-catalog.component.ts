import { Component, OnInit } from '@angular/core';
import {BnbService} from "../../Services/bnb.service";

@Component({
  selector: 'app-house-catalog',
  templateUrl: './house-catalog.component.html',
  styleUrls: ['./house-catalog.component.scss']
})
export class HouseCatalogComponent implements OnInit {
  houses:  any;

  constructor(private _service: BnbService) { }

  ngOnInit(): void{
    this._service.getHouses().subscribe(data =>{
      // @ts-ignore
      this.houses = <any>data.data;
    })
  }

}
