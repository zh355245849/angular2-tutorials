import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from "./components/app/app.component";
import { BookFormComponent } from "./components/book-form/book-form.component";
import { BookComponent } from "./components/book/book.component";
import { BookDetailComponent } from "./components/book-detail/book-detail.component";
import { BookListComponent } from "./components/book-list/book-list.component";

import { PostComponent } from "./components/post/post.component";
import { PostListComponent } from "./components/post-list/post-list.component";
import { PostDetailComponent } from "./components/post-detail/post-detail.component";
import { PostFormComponent } from "./components/post-form/post-form.component";

import { BookService } from "./services/books/books.service";
import { PostService } from "./services/posts/posts.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'book-list',
        pathMatch: 'full'
      },
      { path: 'book-list', component: BookListComponent },
      { path: 'book-list/new', component: BookFormComponent },
      { path: 'book-list/:id', component: BookDetailComponent },
      { path: 'post-list/archive/:page', component: PostListComponent },
      { path: 'post-list/:id', component: PostDetailComponent },
      { path: 'post-list/form/new', component: PostFormComponent }
    ])
  ],
  declarations: [
    BookComponent, BookListComponent, AppComponent, BookDetailComponent, BookFormComponent,
    PostComponent, PostListComponent, PostDetailComponent, PostFormComponent
  ],
  providers: [BookService, PostService],
  bootstrap: [AppComponent]
})

export class AppModule { }
