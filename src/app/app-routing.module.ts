import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResortPageComponent } from './core/pages/resort/resort.component';
import { ResortsPageComponent } from './core/pages/location/location.component';

const routes : Routes = [
  { path : 'resort-1', component : ResortPageComponent },
  { path : 'location-1', component : ResortsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }