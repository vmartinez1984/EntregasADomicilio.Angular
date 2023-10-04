import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NavbarService } from './templates/navbar/navbar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'EntregasADomicilio.Angular';
 
  constructor(private navbarServicio: NavbarService, private router: Router){}

  prueba(data: any){
    this.navbarServicio.actualizarTitulo(this.router.url.substring(1), this.router.config)
  }
  
  
}
