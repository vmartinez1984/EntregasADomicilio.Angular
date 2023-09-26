import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {

  obtenerTodos(): Observable<any>{
    return this.httpClient.get(this.url)
  }

  constructor(private httpClient: HttpClient) { }

  private url = environment.urlEntregasADomcilioApi + "Platillos"
}
