import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
