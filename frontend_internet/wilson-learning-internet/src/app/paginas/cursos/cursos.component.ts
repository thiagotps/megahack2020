import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PrincipalService } from '../../services/principal.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  pagina = 'cursos';

  listaCursos = [];

  constructor(
  	private router: Router,
    private principalService: PrincipalService,
  ) {
    this.principalService.getCursos().subscribe((response: any) => {
      this.listaCursos = response;
    }, error => {
        alert('Ocorreu um erro ao carregar a página!');
    });
  }

  ngOnInit() {
  }

  navegar(endereco){
	this.router.navigate([endereco]);
  }

}
