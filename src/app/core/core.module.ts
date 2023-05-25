import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DestinationComponent } from './components/destination/destination.component';
import { BrowserModule } from '@angular/platform-browser';
import { LocationPageComponent } from './pages/location/location.component';
import { ResortCardComponent } from './components/resort/resort.component';
import { ResortsPageComponent } from './pages/resorts/resorts.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DestinationComponent,
    LocationPageComponent,
    ResortCardComponent,
    ResortsPageComponent
  ],
  exports : [
    HeaderComponent,
    DestinationComponent,
    LocationPageComponent,
    ResortCardComponent,
    ResortsPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class CoreModule { }
