import { Component , Input, OnInit} from "@angular/core";
import { pass } from "../silverMembership/exclusive.model";

@Component({
    selector : 'c-pass',
    templateUrl : './pass.component.html',
    styleUrls : [
        './pass.component.scss'
    ]
})
export class PassComponent {
    @Input() data : pass | undefined;
}