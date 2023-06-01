import { Component, Input } from "@angular/core";
import { TResort } from "src/app/models/resort.model";

@Component({
    selector : 'c-resort-card',
    templateUrl : './resortcard.component.html',
    styleUrls : ['./resortcard.component.scss']
})
export class ResortCardComponent {

    @Input() data : TResort = {
        name : '',
        location : '',
        imgUrl : ''
    };

}