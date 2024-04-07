import { Injectable } from '@angular/core';
import { TokenDto } from '../interfaces/token-dto';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
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

  guardarToken(respuesta: TokenDto) {
    localStorage.setItem(this.llaveExpiracion, respuesta.fechaDeExpiracion.toString())
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
}