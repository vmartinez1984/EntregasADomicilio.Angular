import { Component, Inject } from '@angular/core';
import { PlatilloVentaDto } from 'src/app/interfaces/platillo-dto';
import { RespositorioService } from 'src/app/services/respositorio.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-agregar-platillo-acarrito',
  templateUrl: './agregar-platillo-acarrito.component.html',
  styleUrls: ['./agregar-platillo-acarrito.component.css']
})
export class AgregarPlatilloACarritoComponent {
  numero = 0

  constructor(    
    public servicio: RespositorioService
  ) {
    //console.log(this.platillo)
  }

  obtenerUrl(platilloId: number) {
    return environment.urlEntregasADomcilioApi + "Platillos/" + platilloId + "/Imagen"
  }

  agregar(platillo: PlatilloVentaDto) {
    this.servicio.carrito.agregar(platillo)
    this.numero++
  }

  quitarPlatillo(platillo:PlatilloVentaDto) {
    if (this.numero != 0){
      this.servicio.carrito.quitarPlatillo(platillo)
      this.numero--
    }
  }

  cerrar(){
    
  }
}
