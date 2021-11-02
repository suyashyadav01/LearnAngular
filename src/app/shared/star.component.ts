import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges
{
    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }
    @Input() rating: number = 0;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    cropWidth: number = 75;
    onClick(): void{
        this.ratingClicked.emit(`Ratings is ${this.rating}`);
    }
}