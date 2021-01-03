import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocsAppComponent } from './docs-app.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  {
    path: '', component: DocsAppComponent,
    children: [
      { path: '', component: MainContentComponent }
    ]
  }
];

// { path: '**', redirectTo: '' }

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
