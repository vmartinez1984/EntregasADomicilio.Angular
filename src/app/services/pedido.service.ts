import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoVentaDtoIn, PlatilloPedidoDto } from '../interfaces/pedido-venta-dto';
import { environment } from 'src/environments/environment.development';
import { PlatilloVentaDto } from '../interfaces/platillo-dto';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  realizarPedido(nota: string, platillos: PlatilloVentaDto[]): Observable<any> {
    var pedido: PedidoVentaDtoIn = {
      comentario: nota,
      listaDetalleDelPedido: this.obtenerListaDetalleDelPedido(platillos)
    }
    return this.httpClient.post(this.url, pedido);
  }

  private obtenerListaDetalleDelPedido(platillos: PlatilloVentaDto[]): PlatilloPedidoDto[] {
    var detallesDelPedido: PlatilloPedidoDto[] = []

    platillos.forEach(platillo => {
      detallesDelPedido.push({ platilloId: platillo.id, precio: platillo.precio })
    })
    return detallesDelPedido;
  }

  private url = environment.urlEntregasADomcilioApi + "Pedidos"

  constructor(private httpClient: HttpClient) { }

  obtenerTodosLosPedidos():Observable<any>{
    return this.httpClient.get(this.url)
  }
}
