import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PrincipalService } from '../../services/principal.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  pagina = 'curso';

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
