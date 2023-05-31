import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RoomCardComponent } from './components/room/room.component';
import { BrowserModule } from '@angular/platform-browser';
import { ResortPageComponent } from './pages/resort/resort.component';
import { ResortCardComponent } from './components/resortCard/resortcard.component';
import { LocationPageComponent } from './pages/location/location.component';
import { RoomPageComponent } from './pages/room/roompage.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { InlineRangeCalendarComponent } from './components/inlinerangedatepicker/inline_range_datepicker.component';

@NgModule({
  declarations: [
    HeaderComponent,
    RoomCardComponent,
    ResortCardComponent,
    GalleryComponent,
    InlineRangeCalendarComponent,
    ResortPageComponent,
    LocationPageComponent,
    RoomPageComponent,
  ],
  exports : [
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule
  ]
})
export class CoreModule { }
