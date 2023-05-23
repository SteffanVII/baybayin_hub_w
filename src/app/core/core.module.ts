import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DestinationComponent } from './components/destination/destination.component';
import { BrowserModule } from '@angular/platform-browser';
import { LocationPageComponent } from './pages/location/location.component';
import { FooterComponent } from './components/footer/footer.components';
import { ExclusiveofferPageComponent } from './pages/exclusiveOffer/exlusiveOffer.component';
import { OfferComponent } from './components/exclusive/offer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DestinationComponent,
    LocationPageComponent,
    FooterComponent,
    ExclusiveofferPageComponent,
    OfferComponent
  ],
  exports : [
    HeaderComponent,
    DestinationComponent,
    LocationPageComponent,
    FooterComponent,
    ExclusiveofferPageComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class CoreModule { }
