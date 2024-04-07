import { Injectable } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { HttpClient } from '@angular/common/http';
import { PlatilloService } from './platillo.service';
import { CodigoPostalService } from './codigo-postal.service';
import { CarritoService } from './carrito.service';
import { PedidoService } from './pedido.service';
import { ClienteService } from './cliente.service';
import { RestauranteInfoService } from './restaurante-info.service';

@Injectable({
  providedIn: 'root'
})
export class RespositorioService {
  public categoria: CategoriaService
  public platillo : PlatilloService
  public codigoPostal: CodigoPostalService
  public carrito: CarritoService
  public cliente: ClienteService
  public pedido: PedidoService
  public restauranteInfo: RestauranteInfoService

  constructor(private httpClient: HttpClient) { 
    this.categoria = new CategoriaService(this.httpClient)
    this.platillo = new PlatilloService(this.httpClient)
    this.codigoPostal = new CodigoPostalService(this.httpClient)    
    this.carrito = new CarritoService()
    this.cliente = new ClienteService(this.httpClient)
    this.pedido = new PedidoService(this.httpClient)
    this.restauranteInfo = new RestauranteInfoService(this.httpClient)
  }  
}