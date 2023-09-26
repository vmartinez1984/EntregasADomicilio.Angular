import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ClienteDto } from '../interfaces/cliente-dto';
import { Observable } from 'rxjs';
import { InicioDesesionDto } from '../interfaces/inicio-desesion-dto';
import { TokenDto } from '../interfaces/token-dto';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private readonly llaveToken = 'token'
  private readonly llaveExpiracion = 'expiracion'

  estaLogueado() {
    const token = localStorage.getItem(this.llaveToken)
    if (!token)
      return false

    const expiracion = localStorage.getItem(this.llaveExpiracion)
    const fechaDeExpiracion = new Date(expiracion!)
    if (fechaDeExpiracion <= new Date()) {
      this.cerrarSesion()
      return false
    }

    return true
  }

  iniciarSesion(inicioDeSesion: InicioDesesionDto):Observable<TokenDto> {
    return this.httpCliente.post<TokenDto>(this.url + "InicioDesesion",inicioDeSesion)
  }

  agregar(cliente: ClienteDto): Observable<any>{
    return this.httpCliente.post(this.url, cliente)
  }

  guardarToken(respuesta: TokenDto) {
    localStorage.setItem(this.llaveExpiracion, respuesta.expiracion.toString())
    localStorage.setItem(this.llaveToken, respuesta.token)
  }

  obtenerToken() {
    const token = localStorage.getItem(this.llaveToken)

    return token
  }

  obtenerCampo(campo: string): string {
    const token = localStorage.getItem(this.llaveToken)
    //console.log(JSON.parse(atob(token!.split('.')[1])))
    if (!token)
      return ''

    var dataToken = JSON.parse(atob(token.split('.')[1]))

    return dataToken[campo]
  }

  cerrarSesion() {
    localStorage.removeItem(this.llaveExpiracion)
    localStorage.removeItem(this.llaveToken)
  }

  constructor(private httpCliente: HttpClient) { }

  private url= environment.urlEntregasADomcilioApi + "Clientes/"
}