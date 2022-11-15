import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const BASE_URL = "https://m9-frontend.upskill.appx.pt/upbnb";


@Injectable({
  providedIn: 'root'
})
export class BnbService {

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

}
