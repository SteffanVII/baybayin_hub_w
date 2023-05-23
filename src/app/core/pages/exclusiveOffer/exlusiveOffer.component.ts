import { Component } from "@angular/core";

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
}