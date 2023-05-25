import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationPageComponent } from './core/pages/location/location.component';
import { ResortsPageComponent } from './core/pages/resorts/resorts.component';

const routes : Routes = [
  { path : 'destination', component : LocationPageComponent },
  { path : 'resorts', component : ResortsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }