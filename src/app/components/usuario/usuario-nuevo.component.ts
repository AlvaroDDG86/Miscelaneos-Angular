import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works! {{id}}
    </p>
  `,
  styles: [
    'p { color: green; }'
  ]
})
export class UsuarioNuevoComponent implements OnInit {
  id: string = "";
  constructor(private _activatedRoute:ActivatedRoute) { 
    this._activatedRoute.parent.params.subscribe(params => {
      this.id = params.id;
    })
  }

  ngOnInit() {
  }

}
