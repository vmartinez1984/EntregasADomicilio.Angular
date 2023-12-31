import { Component } from '@angular/core';
import { ClienteDtoIn } from 'src/app/interfaces/cliente-dto';
import { RespositorioService } from 'src/app/services/respositorio.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent {

  constructor(private service: RespositorioService){}

  guardar(cliente: ClienteDtoIn){    
    console.log(cliente)
    this.service.cliente.agregar(cliente).subscribe({
      next:(data)=>{
        console.log(data)
      }
    })
  }
}
