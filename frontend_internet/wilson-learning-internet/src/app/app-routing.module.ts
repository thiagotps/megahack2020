import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './paginas/login/login.component';
import { EstatisticasComponent } from './paginas/estatisticas/estatisticas.component'
import { CursosComponent } from './paginas/cursos/cursos.component'
import { ColaboradoresComponent } from './paginas/colaboradores/colaboradores.component'

const routes: Routes = [
	{ path: 'estatisticas', component: EstatisticasComponent },
	{ path: 'cursos', component: CursosComponent },
	{ path: 'colaboradores', component: ColaboradoresComponent },
	{ path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
