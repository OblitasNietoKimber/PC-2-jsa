import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Productos } from './pages/productos/productos';
import { Registro } from './pages/registro/registro';
import { Pregunta1 } from './pages/pregunta1/pregunta1';
import { Pregunta2 } from './pages/pregunta2/pregunta2';
export const routes: Routes = [
{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
{ path: 'inicio', component: Inicio },
{ path: 'productos', component: Productos },
{ path: 'registro', component: Registro },
{ path: 'pregunta1', component: Pregunta1 },
{ path: 'pregunta2', component: Pregunta2 },
{ path: '**', redirectTo: 'inicio' }
];
