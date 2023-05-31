import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";

@Component({
    selector : 'c-gallery',
    templateUrl : './gallery.component.html',
    styleUrls : ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    @Input() imgUrls : string[] = [];
    position  : number = 0;
    len : number = 0;
    slideLeft : boolean = false;
    slideRight : boolean = false;
    front : boolean = false;
    to : boolean = true;
    frontUrl : string = '';
    backUrl : string = '';

    @ViewChild( 'previewsContainer' ) prevCon! : ElementRef<HTMLDivElement>;
    
    ngOnInit(): void {
        this.len = this.imgUrls.length - 1;
        this.frontUrl = this.imgUrls[this.position];
        this.backUrl = this.imgUrls[this.position];
    }

    changePosition( index : number ) {
        this.position = index;
        this.frontUrl = this.imgUrls[this.position];
        this.backUrl = this.imgUrls[this.position];
        
        let target = this.prevCon.nativeElement.querySelector(`#prev-img-${index}`) as HTMLDivElement;
        let parent = this.prevCon.nativeElement;

        let pos = target.offsetLeft - ((parent.clientWidth - target.offsetWidth) / 2);
        parent.scrollTo({
            behavior : 'smooth',
            left : pos
        })
    }

    slide( direction : number ) {
        if ( !this.slideLeft && !this.slideRight ) {
            if ( direction === 0 ) {
                this.slideLeft = true;
                this.position = this.position == 0 ? this.len : this.position - 1;
            } else {
                this.slideRight = true;
                this.position = this.position == this.len ? 0 : this.position + 1;
            }
            if ( this.front ) {
                this.backUrl = this.imgUrls[this.position];
                this.to = false;
            } else {
                this.frontUrl = this.imgUrls[this.position];
                this.to = true;
            }

            let target = this.prevCon.nativeElement.querySelector(`#prev-img-${this.position}`) as HTMLDivElement;
            let parent = this.prevCon.nativeElement;

            let pos = target.offsetLeft - ((parent.clientWidth - target.offsetWidth) / 2);

            parent.scrollTo({
                behavior : 'smooth',
                left : pos
            })

        }
    }

    slidingEnd( e : AnimationEvent ) {
        let target = e.target as HTMLDivElement;

        if ( target.classList.contains('gallery__curr-image-container__front') && !this.front && this.to ) {
            this.front = true;
            this.slideLeft = false;
            this.slideRight = false;
        } else if ( target.classList.contains('gallery__curr-image-container__back') && this.front && !this.to ) {
            this.front = false;
            this.slideLeft = false;
            this.slideRight = false;
        }
    }
}