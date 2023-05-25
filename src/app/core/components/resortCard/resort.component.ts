import { Component, Input } from "@angular/core";
import { TResort } from "src/app/models/resort.type";

@Component({
    selector : 'c-resort-card',
    templateUrl : './resort.component.html',
    styleUrls : ['./resort.component.scss']
})
export class ResortCardComponent {

    @Input() data : TResort = {
        name : '',
        location : '',
        imgUrl : ''
    };

}