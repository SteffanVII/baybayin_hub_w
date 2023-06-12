import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from "@angular/core";
import { TResortPage } from "src/app/models/resort.model";

@Component({
    selector : 'page-resort',
    templateUrl : './resort.component.html',
    styleUrls : [
        './resort.component.scss'
    ]
})
export class ResortPageComponent implements AfterViewInit {

  constructor(
    private cdr : ChangeDetectorRef
  ) {}

    data : TResortPage = {
        name : "Baybayin Hub - La Union",
        description : "A second home & office for Digital Nomads, Remote Workers, Entrepreneurs, Creatives & Freelancers that wants to achieve a Work-Life Balance and loves to Co-work & Co-Live with Like-Minded people. A guesthouse for everyone who are looking for a place to relax, recharge, reconnect with nature and to experience the best beachfront sunset in La Union.",
        location : 'San Juan, La Union',
        imgUrl : '../../../../assets/palawan-img-1.webp',
        images : [
          "https://d391qcuriguuyo.cloudfront.net/eyJidWNrZXQiOiJiYXliYXlpbmh1Yi13ZWJzaXRlLWRldmVsb3BtZW50Iiwia2V5IjoiMGJmOWMzNDAtZDIzMi00YmQxLTk1OTEtYzhjNWE2ZTdkZjA4LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjAwLCJoZWlnaHQiOjQ1MCwiZml0IjoiY292ZXIifX19",
          "https://d391qcuriguuyo.cloudfront.net/eyJidWNrZXQiOiJiYXliYXlpbmh1Yi13ZWJzaXRlLWRldmVsb3BtZW50Iiwia2V5IjoiYmFmZDI5OTQtZDU4Yi00MDg1LThmZmMtZTJhMjZmMWMyNGQwLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0Ijo0NTAsImZpdCI6ImNvdmVyIn19fQ==",
          "https://d391qcuriguuyo.cloudfront.net/eyJidWNrZXQiOiJiYXliYXlpbmh1Yi13ZWJzaXRlLWRldmVsb3BtZW50Iiwia2V5IjoiMjRkMDEyZTQtODQwZC00YjQ3LWE2MGMtNTc3MzQyNjM2MGJlLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0Ijo0NTAsImZpdCI6ImNvdmVyIn19fQ==",
          "https://d391qcuriguuyo.cloudfront.net/eyJidWNrZXQiOiJiYXliYXlpbmh1Yi13ZWJzaXRlLWRldmVsb3BtZW50Iiwia2V5IjoiNjE3YmNlMGQtNTIzNi00YTFiLWI2OTUtZTk2MjEyYjE4ZWFiLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0Ijo0NTAsImZpdCI6ImNvdmVyIn19fQ==",
          "https://d391qcuriguuyo.cloudfront.net/eyJidWNrZXQiOiJiYXliYXlpbmh1Yi13ZWJzaXRlLWRldmVsb3BtZW50Iiwia2V5IjoiMWY5ODdjZTEtMmE5OC00ZTBiLTgxODQtMzc1YjA1YWZkODliLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0Ijo0NTAsImZpdCI6ImNvdmVyIn19fQ==",
          "https://d391qcuriguuyo.cloudfront.net/eyJidWNrZXQiOiJiYXliYXlpbmh1Yi13ZWJzaXRlLWRldmVsb3BtZW50Iiwia2V5IjoiMjRkMDEyZTQtODQwZC00YjQ3LWE2MGMtNTc3MzQyNjM2MGJlLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0Ijo0NTAsImZpdCI6ImNvdmVyIn19fQ==",
          "https://d391qcuriguuyo.cloudfront.net/eyJidWNrZXQiOiJiYXliYXlpbmh1Yi13ZWJzaXRlLWRldmVsb3BtZW50Iiwia2V5IjoiNjE3YmNlMGQtNTIzNi00YTFiLWI2OTUtZTk2MjEyYjE4ZWFiLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0Ijo0NTAsImZpdCI6ImNvdmVyIn19fQ==",
          "https://d391qcuriguuyo.cloudfront.net/eyJidWNrZXQiOiJiYXliYXlpbmh1Yi13ZWJzaXRlLWRldmVsb3BtZW50Iiwia2V5IjoiMWY5ODdjZTEtMmE5OC00ZTBiLTgxODQtMzc1YjA1YWZkODliLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0Ijo0NTAsImZpdCI6ImNvdmVyIn19fQ==",
          "https://d391qcuriguuyo.cloudfront.net/eyJidWNrZXQiOiJiYXliYXlpbmh1Yi13ZWJzaXRlLWRldmVsb3BtZW50Iiwia2V5IjoiMjRkMDEyZTQtODQwZC00YjQ3LWE2MGMtNTc3MzQyNjM2MGJlLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0Ijo0NTAsImZpdCI6ImNvdmVyIn19fQ==",
          "https://d391qcuriguuyo.cloudfront.net/eyJidWNrZXQiOiJiYXliYXlpbmh1Yi13ZWJzaXRlLWRldmVsb3BtZW50Iiwia2V5IjoiNjE3YmNlMGQtNTIzNi00YTFiLWI2OTUtZTk2MjEyYjE4ZWFiLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0Ijo0NTAsImZpdCI6ImNvdmVyIn19fQ==",
          "https://d391qcuriguuyo.cloudfront.net/eyJidWNrZXQiOiJiYXliYXlpbmh1Yi13ZWJzaXRlLWRldmVsb3BtZW50Iiwia2V5IjoiMWY5ODdjZTEtMmE5OC00ZTBiLTgxODQtMzc1YjA1YWZkODliLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0Ijo0NTAsImZpdCI6ImNvdmVyIn19fQ==",
          "https://d391qcuriguuyo.cloudfront.net/eyJidWNrZXQiOiJiYXliYXlpbmh1Yi13ZWJzaXRlLWRldmVsb3BtZW50Iiwia2V5IjoiNjE3YmNlMGQtNTIzNi00YTFiLWI2OTUtZTk2MjEyYjE4ZWFiLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0Ijo0NTAsImZpdCI6ImNvdmVyIn19fQ==",
          "https://d391qcuriguuyo.cloudfront.net/eyJidWNrZXQiOiJiYXliYXlpbmh1Yi13ZWJzaXRlLWRldmVsb3BtZW50Iiwia2V5IjoiMWY5ODdjZTEtMmE5OC00ZTBiLTgxODQtMzc1YjA1YWZkODliLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0Ijo0NTAsImZpdCI6ImNvdmVyIn19fQ==",
          "https://d391qcuriguuyo.cloudfront.net/eyJidWNrZXQiOiJiYXliYXlpbmh1Yi13ZWJzaXRlLWRldmVsb3BtZW50Iiwia2V5IjoiNjE3YmNlMGQtNTIzNi00YTFiLWI2OTUtZTk2MjEyYjE4ZWFiLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0Ijo0NTAsImZpdCI6ImNvdmVyIn19fQ==",
          "https://d391qcuriguuyo.cloudfront.net/eyJidWNrZXQiOiJiYXliYXlpbmh1Yi13ZWJzaXRlLWRldmVsb3BtZW50Iiwia2V5IjoiMWY5ODdjZTEtMmE5OC00ZTBiLTgxODQtMzc1YjA1YWZkODliLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0Ijo0NTAsImZpdCI6ImNvdmVyIn19fQ=="
        ],
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

  @ViewChild('page') pageEl! : ElementRef<HTMLDivElement>;

  previewCount : number = 0;
  viewportGallery : boolean = false;

  ngAfterViewInit(): void {
    this.countPreviews();
  }
  
  @HostListener( 'window:resize' )
  countPreviews() {
    let width = this.pageEl.nativeElement.clientWidth;
    this.previewCount = Math.floor( width / 180 );
  }

  showGallery() {
    this.viewportGallery = true;
  }
  hideGallery() {
    this.viewportGallery = false;
    console.log(this.viewportGallery);
    
  }

}