import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrashRestoreAlt } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
    imports: [CommonModule, FontAwesomeModule],
    declarations: [HeaderComponent, InfoComponent, ButtonComponent],
    exports: [HeaderComponent, InfoComponent, ButtonComponent]
})

export class SharedModule {
    constructor(library: FaIconLibrary) {
        // Add an icon to the library for convenient access in other components
        library.addIcons(faPen, faTrashRestoreAlt);
    }
}
