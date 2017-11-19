import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works! {{id}}
    </p>
  `,
  styles: [
    'p { color: red; }'
  ]
})
export class UsuarioDetalleComponent implements OnInit {
  id: string = "";
  constructor(private _activatedRoute:ActivatedRoute) { 
    this._activatedRoute.parent.params.subscribe(params => {
      this.id = params.id;
    })
  }

  ngOnInit() {
  }

}
