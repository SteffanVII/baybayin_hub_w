import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResortPageComponent } from './core/pages/resort/resort.component';
import { LocationPageComponent } from './core/pages/location/location.component';
import { RoomPageComponent } from './core/pages/room/roompage.component';

const routes : Routes = [
  { path : '', component : LocationPageComponent },
  { path : 'resort-1', component : ResortPageComponent },
  { path : 'room-1', component : RoomPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }