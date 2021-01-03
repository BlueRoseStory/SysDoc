import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../shared/material.module';

import { DocsRoutingModule } from './docs-routing.module';
import { DocsAppComponent } from './docs-app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [DocsAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent],
  imports: [
    CommonModule,
    DocsRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule    
  ]
})
export class DocsModule { }
