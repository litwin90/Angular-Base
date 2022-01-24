import { Component, Input } from "@angular/core";


@Component({
    selector: 'card',
    templateUrl: './courseCard.component.html',
    styleUrls: ['./courseCard.component.css']

})

export class CourseCardComponent {

    _duration: string = '';
    _editable: string = '';
    isEditable: Boolean = false
    @Input() title: string = '';
    @Input() text?: string;
    @Input() creationDate?: string;
    @Input() authors?: string;
    @Input()
    set duration(duration: string) {
        if (duration.length > 0)
            this._duration = `${Math.trunc(Number(duration) / 60)}:${Number(duration) % 60} hours`;
    }
    get duration() { return this._duration; }

    @Input()
    set editable(editable: string) {
        this._editable = editable;
        this.isEditable = this._editable == 'true';
    }
    get editable() { return this._editable }


}
