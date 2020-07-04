import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PrincipalService } from '../../services/principal.service';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.scss']
})
export class ProgressoComponent implements OnInit {

	pagina = 'progresso';

  public doughnutChartOptions = {
    legend: { position: 'bottom' }
  };

  public doughnutChartLabels = ['Ruim', 'Médio', 'Bom', 'Falta Fazer'];
    public doughnutChartData = [0, 0, 0];
    public doughnutChartType = 'doughnut';


  constructor(
  	private router: Router,
    private principalService: PrincipalService,
  ) {
    this.principalService.getAvaliacoes().subscribe((response: any) => {
      this.doughnutChartData = [response['ruim'], response['medio'], response['bom'], response['falta_fazer']];
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
