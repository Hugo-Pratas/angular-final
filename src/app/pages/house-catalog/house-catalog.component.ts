import {Component, OnInit} from '@angular/core';
import {BnbService} from "../../Services/bnb.service";
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-house-catalog',
  templateUrl: './house-catalog.component.html',
  styleUrls: ['./house-catalog.component.scss']
})
export class HouseCatalogComponent implements OnInit {
  maxPage!: number;
  currentPage = 1
  houses: any;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  constructor(private _service: BnbService) {
  }

  ngOnInit(): void {
    this._service.getHouses(this.currentPage).subscribe(data => {
      // @ts-ignore
      this.maxPage = <number>data.pages;
      // @ts-ignore
      this.houses = <any>data.data;
    })
  }

  nextPage() {
    if (this.currentPage == this.maxPage) return;
    this.currentPage++;
    this._service.getHouses(this.currentPage).subscribe(data => {
      // @ts-ignore
      this.houses = <any>data.data;
    })
    return
  }

  previousPage() {
    if (this.currentPage == 1) return;
    this.currentPage--;
    this._service.getHouses(this.currentPage).subscribe(data => {
      // @ts-ignore
      this.houses = <any>data.data;
    })
    return
  }

}
