import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AddCourseComponent } from './components/add-course/add-course.component';
import { CoursesComponent } from './courses.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { FindCourseComponent } from './components/find-course/find-course.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        AddCourseComponent,
        CoursesComponent,
        CoursesListComponent,
        FindCourseComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        SharedModule,
    ],
    exports: [CoursesComponent, FindCourseComponent],
})
export class CoursesModule {}
