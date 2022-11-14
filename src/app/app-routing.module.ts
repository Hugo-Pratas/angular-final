import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HouseCatalogComponent} from "./pages/house-catalog/house-catalog.component";
import {HouseDetailsComponent} from "./pages/house-details/house-details.component";

const routes: Routes = [
  {path: '', redirectTo: '/houses', pathMatch: 'full'},
  {path: 'houses', component: HouseCatalogComponent},
  {path: 'houses/:id_house', component: HouseDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
