import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { ProgressoComponent } from './paginas/progresso/progresso.component';
import { CursoComponent, DialogContentExampleDialog } from './paginas/curso/curso.component';
import { PesquisarComponent } from './paginas/pesquisar/pesquisar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProgressoComponent,
    CursoComponent,
    PesquisarComponent,
    DialogContentExampleDialog,
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
    MatCheckboxModule,
    MatRadioModule,
    MatSnackBarModule,
  ],
  entryComponents: [
    DialogContentExampleDialog,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
