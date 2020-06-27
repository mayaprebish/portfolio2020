import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.scss']
})
export class CloudComponent implements OnInit {

  raindrops = [
    {value: "html", size: "s100"},
    {value: "css", size: "s100"},
    {value: "js/ts", size: "s80"},
    {value: "C#", size: "s60"},
    {value: "java", size: "s60"},
    {value: "python", size: "s40"},
    {value: "MATLAB", size: "s20"},
    {value: "R", size: "s20"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
