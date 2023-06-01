 import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { DateRange } from "@angular/material/datepicker";

@Component({
    selector : 'inline-range-calendar',
    templateUrl : './inline_range_datepicker.component.html',
    styleUrls : ['./inline_range_datepicker.component.scss']
})
export class InlineRangeCalendarComponent implements OnInit {

    @Input() range : DateRange<Date> | undefined;
    @Output() datePickEvent = new EventEmitter<DateRange<Date>>();

    cal1 : Date = new Date();
    cal2 : Date = new Date(this.cal1.getFullYear(), 0, this.cal1.getMonth() + 1);

    ngOnInit(): void {
        this.cal2.setMonth(this.cal1.getMonth() + 1);
    }

    selectedChange( e : Date ) {
        let start = new Date(e);
        let end = new Date(e.setDate(e.getDate() + 6));
        this.range = new DateRange(start, end);
        
        this.datePickEvent.emit(this.range);
    }

    monthChange(e : any) {
        console.log("month changed");
        
    }
}