import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { ListaDePlatillosComponent } from './components/platillos/lista-de-platillos/lista-de-platillos.component';
import { FormularioDeClienteComponent } from './components/clientes/formulario-de-cliente/formulario-de-cliente.component';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './components/clientes/editar-cliente/editar-cliente.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/clientes/login/login.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FooterComponent } from './templates/footer/footer.component';
import { InterceptorService } from './services/interceptor.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AutorizadoComponent } from './components/seguridad/autorizado/autorizado.component';
import { AgregarPlatilloACarritoComponent } from './components/platillos/agregar-platillo-acarrito/agregar-platillo-acarrito.component';
import { DetalleDelUltimoPedidoComponent } from './components/Pedido/detalle-del-ultimo-pedido/detalle-del-ultimo-pedido.component';
import { ListaDePedidosComponent } from './components/Pedido/lista-de-pedidos/lista-de-pedidos.component';
import { DetalleDelClienteComponent } from './components/clientes/detalle-del-cliente/detalle-del-cliente.component';
import { FormularioDePersonaComponent } from './components/clientes/formulario-de-persona/formulario-de-persona.component';
import { FormularioDeDireccionComponent } from './components/clientes/formulario-de-direccion/formulario-de-direccion.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ReservacionesComponent } from './pages/reservaciones/reservaciones.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    //ListaDePlatillosComponent,
    FormularioDeClienteComponent,
    AgregarClienteComponent,
    EditarClienteComponent,
    LoginComponent,
    //CarritoComponent,
    FooterComponent,
    AutorizadoComponent,
    //AgregarPlatilloACarritoComponent,
    DetalleDelUltimoPedidoComponent,
    ListaDePedidosComponent,
    DetalleDelClienteComponent,
    FormularioDePersonaComponent,
    FormularioDeDireccionComponent,
    AcercaDeComponent,
    ReservacionesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,    
    ReactiveFormsModule, FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
