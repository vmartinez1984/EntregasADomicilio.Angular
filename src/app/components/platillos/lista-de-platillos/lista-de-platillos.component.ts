import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaVentaDto } from 'src/app/interfaces/categoria-dto';
import { PlatilloVentaDto } from 'src/app/interfaces/platillo-dto';
import { RespositorioService } from 'src/app/services/respositorio.service';
import { environment } from 'src/environments/environment.development';
import { AgregarPlatilloACarritoComponent } from '../agregar-platillo-acarrito/agregar-platillo-acarrito.component';

@Component({
  selector: 'app-lista-de-platillos',
  templateUrl: './lista-de-platillos.component.html',
  styleUrls: ['./lista-de-platillos.component.css']
})
export class ListaDePlatillosComponent {
  platillos: PlatilloVentaDto[] = []
  categorias: CategoriaVentaDto[] = []

  constructor(
    private servicio: RespositorioService,
    public dialog: MatDialog
  ) {
    this.servicio.categoria.obtenerTodos().subscribe({
      next: (categorias) => {
        //console.log(data)
        this.categorias = categorias
      }
    })
    this.servicio.platillo.obtenerTodos().subscribe({
      next: (platillos) => {
        //console.log(platillos)
        this.platillos = platillos
      }
    })
  }

  obtenerUrl(platilloId: number) {
    return environment.urlEntregasADomcilioApi + "Platillos/" + platilloId + "/Imagen"
  }

  agregarACarrito(platillo: PlatilloVentaDto) {
    this.dialog.open(
      AgregarPlatilloACarritoComponent,
      {
        disableClose: true,
        data: platillo,
        width: "90%"
      }).afterClosed().subscribe({
        next: (data) => {
          console.log(data)
        }
      })
  }

}