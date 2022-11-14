import { Component, OnInit } from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  faSearch = faSearch;
  logo = "../../../assets/logo_menu.svg";
  favourite = "../../../assets/heart_open.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
