import { Component, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'search',
    styleUrls: ['./search.component.css'],
    templateUrl: './search.component.html',
})
export class SearchComponent {
    @Input() searchValue: string = '';
    @Output() event: any;
    searchForm = new FormGroup({
        value: new FormControl(''),
    });
}
