import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './paginas/login/login.component';
import { ProgressoComponent } from './paginas/progresso/progresso.component';
import { CursoComponent } from './paginas/curso/curso.component';
import { PesquisarComponent } from './paginas/pesquisar/pesquisar.component';

const routes: Routes = [
	{ path: 'progresso', component: ProgressoComponent },
	{ path: 'curso', component: CursoComponent },
	{ path: 'pesquisar', component: PesquisarComponent },
	{ path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
