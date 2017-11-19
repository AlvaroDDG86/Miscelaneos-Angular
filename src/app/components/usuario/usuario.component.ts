import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute) { 
    this._activatedRoute.params.subscribe(params => {
      console.log("Routa padre", params.id);
    })
  }

  ngOnInit() {
  }

}
