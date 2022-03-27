import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CoursesComponent } from './courses.component';

@NgModule({
    declarations: [CoursesComponent, CourseListComponent, CourseCardComponent],
    imports: [SharedModule],
    exports: [CoursesComponent],
})
export class CoursesModule {}
