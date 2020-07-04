import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PrincipalService } from '../../services/principal.service';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.scss']
})
export class EstatisticasComponent implements OnInit {

	pagina = 'estatisticas';

	public doughnutChartOptions = {
		legend: { position: 'bottom' }
	};

	public doughnutChartLabels = ['Ruim', 'Médio', 'Bom'];
    public doughnutChartData = [0, 0, 0];
    public doughnutChartType = 'doughnut';

    public barChartOptions = {
	    scaleShowVerticalLines: false,
	    responsive: true,
	    legend: { position: 'bottom' },
	    scales : {
	        yAxes: [{
	           ticks: {
	              beginAtZero: true,
	            }
	        }]
	      }
	  };
	  public barChartLabels = [];
	  public barChartType = 'bar';
	  public barChartLegend = false;
	  public barChartData = [
	    {data: []}
	  ];

  constructor(
  	private router: Router,
  	private principalService: PrincipalService,
  ) {
  	this.principalService.getAvaliacoes().subscribe((response: any) => {
  		this.doughnutChartData = [response['ruim'], response['medio'], response['bom']];
  	}, error => {
      	alert('Ocorreu um erro ao carregar a página!');
    });

    this.principalService.getCursos().subscribe((response: any) => {
  		for(let curso of response){
  			this.barChartLabels.push(curso['nome']);
  			this.barChartData[0].data.push(curso['acessos']);
  		}
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
