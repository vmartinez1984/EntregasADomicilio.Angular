import { Component } from '@angular/core';
import { PedidoVentaDto } from 'src/app/interfaces/pedido-venta-dto';
import { RespositorioService } from 'src/app/services/respositorio.service';

@Component({
  selector: 'app-lista-de-pedidos',
  templateUrl: './lista-de-pedidos.component.html',
  styleUrls: ['./lista-de-pedidos.component.css']
})
export class ListaDePedidosComponent {
  pedidos: PedidoVentaDto[]=[]

  constructor(private servicio: RespositorioService){
    this.servicio.pedido.obtenerTodosLosPedidos().subscribe(
      {
        next: (pedidos)=>{
          this.pedidos = pedidos
        }
      }
    )
  }
}
