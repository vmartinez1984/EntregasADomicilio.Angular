import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { RestauranteInfoDto } from '../interfaces/restaurante-info-dto';

@Injectable({
  providedIn: 'root'
})
export class RestauranteInfoService {
  private url = environment.urlEntregasADomcilioApi + "tiendas"

  constructor(private httpClient: HttpClient) { }

  obtener():Observable<RestauranteInfoDto>{
    return this.httpClient.get<RestauranteInfoDto>(this.url)
  }
}
