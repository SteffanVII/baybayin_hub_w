import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";

@Component({
    selector : 'c-viewport-gallery',
    templateUrl : './viewportgallery.component.html',
    styleUrls : ['./viewportgallery.component.scss']
})
export class ViewportGalleryComponent {

    @ViewChild('previewsContainer') previewsContainer! : ElementRef<HTMLDivElement>

    @Input() images : string[] = [];
    @Input() position : number = 0;
    @Output() closeEvent : EventEmitter<null> = new EventEmitter();

    closing : boolean = false;
    fullOpacity : boolean = false;

    close() {
        if ( this.fullOpacity ) {
            this.closing = true;
        }
    }

    transitionEnd( event : AnimationEvent ) {
        let target = event.target as HTMLDivElement;
        if ( target.className === "viewport-gallery" ) {
            if ( !this.closing ) {
                this.fullOpacity = true;
            }
        }
        if ( target.className === "viewport-gallery closing" ) {
            this.closeEvent.emit();
        }
    }

    prev() {
        this.position = (this.position === 0) ? this.images.length - 1 : this.position - 1;
        this.focusPreview(this.position);
    }
    
    next() {
        this.position = (this.position === this.images.length - 1) ? 0 : this.position + 1;
        this.focusPreview(this.position);
    }

    changePosition( position : number ) {
        this.position = position;
        this.focusPreview(position);
    }

    focusPreview( index : number ) {
        let target = this.previewsContainer.nativeElement.querySelector(`#viewport-gallery-preview-${index}`) as HTMLDivElement;
        let container = this.previewsContainer.nativeElement;

        let pos = target.offsetLeft - ((container.clientWidth - target.offsetWidth) / 2);

        container.scrollTo({
            behavior : 'smooth',
            left : pos
        })
    }
}