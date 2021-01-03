import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './user/auth-guard.service';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'docs',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./docs/docs.module').then(m => m.DocsModule)
  },
  {
    path: 'books',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./books/book.module').then(m => m.BookModule)
  },
  {
    path: 'demo',
    loadChildren: () =>
      import('./demo/demo.module').then(m => m.DemoModule)
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

