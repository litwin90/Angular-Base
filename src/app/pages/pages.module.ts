import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesModule } from './courses/courses.module';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [EditCourseComponent, HomeComponent],
    imports: [CommonModule, CoursesModule],
    exports: [EditCourseComponent, HomeComponent],
})
export class PagesModule {}
