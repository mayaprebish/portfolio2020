import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  pages = [
    'about',
    'work',
    'resume',
    'contact'
  ];
  activePage: string = 'about';

  setActive(page: string): void {
    this.activePage = page;
  }
}
