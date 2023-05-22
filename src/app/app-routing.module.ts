import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationPageComponent } from './core/pages/location/location.component';

const routes: Routes = [
  { path : 'destination', component : LocationPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }