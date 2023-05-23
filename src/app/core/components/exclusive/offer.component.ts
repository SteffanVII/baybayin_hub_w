import {Component, Input, OnInit} from '@angular/core'

@Component({
    selector : 'c-offer',
    templateUrl : './offer.component.html',
    styleUrls : ['./offer.component.scss']
})
export class OfferComponent {
    @Input() data : {
        imgUrl : string
    } = {
        imgUrl : ''
    }
}