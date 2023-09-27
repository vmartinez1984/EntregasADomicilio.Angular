import { Component } from '@angular/core';
import { RespositorioService } from 'src/app/services/respositorio.service';

@Component({
  selector: 'app-autorizado',
  templateUrl: './autorizado.component.html',
  styleUrls: ['./autorizado.component.css']
})
export class AutorizadoComponent {

  constructor(private seguridad: RespositorioService){}

  estaAutorizado (): boolean{
    return this.seguridad.sesion.estaLogueado()
  }
}
