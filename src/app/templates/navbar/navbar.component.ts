import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';
import { RespositorioService } from 'src/app/services/respositorio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {   
  constructor(
    public servicio: RespositorioService,    
    public nabvarServicio: NavbarService
  ) { }

}