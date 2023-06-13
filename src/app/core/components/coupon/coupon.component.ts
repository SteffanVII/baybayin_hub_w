import {Component, Input, OnInit} from '@angular/core'
import { Promo } from '../../pages/silverMembership/exclusive.model';

@Component({
    selector : 'c-coupon',
    templateUrl : './coupon.component.html',
    styleUrls : ['./coupon.component.scss']
})
export class CouponComponent {
    @Input() data : Promo | undefined;

    
}