import { Injectable } from '@angular/core';
import { PlatilloVentaDto } from '../interfaces/platillo-dto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  vaciarCarrito() {
    localStorage.removeItem(this.llave)
    this.platillos = []
  }
   
  private llave = "platillos";
  public platillos: PlatilloVentaDto[] = [];
  constructor() { this.obtenerLista() }

  agregar(platillo: PlatilloVentaDto) {
    this.obtenerLista()
    this.platillos.push(platillo)
    localStorage.setItem(this.llave, JSON.stringify(this.platillos))
    console.log(this.platillos)
  }

  quitarPlatillo(platillo: PlatilloVentaDto) {
    this.obtenerLista()
    var numero = this.obtenerNumeroDePlatillos(platillo.id)
    //console.log("Número de platillos",numero)
    if (numero != 0) {
      var index = this.platillos.findIndex(x => x.id == platillo.id)
      //console.log("indice",index)
      this.platillos.splice(index, 1)
      localStorage.setItem(this.llave, JSON.stringify(this.platillos))
      console.log(this.platillos)
    }
  }

  obtenerNumeroDePlatillos(platilloId: number): number {
    this.obtenerLista()
    var i = 0
    this.platillos.forEach(platillo => {
      if (platillo.id == platilloId)
        i++
    })

    return i
  }

  obtenerTotal(): number {
    this.obtenerLista()
    var total = 0
    this.platillos.forEach(platillo => {
      total += platillo.precio
    })

    return total
  }

  obtenerSubtotal(platilloId: number): number {
    this.obtenerLista()
    var subtotal = 0
    this.platillos.forEach(platillo => {
      if (platillo.id == platilloId)
        subtotal += platillo.precio
    })

    return subtotal
  }

  private obtenerLista() {
    var stringJson = localStorage.getItem(this.llave)
    if (stringJson != null)
      this.platillos = JSON.parse(stringJson)
    //console.log(this.platillos)
  }

}
