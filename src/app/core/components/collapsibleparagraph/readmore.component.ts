import { Component, Input } from "@angular/core";

@Component({
    selector : 'c-readmore',
    templateUrl : './readmore.component.html',
    styleUrls : [
        './readmore.component.scss'
    ]
})
export class ReadMoreComponent {

    @Input() text : string = "";
    @Input() max : number = 300;

    collapse : boolean = false;

    collapseEvent() {
        this.collapse = !this.collapse;
    }
    
}