import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const BASE_URL = "https://m9-frontend.upskill.appx.pt/upbnb";


@Injectable({
  providedIn: 'root'
})
export class BnbService {

  favorites: number[] = []

  constructor(private http: HttpClient) {
  }

  getHouses(page: number) {
    return this.http.get(BASE_URL + "/casas?page=" + page)
  }

  getHouseDetails(id: number) {
    return this.http.get(BASE_URL + "/casas/" + id)
  }

  getHouseFeatures(house_id: number) {
    return this.http.get(BASE_URL + "/casas/" + house_id + "/features")
  }

  getHost(house_id: number) {
    return this.http.get(BASE_URL + "/casas/" + house_id + "/host")
  }

  getGallery(house_id: number) {
    return this.http.get(BASE_URL + "/casas/" + house_id + "/photos")
  }

  getComents(house_id: number) {
    return this.http.get(BASE_URL + "/casas/" + house_id + "/reviews")
  }

  getCurrentReserves() {
    return this.http.get(BASE_URL + "/casas/current")
  }

  getPastReserves() {
    return this.http.get(BASE_URL + "/casas/past")
  }

  isFavorite(id: number): boolean {
    return this.favorites.includes(id)
  }

  toggleFavorite(id: number) {
    if (!this.favorites.includes(id)) {
      this.favorites.push(id)
    } else {
      let indice = this.favorites.indexOf(id)
      this.favorites.splice(indice, 1)
    }
  }

}
