import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
    ButtonComponent,
    HeaderComponent,
    InfoComponent,
    ModalWindowComponent,
    SearchComponent,
} from './components';
import { IconsModule } from './icons/icons.module';
import { DurationPipe } from './pipes';

const COMPONENTS = [
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    SearchComponent,
    ModalWindowComponent,
];

const PIPES = [DurationPipe];

@NgModule({
    declarations: [COMPONENTS, PIPES],
    imports: [CommonModule, FontAwesomeModule, IconsModule],
    exports: [COMPONENTS, PIPES, CommonModule],
})
export class SharedModule {}
