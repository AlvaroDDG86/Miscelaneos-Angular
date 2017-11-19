import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  template: `
    <h1 [appResaltado]="'greenyellow'">Ciclo de vida</h1>
    <p>
      ciclo-vida works!
    </p>
  `,
  styles: []
})
export class CicloVidaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
