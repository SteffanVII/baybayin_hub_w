import { Component, Input, OnInit } from "@angular/core";
import { TRoom, TRoomPage } from "src/app/models/resort.type";

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

        ]
    };

    price : string | undefined;
    finalPrice : string | undefined;

    ngOnInit(): void {
        let cut = this.data?.price?.value! * ( this.data?.price?.cutPercent! / 100 );
        this.price = new Intl.NumberFormat( 'en-PH', { style : 'currency', currency : 'PHP' } ).format( this.data?.price?.value! );
        this.finalPrice = new Intl.NumberFormat( 'en-PH', { style : 'currency', currency : 'PHP' } ).format( this.data?.price?.value! - cut );
    }


}