import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CicloVidaComponent } from './components/ciclo-vida/ciclo-vida.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.router';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { 
      path: 'usuario/:id', 
      component: UsuarioComponent,
      children: USUARIO_ROUTES
    },
    { path: 'ciclo', component: CicloVidaComponent },
    { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);