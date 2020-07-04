import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material';

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

  openDialog() {
    const dialogRef = this.dialog.open(DialogAdicionarCurso);

    dialogRef.afterClosed().subscribe(result => {
      if(result.titulo !== null && result.titulo !== "" && result != ""){
        this.listaCursos.push({nome: result.tituloCurso, acessos: 0});
      }
    });
  }
}

export interface PeriodicElement {
  titulo: string;
  tipo: string;
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  styleUrls: ['./cursos.component.scss']
})
export class DialogAdicionarCurso {

  @ViewChild('selecionaArquivo', {static: false}) selecionaArquivo: ElementRef<HTMLElement>;
  @ViewChild('table', {static: false}) table: MatTable<any>;

  displayedColumns: string[] = ['titulo', 'tipo'];
  dataSource = [
  ];

  obj = {
    tituloCurso: "",
    tituloConteudo: "",
    tipoConteudo: ""
  };

  constructor(
    public dialog: MatDialog,
  ) { }

  adicionarConteudo() {
    if(this.obj.tipoConteudo==="pdf" || this.obj.tipoConteudo==="video"){
      let el: HTMLElement = this.selecionaArquivo.nativeElement;
      el.click();
    }else if(this.obj.tipoConteudo==="questionario"){
      this.openDialog();
    }
  }

  aidiconar() {
    let tipo = "";

    if(this.obj.tipoConteudo==="pdf"){
      tipo = "PDF";
    }else if(this.obj.tipoConteudo==="video"){
      tipo = "Vídeo";
    }else if(this.obj.tipoConteudo==="questionario"){
      tipo = "Questionario";
    }

    this.dataSource.push({
      titulo: this.obj.tituloConteudo,
      tipo: tipo
    });

     this.table.renderRows();

     this.obj.tituloConteudo = "";
     this.obj.tipoConteudo = "";
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAdicionarQuestionario);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'dialog-content-example-dialog2',
  templateUrl: 'dialog-content-example-dialog2.html',
  styleUrls: ['./cursos.component.scss']
})
export class DialogAdicionarQuestionario {

}
