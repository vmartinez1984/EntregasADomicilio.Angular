import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PlatilloVentaDto } from 'src/app/interfaces/platillo-dto';
import { RespositorioService } from 'src/app/services/respositorio.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  nota: string = ""

  constructor(
    public servicio: RespositorioService,
    private snackBak: MatSnackBar,
    private router: Router) { }

  obtenerUrl(platilloId: number) {
    return environment.urlEntregasADomcilioApi + "Platillos/" + platilloId + "/Imagen"
  }

  realizarPedido() {
    this.servicio.pedido.realizarPedido(this.nota, this.servicio.carrito.platillos).subscribe({
      next: (data) => {
        console.log(data)
        this.snackBak.open("Pedido registrado " + data.id, "Ok", { duration: 5000 })
        this.router.navigate([''])
        this.servicio.carrito.vaciarCarrito()
      }
    })
  }
}
