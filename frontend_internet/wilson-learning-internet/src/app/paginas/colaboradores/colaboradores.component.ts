import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PrincipalService } from '../../services/principal.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent implements OnInit {

  pagina = 'colaboradores';

  listaColaboradores = ['colaborador 1', 'colaborador 2', 'colaborador 3'];

  constructor(
  	private router: Router,
    private principalService: PrincipalService,
  ) {
    this.principalService.getColaboradores().subscribe((response: any) => {
      this.listaColaboradores = response;
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
