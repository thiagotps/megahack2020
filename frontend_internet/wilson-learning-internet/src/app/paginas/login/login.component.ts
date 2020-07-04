import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  	private router: Router,
  	private principalService: PrincipalService,
  ) { }

  ngOnInit() {
  }

  realizaLogin(){
  	this.principalService.postLogin({email: this.email, senha: this.senha}).subscribe((response: any) => {
  		this.router.navigate(['estatisticas']);
  	}, error => {
      	alert('Email ou Senha errados!');
    });
  }

}
