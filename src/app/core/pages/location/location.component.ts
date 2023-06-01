import { Component } from "@angular/core";
import { TLocation } from "src/app/models/location.model";

@Component({
    selector : 'page-location',
    templateUrl : './location.component.html',
    styleUrls : [ './location.component.scss' ]
})
export class LocationPageComponent { 

    pageData : TLocation = {
        headerImgUrl : '../../../assets/la_union.jfif',
        headerLogoUrl : '../../../assets/La Union Hub.png',
        locationName : 'La Union',
        locationDescription : 'This laid-back coastal town is famous for its surfing spots but what not a lot of people know is that it\'s also brimming with other natural and heritage attractions and cultural activities like red clay pottery, grape picking, loom weaving, churches for pilgrimage tours, waterfalls, and eco-tours.',
        resorts : [
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
        ]
    }
}