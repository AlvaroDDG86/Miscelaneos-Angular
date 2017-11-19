import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h1 [appResaltado]="'lightblue'">About</h1>
    <p>
      about works!
    </p>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
