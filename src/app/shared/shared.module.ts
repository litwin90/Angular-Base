import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from '../app-routing.module';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { BreadcrumbModule } from 'angular-crumbs';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { MinutesToHours } from './pipes/time_pipe';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
        FooterComponent,
        HeaderComponent,
        LogoComponent,
        MinutesToHours,
    ],
    imports: [
        AppRoutingModule,
        BreadcrumbModule,
        CommonModule,
        MatIconModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatTooltipModule,
    ],
    exports: [BreadcrumbsComponent, FooterComponent, HeaderComponent, MinutesToHours],
})
export class SharedModule {}
