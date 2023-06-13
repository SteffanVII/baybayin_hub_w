import {Component, Input, OnInit} from '@angular/core'
import { Promo } from '../../pages/silverMembership/exclusive.model';

@Component({
    selector : 'c-offer',
    templateUrl : './offer.component.html',
    styleUrls : ['./offer.component.scss']
})
export class OfferComponent {
    @Input() data : Promo | undefined;

    
}