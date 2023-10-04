import { Component } from '@angular/core';
import { NavbarService } from 'src/app/templates/navbar/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  titulo = "Inicio"
}
