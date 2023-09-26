import { Injectable } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { HttpClient } from '@angular/common/http';
import { PlatilloService } from './platillo.service';
import { CodigoPostalService } from './codigo-postal.service';
import { ClienteService } from './cliente.service';

@Injectable({
  providedIn: 'root'
})
export class RespositorioService {
  public categoria: CategoriaService
  public platillo : PlatilloService
  public codigoPostal: CodigoPostalService
  public cliente: ClienteService

  constructor(private httpClient: HttpClient) { 
    this.categoria = new CategoriaService(this.httpClient)
    this.platillo = new PlatilloService(this.httpClient)
    this.codigoPostal = new CodigoPostalService(this.httpClient)
    this.cliente = new ClienteService(this.httpClient)
  }

  
}
