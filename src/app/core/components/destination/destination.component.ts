import { Component, Input } from "@angular/core"
import { TRoom } from "src/app/models/resort.type";

@Component({
    selector : 'c-destination',
    templateUrl : './destination.component.html',
    styleUrls : [
        './destination.component.scss'
    ]
})

export class DestinationComponent {

    @Input() destinationData : TRoom | undefined;

}