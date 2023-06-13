import { Component } from "@angular/core";

@Component({
    selector : 'page-silverMembership',
    templateUrl : './silverMembership.component.html',
    styleUrls : [
        './silverMembership.component.scss'
    ]
})
export class silverMembershipPageComponent {

    imgUrl  : string = '../../../../assets/';
    offers : {
        imgUrl : string
    }[] = [
        { imgUrl : '../../../../promo1.png' },
       
    ]
    
}