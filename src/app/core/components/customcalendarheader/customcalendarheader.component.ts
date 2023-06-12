import { Component, Input, Inject, forwardRef } from "@angular/core";
import { MatCalendar, MatCalendarHeader } from "@angular/material/datepicker";

@Component({
    selector : 'c-cutsom-calendar-header',
    templateUrl : './customcalendarheader.component.html'
})
export class CustonCalendarHeaderComponent extends MatCalendarHeader<any> {

    customNext(  ) {
        this.nextClicked();
    }

    customPrev() {
        this.previousClicked();
    }
}

@Component({
    selector : 'c-custom-calendar-header-right',
    template : ` <div #header_next class="mat-calendar-header">
                    <div class="mat-calendar-header-controls">
                    <button mat-icon-button type="button" class="mat-calendar-previous-button"
                            [disabled]="!previousEnabled()" (click)="customPrev()"
                            [attr.aria-label]="prevButtonLabel">Prev
                     </button>
                    </div>
                </div> `
})
export class CustomCalendarHeaderPrevComponent extends MatCalendarHeader<any> {

    cb! : Function;

    customPrev() {
        this.previousClicked();
        // this.cb();
    }
}

@Component({
    selector : 'c-custom-calendar-header-right',
    template : ` <div #header_prev class="mat-calendar-header">
                    <div class="mat-calendar-header-controls">
                        <button mat-icon-button type="button" class="mat-calendar-next-button"
                                [disabled]="!nextEnabled()" (click)="customNext()"
                                [attr.aria-label]="nextButtonLabel">Next
                        </button>
                    </div>
                </div> `
})
export class CustomCalendarHeaderNextComponent extends MatCalendarHeader<any> {

    cb! : Function;

    customNext() {
        this.nextClicked()
        // this.cb();
    }
}