 import { Component, Input, Output, OnInit, EventEmitter, ViewChild, AfterViewInit } from "@angular/core";
import { DateRange, MatCalendar, MatCalendarHeader } from "@angular/material/datepicker";
import { CustomCalendarHeaderNextComponent, CustomCalendarHeaderPrevComponent, CustonCalendarHeaderComponent } from "../customcalendarheader/customcalendarheader.component";

@Component({
    selector : 'inline-range-calendar',
    templateUrl : './inline_range_datepicker.component.html',
    styleUrls : ['./inline_range_datepicker.component.scss']
})
export class InlineRangeCalendarComponent implements OnInit, AfterViewInit {

    @Input() range : DateRange<Date> | undefined;
    @Output() datePickEvent = new EventEmitter<DateRange<Date>>();

    @ViewChild( 'calendar_left' ) calLeft! : MatCalendar<Date>;
    @ViewChild( 'calendar_right' ) calRight! : MatCalendar<Date>;
    @ViewChild( 'header_next' ) prevHeader! : CustomCalendarHeaderPrevComponent;
    @ViewChild( 'header_prev' ) nextHeader! : CustomCalendarHeaderNextComponent;

    cal1 : Date = new Date();
    cal2 : Date = new Date(this.cal1.getFullYear(), this.cal1.getMonth() + 1, 1);

    customHeader = CustonCalendarHeaderComponent;
    calenderHeaderNext = CustomCalendarHeaderNextComponent;
    calendarHeaderPrev = CustomCalendarHeaderPrevComponent;

    ngOnInit(): void {
        // this.cal2.setMonth(this.cal1.getMonth() + 1);
        
    }
    
    ngAfterViewInit(): void {
        console.log(this.calLeft);
        
        console.log(this.prevHeader);
    }

    selectedChange( e : Date ) {
        let start = new Date(e);
        let end = new Date(e.setDate(e.getDate() + 6));
        this.range = new DateRange(start, end);
        
        this.datePickEvent.emit(this.range);
    }



    // moveView( direction : number ) {

    //     if ( direction == 0 ) {
    //         this.cal1.setMonth(this.cal1.getMonth() - 1);
    //         this.cal1 = new Date( this.cal1 );
    //         this.cal2 = new Date( this.cal1.getFullYear(), this.cal1.getMonth() + 1, 1 );
    //     } else if ( direction == 1 ) {
    //         this.cal1.setMonth(this.cal1.getMonth() + 1);
    //         this.cal1 = new Date( this.cal1 );
    //         this.cal2 = new Date( this.cal1.getFullYear(), this.cal1.getMonth() + 1, 1 );
    //     }
    //     this.calLeft._goToDateInView( this.cal1, "month" );
    //     this.calRight._goToDateInView( this.cal2, "month" );
    // }
    
    next() {
        console.log('Next');
        
    }

    prev() {
        console.log('Prev');
        
    }

    month() {
        console.log("test");
        
    }


}