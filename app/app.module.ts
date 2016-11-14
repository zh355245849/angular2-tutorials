import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from "./components/app/app.component";
import { BookComponent } from "./components/book/book.component";
import { BookListComponent } from "./components/book-list/book-list.component";

import { BookService } from "./services/books/books.service";

@NgModule({
  imports: [BrowserModule, HttpModule, JsonpModule],
  declarations: [
    BookComponent, BookListComponent, AppComponent
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})

export class AppModule { }
