import {Component, OnInit} from '@angular/core';
import {BnbService} from "../../Services/bnb.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  favorites: number[] = []
  houses: any[] = []
  countries: string[] = []

  constructor(private _service: BnbService) {
  }

  ngOnInit(): void {
    this.favorites = this._service.getFavorites()
    if (this.favorites.length > 0) {
      this._service.getHousesByIds(this.favorites).subscribe(data => {
        // @ts-ignore
        this.houses = data.data
        this.populateCountries()
        console.log(this.houses)
      })
    }
  }

  populateCountries() {
    for (const house of this.houses) {
      if (!this.countries.includes(house.country)) {
        this.countries.push(house.country)
      }
    }
  }
}

