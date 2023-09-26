import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { CodigoPostalDto } from '../interfaces/codigo-postal-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CodigoPostalService {

  obtener(codigoPostal: string): Observable<CodigoPostalDto[]> {
    return this.httpClient.get<CodigoPostalDto[]>(this.url + codigoPostal)
  }

  constructor(private httpClient: HttpClient) { }

  private url = environment.urlCodigosPostales
}
