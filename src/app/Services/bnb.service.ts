import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
const BASE_URL = "https://m9-frontend.upskill.appx.pt/upbnb";


@Injectable({
  providedIn: 'root'
})
export class BnbService {

  constructor(private http: HttpClient) { }


  getHouses(){
    return this.http.get(BASE_URL + "/casas?page=1&limit=8")
    console.log(BASE_URL + "/casas?page=1&limit=8")
  }


}
