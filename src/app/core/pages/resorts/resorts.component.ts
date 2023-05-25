import { Component } from "@angular/core";
import { TResort } from "src/app/models/resort.type";

@Component({
    selector : 'page-resorts',
    templateUrl : './resorts.component.html',
    styleUrls : [ './resorts.component.scss' ]
})
export class ResortsPageComponent { 

    resorts : TResort[] = [
        {
            name : 'Baybayin Hub - La Union',
            location : 'Bacnotan, La Union',
            imgUrl : '../../../assets/bacnotan-la-union-resort.png'
        },
        {
            name : 'Ubiz Garden Bed & Breakfast',
            location : 'San Juan, La Union',
            imgUrl : '../../../assets/urbiz-garden-bed-and-breakfast-resort.jpg'
        },
        {
            name : 'Ocean Breeze Resort',
            location : 'Bacnotan, La Union',
            imgUrl : '../../../assets/ocean-breeze-resort.jpg'
        },
        {
            name : 'Alon & Sandy',
            location : 'San Juan, La Union',
            imgUrl : '../../../assets/alan-and-sandy-resort.jpg'
        },
    ];

}