import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1 [appResaltado]="'blue'">Miscelania</h1>
    <app-ng-style></app-ng-style>
    <hr/>
    <app-css></app-css>
    <p>Párrado desde app.component.html</p>
    <hr/>
    <app-ng-class></app-ng-class>
    <hr/>
    <p appResaltado>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ullam aspernatur iste, officia dicta nisi, omnis laudantium autem, numquam laborum consequuntur? Ullam, temporibus. Veniam odit accusamus expedita quod eveniet repellat?</p>
    <hr/>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
