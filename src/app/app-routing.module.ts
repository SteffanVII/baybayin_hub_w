import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationPageComponent } from './core/pages/location/location.component';
import { ExclusiveofferPageComponent } from './core/pages/exclusiveOffer/exlusiveOffer.component';
import { PromoComponent } from './core/pages/promo/promo.component';
import { fanRoomComponent } from './core/pages/fanRoom/fanRoom.component';



const routes: Routes = [
  { path : 'destination', component : LocationPageComponent },
  {  path : 'exclusives', component : ExclusiveofferPageComponent },
  {  path : 'promo', component : PromoComponent },
  {  path : 'fanRoom', component : ExclusiveofferPageComponent },
  {  path : 'pass', component : ExclusiveofferPageComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }