import { Injectable } from '@angular/core';
import { Route, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  actualizarTitulo(rutaActual: string, rutas: Routes) {
    var ruta = rutas.find(x => x.path == rutaActual)
    this.titulo = ruta?.data?.['titulo']
    this.tag = ruta?.data?.['etiqueta']
  }

  constructor() { }

  titulo?: string
  tag?: string
}
