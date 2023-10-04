import { Component } from '@angular/core';
import { CategoriaVentaDto } from 'src/app/interfaces/categoria-dto';
import { PlatilloVentaDto } from 'src/app/interfaces/platillo-dto';
import { RespositorioService } from 'src/app/services/respositorio.service';
import { NavbarService } from 'src/app/templates/navbar/navbar.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-lista-de-platillos',
  templateUrl: './lista-de-platillos.component.html',
  styleUrls: ['./lista-de-platillos.component.css']
})
export class ListaDePlatillosComponent {
  platillos: PlatilloVentaDto[] = []
  categorias: CategoriaVentaDto[] = []

  constructor(
    private servicio: RespositorioService
  ) {
    this.servicio.categoria.obtenerTodos().subscribe({
      next: (categorias) => {
        //console.log(data)
        this.categorias = categorias
      }
    })
    this.servicio.platillo.obtenerTodos().subscribe({
      next: (platillos) => {
        console.log(platillos)
        this.platillos = platillos
      }
    })
  }

  obtenerUrl(platilloId: number) {
    return environment.urlEntregasADomcilioApi + "Platillos/" + platilloId + "/Imagen"
  }

  agregarACarrito(platillo: PlatilloVentaDto) {

  }

  obtenerPlatillosPorCategoria(categoriaId: number): PlatilloVentaDto[] {
    var lista: PlatilloVentaDto[] = []
    this.platillos.forEach(x => {
      if (x.categoria.id == categoriaId)
        lista.push(x)
    })

    return lista
  }
}