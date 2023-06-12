import { Component, Input } from "@angular/core";


@Component({
    selector : 'c-price-slider',
    templateUrl : './priceslider.component.html',
    styleUrls : [
        './priceslider.component.scss'
    ]
})
export class PriceSliderComponent {

    @Input() min : number = 0;
    @Input() max : number = 0;

    minValue : number = this.min;
    maxValue : number = this.max;

    
}