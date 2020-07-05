import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PrincipalService } from '../../services/principal.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  pagina = 'curso';

  telaAtual = 'curso';

  listaCursos = [];

  listaAulas = [{
      nome: 'aula 1',
      tipo: 'pdf',
    },
    {
      nome: 'aula 2',
      tipo: 'video',
    },
    {
      nome: 'aula 3',
      tipo: 'questionario',
    }];

  constructor(
  	private router: Router,
    private principalService: PrincipalService,
    public dialog: MatDialog,
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

  irParaAula(){
    this.telaAtual = 'aula';
  }

  openDialog(aula) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: {
        aula: aula
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  styleUrls: ['./curso.component.scss']
})
export class DialogContentExampleDialog {

  selecionado: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar
  ) {}

  verificaResposta() {
    if(this.selecionado==='brasilia'){
      this.openSnackBar("Resposta correta!", "");
    }else{
      this.openSnackBar("Resposta errada!", "");
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
    });
  }

}