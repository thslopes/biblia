import { Component } from '@angular/core';
import { BIBLE, Book, Testament } from './index';

@Component({
  selector: 'app-index-list',
  templateUrl: './index-list.component.html',
  styleUrls: ['./index-list.component.css']
})
export class IndexListComponent {
  bible = BIBLE;

  visibleTestament = "";
  visibleBook = "";

  showTestament(item: Testament) {
    if (this.visibleTestament == item.name) {
      this.visibleTestament = "";
      return;
    }
    this.visibleTestament = item.name;
  }

  showBook(item: Book) {
    if (this.visibleBook == item.name) {
      this.visibleBook = "";
      return;
    }
    this.visibleBook = item.name;
  }
}

