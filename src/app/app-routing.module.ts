import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDePlatillosComponent } from './components/platillos/lista-de-platillos/lista-de-platillos.component';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { LoginComponent } from './components/clientes/login/login.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { DetalleDelClienteComponent } from './components/clientes/detalle-del-cliente/detalle-del-cliente.component';
import { ListaDePedidosComponent } from './components/Pedido/lista-de-pedidos/lista-de-pedidos.component';
import { HomeComponent } from './pages/home/home.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { AgregarDireccionComponent } from './components/clientes/agregar-direccion/agregar-direccion.component';

const routes: Routes = [
  //{ path: "", component: ListaDePlatillosComponent }
  { path: "", component: HomeComponent, data: { titulo: "Inicio", etiqueta:'inicio' } },
  { path: "acercaDe", component: AcercaDeComponent, data: { titulo: "Acerca de nosotros", etiqueta:'acercaDe' } },
  { path: "menu", component: ListaDePlatillosComponent, data: { titulo: "Ménu", etiqueta:'menu' } },
  { path: "iniciarSesion", component: LoginComponent,  data: { titulo: "Inicio de sesión", etiqueta:'inicioDesesion' } },

  // { path: "carrito", component: CarritoComponent },
  { path: "cliente/detalles", component: DetalleDelClienteComponent, data: { titulo: "Detalles de la cuenta", etiqueta:'detalles' }},
  { path: "cliente/direccion/agregar", component: AgregarDireccionComponent, data: { titulo: "Agregar dirección", etiqueta:'agregarDireccion' } },
  // { path: "cliente/pedidos", component: ListaDePedidosComponent },
  { path: "cliente/registrar", component: AgregarClienteComponent, data: { titulo: "Registrar", etiqueta:'registrar' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
