import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DestinationComponent } from './components/destination/destination.component';
import { BrowserModule } from '@angular/platform-browser';
import { LocationPageComponent } from './pages/location/location.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DestinationComponent,
    LocationPageComponent
  ],
  exports : [
    HeaderComponent,
    DestinationComponent,
    LocationPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class CoreModule { }
