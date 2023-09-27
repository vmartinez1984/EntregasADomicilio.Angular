import { Component } from '@angular/core';
import { RespositorioService } from 'src/app/services/respositorio.service';

@Component({
  selector: 'app-detalle-del-cliente',
  templateUrl: './detalle-del-cliente.component.html',
  styleUrls: ['./detalle-del-cliente.component.css']
})
export class DetalleDelClienteComponent {

  constructor(private servicio: RespositorioService){
    this.servicio.cliente.obtenerCliente().subscribe({next:(data)=>{console.log(data)}})
  }
}
