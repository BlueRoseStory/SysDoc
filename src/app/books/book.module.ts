import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { BookShellComponent } from './book-shell/book-shell.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-edit/book-edit.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './state/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './state/book.effects';

const bookRoutes: Routes = [
  { path: '', component: BookShellComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(bookRoutes),
    StoreModule.forFeature('books', bookReducer),
    EffectsModule.forFeature([BookEffects])
  ],
  declarations: [
    BookShellComponent,
    BookListComponent,
    BookEditComponent
  ]
})
export class BookModule { }
