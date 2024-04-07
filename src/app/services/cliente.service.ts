import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { ClienteDto, ClienteDtoIn, ClienteUpdateDto } from '../interfaces/cliente-dto';
import { Observable } from 'rxjs';

export class ClienteService {
  actualizarDatos(cliente: ClienteUpdateDto): Observable<any> {
    return this.httpCliente.put(this.url, cliente)
  }

  constructor(private httpCliente: HttpClient) { }

  private url = environment.urlEntregasADomcilioApi + "Clientes/"

  agregar(cliente: ClienteDtoIn): Observable<any> {
    return this.httpCliente.post(this.url, cliente)
  }

  obtenerCliente(): Observable<ClienteDto> {
    return this.httpCliente.get<ClienteDto>(this.url)
  }
}