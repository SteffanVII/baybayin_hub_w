import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DestinationComponent } from './components/destination/destination.component';
import { BrowserModule } from '@angular/platform-browser';
import { ResortPageComponent } from './pages/resort/resort.component';
import { ResortCardComponent } from './components/resortCard/resort.component';
import { ResortsPageComponent } from './pages/location/location.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DestinationComponent,
    ResortPageComponent,
    ResortCardComponent,
    ResortsPageComponent
  ],
  exports : [
    HeaderComponent,
    DestinationComponent,
    ResortPageComponent,
    ResortCardComponent,
    ResortsPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class CoreModule { }
