import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { InicioDesesionDto } from '../interfaces/inicio-desesion-dto';
import { TokenDto } from '../interfaces/token-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioDeSesionService {

  constructor(private httpCliente: HttpClient) { }

  private url = environment.urlEntregasADomcilioApi + "Clientes/"

  iniciarSesion(inicioDeSesion: InicioDesesionDto): Observable<TokenDto> {
    return this.httpCliente.post<TokenDto>(this.url + "InicioDesesion", inicioDeSesion)
  }
}
