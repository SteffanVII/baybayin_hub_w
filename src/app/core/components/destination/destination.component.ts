import { Component, Input } from "@angular/core"

@Component({
    selector : 'c-destination',
    templateUrl : './destination.component.html',
    styleUrls : [
        './destination.component.scss'
    ]
})

export class DestinationComponent {

    @Input() destinationData : {
        destinationName : string,
        imageUrl : string,
        amenities : string[],
        mainAmenities : string[],
        description : string
    } | undefined;

}