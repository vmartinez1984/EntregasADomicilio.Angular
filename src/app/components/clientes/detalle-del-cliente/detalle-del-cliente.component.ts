import { Component, ViewChild } from '@angular/core';
import { ClienteDto, ClienteDtoIn } from 'src/app/interfaces/cliente-dto';
import { RespositorioService } from 'src/app/services/respositorio.service';
import { FormularioDePersonaComponent } from '../formulario-de-persona/formulario-de-persona.component';

@Component({
  selector: 'app-detalle-del-cliente',
  templateUrl: './detalle-del-cliente.component.html',
  styleUrls: ['./detalle-del-cliente.component.css']
})
export class DetalleDelClienteComponent {
  cliente?: ClienteDto
  @ViewChild(FormularioDePersonaComponent) formularioDePersona? : FormularioDePersonaComponent
  constructor(
    private servicio: RespositorioService
  ) {
    this.servicio.cliente.obtenerCliente().subscribe(
      {
        next: (cliente) => { this.cliente = cliente; console.log(this.cliente) },
        error: (data) => { console.log(data) }
      }
    )
  }

  guardarCliente(cliente: ClienteDtoIn) {
    //console.log(cliente)
    this.formularioDePersona?.habilitarFormulario(false)
    this.servicio.cliente.actualizarDatos(
      {
        nombre: cliente.nombre,
        correo: cliente.correo,
        telefono: cliente.telefono,
        apellidos: cliente.apellidos,
        fechaDeNacimiento: cliente.fechaDeNacimiento
      }
    ).subscribe({
      next: (data) => {
        console.log(data)
      }
    })
  }
}
