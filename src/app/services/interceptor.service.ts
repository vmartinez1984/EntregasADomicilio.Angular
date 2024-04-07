import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespositorioService } from './respositorio.service';
import { Observable } from 'rxjs';
import { SesionService } from '../sesion/services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private sesion: SesionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.sesion.obtenerToken()
    if (token) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      })
    }

    return next.handle(req)
  }
}