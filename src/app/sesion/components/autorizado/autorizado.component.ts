import { Component } from '@angular/core';
import { RespositorioService } from 'src/app/services/respositorio.service';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-autorizado',
  templateUrl: './autorizado.component.html',
  styleUrls: ['./autorizado.component.css']
})
export class AutorizadoComponent {

  constructor(private sesion: SesionService){}

  estaAutorizado (): boolean{
    return this.sesion.estaLogueado()
  }
}
