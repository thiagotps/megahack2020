import { Component, OnInit } from '@angular/core';

import { PrincipalService } from '../../services/principal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	email: string;
	senha: string;

  constructor(
  	private principalService: PrincipalService
  ) { }

  ngOnInit() {
  }

  realizaLogin(){
  	this.principalService.postLogin({email: this.email, senha: this.senha}).subscribe((response: any) => {
  		alert('Login Realizado com Sucesso');
  	}, error => {
      	alert('Email ou Senha errados!');
    });
  }

}
