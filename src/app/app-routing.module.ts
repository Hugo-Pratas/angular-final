import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HouseCatalogComponent} from "./pages/house-catalog/house-catalog.component";

const routes: Routes = [
  {path: '', redirectTo: '/catalog', pathMatch: 'full'},
  {path: 'catalog', component: HouseCatalogComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
