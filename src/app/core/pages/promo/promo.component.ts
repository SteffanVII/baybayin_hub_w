import { Component , Input, OnInit} from "@angular/core";
import { Promo } from "../silverMembership/exclusive.model";

@Component({
    selector : 'c-promo',
    templateUrl : './promo.component.html',
    styleUrls : [
        './promo.component.scss'
    ]
})
export class PromoComponent {
    @Input() data : Promo  = { 
        image : 'https://baybayinhub.digitalcommerce.ph/wp-content/uploads/2023/01/website-artwork.png',
        name : "Silver Membership Promo",
        quantity : 1,
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
    }

    calculatePrice() {
        this.data.price.value = this.data.quantity * 1499;
      }

      
      decrementQuantity () {
        this.data.price.value -=  1499;
      }
        
      incrementQuantity () {
        this.data.price.value +=  1499;
}

}
