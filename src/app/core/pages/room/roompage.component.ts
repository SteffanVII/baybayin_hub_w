import { Component, Input, OnInit } from "@angular/core";
import { DateRange } from "@angular/material/datepicker";
import { monthShort } from "src/app/models/date.model";
import { TRoom, TRoomPage } from "src/app/models/resort.model";

@Component({
    selector : 'p-room',
    templateUrl :'./roompage.component.html',
    styleUrls : [ './roompage.component.scss' ]
})

export class RoomPageComponent implements OnInit {

    data : TRoomPage | undefined = {
        destinationName : "EMR - Balcony",
        location : 'Bgy. Corong Corong, El Nido, Palawan',
        imageUrl : "../assets/location_image_placeholder.jpg",
        amenities : ["restaurant"],
        verified : ["internet"],
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        duration : 6,
        personCount : 3,
        price : {
          value : 16500,
          cutPercent : 10,
        },
        roomGalleryUrls : [
            'https://baybayinhub.digitalcommerce.ph/wp-content/uploads/2022/03/PRR-Kubo-Fan1.png',
            'https://baybayinhub.digitalcommerce.ph/wp-content/uploads/2022/03/PRR-Kubo-Fan2.png',
            'https://baybayinhub.digitalcommerce.ph/wp-content/uploads/2022/03/PRR-Kubo-Fan3.png',
            'https://baybayinhub.digitalcommerce.ph/wp-content/uploads/2022/03/PRR-Kubo-Fan4.png',
            'https://baybayinhub.digitalcommerce.ph/wp-content/uploads/2022/03/PRR-Kubo-Fan5.png',
            'https://baybayinhub.digitalcommerce.ph/wp-content/uploads/2022/03/PRR-Kubo-Fan6.png'

        ],
        inclusions : [
            "Great for 2 person",
            "1 Double-size bed ",
            "Fan room only",
            "Shared bathroom only",
            "Wi-Fi access with speed of 10mbps to 20 mbps",
            "Access to CoWorking space",
            "Access to common kitchen",
            "Beach and river access",
            "Free 30 minutes of in-resort sport activities",
            "Weekly housekeeping",
            "Obstacle course and kayaking are excluded"
        ]
    };

    price : string | undefined;
    finalPrice : string | undefined;

    date : DateRange<Date> | undefined;
    start : string | undefined;
    end : string | undefined;

    ngOnInit(): void {
        let cut = this.data?.price?.value! * ( this.data?.price?.cutPercent! / 100 );
        this.price = new Intl.NumberFormat( 'en-PH', { style : 'currency', currency : 'PHP' } ).format( this.data?.price?.value! );
        this.finalPrice = new Intl.NumberFormat( 'en-PH', { style : 'currency', currency : 'PHP' } ).format( this.data?.price?.value! - cut );
    }

    onDatePick(e : any) {
        this.date = e;
        this.start = `${e.start.getDate()} ${monthShort[e.start.getMonth()]}`;
        this.end = `${e.end.getDate()} ${monthShort[e.end.getMonth()]}`;
    }


}