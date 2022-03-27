import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCross, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@NgModule({
    declarations: [],
    imports: [CommonModule, FontAwesomeModule],
})
export class IconsModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(faPen, faTrash, faCross);
    }
}
