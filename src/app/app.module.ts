import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HouseCatalogComponent} from './pages/house-catalog/house-catalog.component';
import {NavBarComponent} from './component/nav-bar/nav-bar.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HouseComponent} from './component/house/house.component';
import {HttpClientModule} from '@angular/common/http';
import {HouseDetailsComponent} from './pages/house-details/house-details.component';
import {StarRatingComponent} from './component/star-rating/star-rating.component';
import {CommoditiesAndRulesComponent} from './component/commodities-and-rules/commodities-and-rules.component';
import {UsersDetailComponent} from './component/host-detail/users-detail.component';
import {GalleryComponent} from './component/gallery/gallery.component';
import {ImageComponent} from './component/image/image.component';
import {ReservesComponent} from './pages/reserves/reserves.component';

@NgModule({
  declarations: [
    AppComponent,
    HouseCatalogComponent,
    NavBarComponent,
    HouseComponent,
    HouseDetailsComponent,
    StarRatingComponent,
    CommoditiesAndRulesComponent,
    UsersDetailComponent,
    GalleryComponent,
    ImageComponent,
    ReservesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
