 import { Component, Input } from "@angular/core";
import { DateRange } from "@angular/material/datepicker";

@Component({
    selector : 'inline-range-calendar',
    templateUrl : './inline_range_datepicker.component.html',
    styleUrls : ['./inline_range_datepicker.component.scss']
})
export class InlineRangeCalendarComponent {
    @Input() range : DateRange<Date> | undefined;

    selectedChange( e : Date ) {
        let start = new Date(e);
        let end = new Date(e.setDate(e.getDate() + 6));
        console.log(start);
        console.log(end);
        this.range = new DateRange(start, end);
        

        // this.range = new DateRange(e, );
    }
}