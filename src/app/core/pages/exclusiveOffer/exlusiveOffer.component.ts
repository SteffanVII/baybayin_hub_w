import { Component } from "@angular/core";
import { Promo, fanRoom} from "../silverMembership/exclusive.model";
import { fanRoomComponent } from "../fanRoom/fanRoom.component";
import { PassComponent } from "../pass/pass.component";


@Component({
    selector : 'page-exclusiveOffer',
    templateUrl : './exclusiveOffer.component.html',
    styleUrls : [
        './exclusiveOffer.component.scss'
    ]
})
export class ExclusiveofferPageComponent {

    imgUrl  : string = '../../../../assets/';
    offers : {
        imgUrl : string
    }[] = [
        { imgUrl : '../../../../assets/KuboDorm_5D4N.png' },
        { imgUrl : '../../../../assets/work-by-the-beach_7days.png' },
        { imgUrl : '../../../../assets/work-by-the-beach_30days_rev1.png' },
        { imgUrl : '../../../../assets/website-artwork.png' }
    ]

    Promos : Promo[] = [
        {
            image : '../../../../assets/KuboDorm_5D4N.png',
            images : [

            ],
            name : "Silver Membership Promo",
            quantity: 1,
            price : {
                value : 1499,
                cutPer : 50
            },
            section : [
                { title : 'Silver Membership Benefits', contents : [
                    'Membership are with 1 year validity.',
                    'Access to Exclusive invites and offers.',
                    'PROMO-EXTENSION POWERS',
                    'As a Silver Member, you can request to avail our past Promo offers posted in our social media pages.',

                ] },
                { title : ' ROOM ACCOMMODATION PERKS:' , contents : [
                    'GUARANTEED 50% discount on any day of the year in Baroro-Launion Hub (not applicable on holidays).',
                    'Dorm Fan Room with minimum  of 2 nights stay.',
                    'Private AC Room with minimum  of 3 nights stay.',
                    'GUARANTEED 20% discount on any day of the year in Baybayin-Pasay Hub (not applicable on holidays).'
                    
                ] },
                { title : 'COWORKING SPACES:' , contents : [
                    'Year-round access to Baroro and San Juan, La Union CoWorking Hubs.',
                    'HOT-DESK ACCESS',
                    'High-speed internet access.',
                    'FREE 30 minutes use of ZOOM booth.',
                    '50% discount on selected cocktails.',
                    'Access to attic room (for power naps, first come first serve basis).',

                ]
                },
                {
                    title : ' TERMS AND CONDITIONS: ', contents : [
                        'Silver Membership are non-transferrable & non-refundable.',
                        'Present your Silver Membership card to gain FULL-ACCESS in Baroro and San Juan, La Union CoWorking Hubs.',
                        'Present your Silver Membership card to gain FULL-ACCESS in Baroro and San Juan, La Union CoWorking Hubs.',
                        'NO MEMBERSHIP Card – NO Membership Access.'
                    ]

                }
                
                
            ]
        },
        {
            image :'../../../../assets/work-by-the-beach_7days.png' ,
            images : [

            ],
            name : "Dorm Fan Room_5D4N",
            quantity: 1,
            price : {
                value :1596,
                cutPer : 40,
            },

            section : [
                { title : 'CoLiving & CoWorking in LA UNION', contents : [
                    'CoLiving & CoWorking in LA UNION',
                    'Php. 1,596.00 per head for 5 Days and 4 Nights stay in La Union. ',
                    'Location:  Bacnotan, La Union',
                    ]
                },

            ]
        },
        {
            image :'../../../../assets/work-by-the-beach_30days_rev1.png' ,
            images : [

            ],
            name : "Dorm Fan Room_5D4N",
            quantity: 1,
            price : {
                value :1596,
                cutPer : 40,
            },

            section : [
                { title : 'CoLiving & CoWorking in LA UNION', contents : [
                    'CoLiving & CoWorking in LA UNION',
                    'Php. 1,596.00 per head for 5 Days and 4 Nights stay in La Union. ',
                    'Location:  Bacnotan, La Union',
                    ]
                },
                
            ]
        },
        {
            image :'../../../../assets/website-artwork.png' ,
            images : [

            ],
            name : "Dorm Fan Room_5D4N",
            quantity: 1,
            price : {
                value :1596,
                cutPer : 40,
            },

            section : [
                { title : 'CoLiving & CoWorking in LA UNION', contents : [
                    'CoLiving & CoWorking in LA UNION',
                    'Php. 1,596.00 per head for 5 Days and 4 Nights stay in La Union. ',
                    'Location:  Bacnotan, La Union',
                    ]
                },
                
            ]
        },
        
    ]

}