import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { PrincipalService } from '../../services/principal.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent implements OnInit {

  pagina = 'colaboradores';

  listaColaboradores = [];

  constructor(
  	private router: Router,
    private principalService: PrincipalService,
    public dialog: MatDialog,
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

  openDialog() {
    const dialogRef = this.dialog.open(DialogAdicionarColaborador);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result !== ""){
        this.listaColaboradores.push({
          nome: result,
        });
      }
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class DialogAdicionarColaborador {

  nomeColaborador = "";

}
