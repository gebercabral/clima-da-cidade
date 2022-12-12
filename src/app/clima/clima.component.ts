import { ClimaService } from './clima.service';
import { Component, OnInit } from '@angular/core';
import { Clima } from './clima.model';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {
    cidade!: string;
    clima!: Clima;
    renderizarClima: Boolean = false;

  constructor(private climaService: ClimaService) {
    this.clima = new Clima();
  }

  ngOnInit(): void {
  }

  consultarCidade(){

    this.climaService.consultarCidade(this.cidade).subscribe({

        next: (result: any) => {
          this.clima = new Clima();
          this.clima.temperatura =  result.temp;
          this.clima.sensacaoTermica = result.feels_like;
          this.clima.umidade = result.humidity;
          this.renderizarClima = true;

        },
        error: (error: Error) => console.error(error)
      });
    }

}
