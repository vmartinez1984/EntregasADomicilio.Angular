import { Component } from '@angular/core';
import { RestauranteInfoDto } from 'src/app/interfaces/restaurante-info-dto';
import { RespositorioService } from 'src/app/services/respositorio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  restauranteInfo?: RestauranteInfoDto

  constructor(
    public repo: RespositorioService
  ) {
    this.repo.restauranteInfo.obtener().subscribe({
      next: (restaranteInfo) => {
        this.restauranteInfo = restaranteInfo
      },
      error: (err) => {
        console.log(err)
        alert("Valio pepino")
      },
    })
  }
}
