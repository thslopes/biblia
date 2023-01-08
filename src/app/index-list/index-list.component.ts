import { Component } from '@angular/core';
import { BIBLE, Book, Chapter, Testament } from './index';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-index-list',
  templateUrl: './index-list.component.html',
  styleUrls: ['./index-list.component.css']
})
export class IndexListComponent {
  constructor(private http: HttpClient) { };

  bible = BIBLE;

  visibleTestament = "";
  visibleBook = "";
  chapterText = "";
  chapterTitle = "";

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

  showChapter(item: Book, chapter: number) {
    this.visibleTestament = "";
    this.visibleBook = "";
    this.chapterTitle = `${item.name} ${chapter}`;
    this.http.get<Chapter>(`/assets/arc/${item.abbrev}/${chapter}.json`)
      .subscribe((data: Chapter) => this.chapterText = data.text);
  }
}

