import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DestinationComponent } from './components/destination/destination.component';
import { BrowserModule } from '@angular/platform-browser';
import { LocationPageComponent } from './pages/location/location.component';
import { FooterComponent } from './components/footer/footer.components';
import { ExclusiveofferPageComponent } from './pages/exclusiveOffer/exlusiveOffer.component';
import { OfferComponent } from './components/exclusive/offer.component';
import { PromoComponent } from './pages/promo/promo.component';
import { fanRoomComponent } from './pages/fanRoom/fanRoom.component';
import { PassComponent } from './pages/pass/pass.component';
import { CouponComponent } from './components/coupon/coupon.component';




@NgModule({
  declarations: [
    HeaderComponent,
    DestinationComponent,
    LocationPageComponent,
    FooterComponent,
    ExclusiveofferPageComponent,
    OfferComponent,
    PromoComponent,
    fanRoomComponent,
    PassComponent,
    CouponComponent,
    
  ],
  exports : [
    HeaderComponent,
    DestinationComponent,
    LocationPageComponent,
    FooterComponent,
    ExclusiveofferPageComponent,
    OfferComponent,
    PromoComponent,
    fanRoomComponent,
    PassComponent,
    CouponComponent,

   
  ],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class CoreModule { }
