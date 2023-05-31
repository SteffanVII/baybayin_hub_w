import { Component } from "@angular/core";
import { TResortPage } from "src/app/models/resort.type";

@Component({
    selector : 'page-resort',
    templateUrl : './resort.component.html',
    styleUrls : [
        './resort.component.scss'
    ]
})
export class ResortPageComponent {

    data : TResortPage = {
        name : "Baybayin Hub - La Union",
        location : 'San Juan, La Union',
        imgUrl : '../../../../assets/palawan-img-1.webp',
        rooms : [
            {
                destinationName : "EMR - Balcony",
                location : 'Bgy. Corong Corong, El Nido, Palawan',
                imageUrl : "../assets/location_image_placeholder.jpg",
                amenities : ["restaurant"],
                verified : ["internet"],
                description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                duration : 6,
                personCount : 4,
                price : {
                  value : 16500,
                  cutPercent : 10,
                }
              },
              {
                destinationName : "LEB - King Suite",
                location : 'Bgy. Corong Corong, El Nido, Palawan',
                imageUrl : "../assets/location_image_placeholder_1.jpg",
                amenities : ["restaurant"],
                verified : ["internet"],
                description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the.",
                duration : 6,
                personCount : 3,
                price : {
                  value : 20500,
                  cutPercent : 30
              }
            },
            {
                destinationName : "MDS - Seaview Cottege",
                location : 'Bgy. Corong Corong, El Nido, Palawan',
                imageUrl : "../assets/location_image_placeholder_2.jpg",
                amenities : ["restaurant"],
                verified : ["internet"],
                description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer.",
                duration : 4,
                personCount : 2,
                price : {
                    value : 10500,
                    cutPercent : 20
                }
            },
            {
                destinationName : "LBA - Deluxe Room",
                location : 'Bgy. Corong Corong, El Nido, Palawan',
                imageUrl : "../assets/location_image_placeholder_3.jpg",
                amenities : ["restaurant"],
                verified : ["internet"],
                description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.",
                duration : 7,
                personCount : 4,
                price : {
                  value : 36500,
                  cutPercent : 10
                }
            },
            {
                destinationName : "LEB - Honey Suite",
                location : 'Bgy. Corong Corong, El Nido, Palawan',
                imageUrl : "../assets/location_image_placeholder_4.jpg",
                amenities : ["restaurant"],
                verified : ["internet"],
                description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
                duration : 9,
                personCount : 5,
                price : {
                  value : 160500,
                  cutPercent : 30
                }
            },
            {
                destinationName : "LEB - Deluxe Room",
                location : 'Bgy. Corong Corong, El Nido, Palawan',
                imageUrl : "../assets/location_image_placeholder_5.jpg",
                amenities : ["restaurant"],
                verified : ["internet"],
                description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                duration : 3,
                personCount : 3,
                price : {
                  value : 100500,
                  cutPercent : 35
                }
            },
            {
                destinationName : "EMR - Balcony",
                location : 'Bgy. Corong Corong, El Nido, Palawan',
                imageUrl : "../assets/location_image_placeholder.jpg",
                amenities : ["restaurant"],
                verified : ["internet"],
                description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                duration : 15,
                personCount : 3,
                price : {
                  value : 60000,
                  cutPercent : 25
                }
              }
        ]
    }

}