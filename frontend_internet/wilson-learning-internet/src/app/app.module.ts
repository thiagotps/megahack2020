import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './paginas/login/login.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EstatisticasComponent } from './paginas/estatisticas/estatisticas.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CursosComponent, DialogAdicionarCurso, DialogAdicionarQuestionario } from './paginas/cursos/cursos.component';
import { ColaboradoresComponent, DialogAdicionarColaborador } from './paginas/colaboradores/colaboradores.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EstatisticasComponent,
    CursosComponent,
    ColaboradoresComponent,
    DialogAdicionarCurso,
    DialogAdicionarQuestionario,
    DialogAdicionarColaborador,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  entryComponents: [
    DialogAdicionarCurso,
    DialogAdicionarQuestionario,
    DialogAdicionarColaborador,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
