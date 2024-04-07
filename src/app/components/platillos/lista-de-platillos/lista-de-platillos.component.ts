import { Component } from '@angular/core';
import { CategoriaVentaDto } from 'src/app/interfaces/categoria-dto';
import { PlatilloVentaDto } from 'src/app/interfaces/platillo-dto';
import { RespositorioService } from 'src/app/services/respositorio.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-lista-de-platillos',
  templateUrl: './lista-de-platillos.component.html',
  styleUrls: ['./lista-de-platillos.component.css']
})
export class ListaDePlatillosComponent {
  platillos: PlatilloVentaDto[] = []
  categorias: CategoriaVentaDto[] = []
  platillo?: PlatilloVentaDto

  constructor(
    private servicio: RespositorioService
  ) {
    this.servicio.categoria.obtenerTodos().subscribe({
      next: (categorias) => {
        console.log(categorias)
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

  mostarPlatillo(platillo: PlatilloVentaDto) {
    this.platillo = platillo
  }

  obtenerPlatillosPorCategoria(categoriaId: string): PlatilloVentaDto[] {
    //console.log(categoriaId)
    var lista: PlatilloVentaDto[] = []
    this.platillos.forEach(x => {
      if (x.categoria == categoriaId)
        lista.push(x)
    })
    //console.log(lista)

    return lista
  }

  cerrarElModal(data: any) {
    console.log(data)
    document.getElementById("botonCerrarDelModal")?.click()
  }
}