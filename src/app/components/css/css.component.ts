import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>Párrado desde css.component.html</p>
  `,
  styles: [`
    p{
      color:green;
      font-size:10px;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
