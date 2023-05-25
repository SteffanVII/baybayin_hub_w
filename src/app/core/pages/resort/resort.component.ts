import { Component } from "@angular/core";
import { TRoom } from "src/app/models/resort.type";

@Component({
    selector : 'page-resort',
    templateUrl : './resort.component.html',
    styleUrls : [
        './resort.component.scss'
    ]
})
export class ResortPageComponent {

    resorts : TRoom[] = []

}