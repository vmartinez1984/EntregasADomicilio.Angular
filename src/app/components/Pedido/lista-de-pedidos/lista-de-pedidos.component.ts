import { Component } from '@angular/core';
import { RespositorioService } from 'src/app/services/respositorio.service';

@Component({
  selector: 'app-lista-de-pedidos',
  templateUrl: './lista-de-pedidos.component.html',
  styleUrls: ['./lista-de-pedidos.component.css']
})
export class ListaDePedidosComponent {
  constructor(private servicio: RespositorioService){
    this.servicio.pedido.obtenerTodosLosPedidos().subscribe({next: (data)=>console.log(data)})
  }
}
