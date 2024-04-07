import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';
import { SesionService } from 'src/app/sesion/services/sesion.service';
import { RespositorioService } from 'src/app/services/respositorio.service';
import { RestauranteInfoDto } from 'src/app/interfaces/restaurante-info-dto';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  restauranteInfo?: RestauranteInfoDto

  constructor(
    public servicio: SesionService,
    public nabvarServicio: NavbarService,
    public repo: RespositorioService
  ) {
    this.repo.restauranteInfo.obtener().subscribe({
      next: (restaranteInfo) => {
        this.restauranteInfo = restaranteInfo
      }, 
      error:(err)=> {
          console.log(err)
          alert("Valio pepino")
      },
    })
  }

}