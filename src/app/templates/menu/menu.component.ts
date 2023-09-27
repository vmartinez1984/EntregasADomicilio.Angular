import { Component } from '@angular/core';
import { RespositorioService } from 'src/app/services/respositorio.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public servicio: RespositorioService){}
}
