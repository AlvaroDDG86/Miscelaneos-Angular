import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar works! {{id}}
    </p>
  `,
  styles: [
    'p { color: blue; } ' 
  ]
})
export class UsuarioEditarComponent implements OnInit {
  id: string = "";
  constructor(private _activatedRoute:ActivatedRoute) { 
    this._activatedRoute.parent.params.subscribe(params => {
      this.id = params.id;
    })
  }

  ngOnInit() {
  }

}
