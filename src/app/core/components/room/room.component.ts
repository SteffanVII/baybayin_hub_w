import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core"
import { TRoom } from "src/app/models/resort.model";

@Component({
    selector : 'c-room',
    templateUrl : './room.component.html',
    styleUrls : [
        './room.component.scss'
    ]
})

export class RoomCardComponent implements OnInit {

    @Input() destinationData : TRoom | undefined;

    price : string | undefined;
    finalPrice : string | undefined;

    ngOnInit(): void {
        let cut = this.destinationData?.price?.value! * ( this.destinationData?.price?.cutPercent! / 100 );
        this.price = new Intl.NumberFormat( 'en-PH', { style : 'currency', currency : 'PHP' } ).format( this.destinationData?.price?.value! );
        this.finalPrice = new Intl.NumberFormat( 'en-PH', { style : 'currency', currency : 'PHP' } ).format( this.destinationData?.price?.value! - cut );
    }

}