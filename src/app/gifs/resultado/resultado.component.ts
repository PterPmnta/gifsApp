import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import 'animate.css';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent {
  get resultados() {
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsService) {}
}
