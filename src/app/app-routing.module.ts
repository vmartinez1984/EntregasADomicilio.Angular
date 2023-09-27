import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDePlatillosComponent } from './components/platillos/lista-de-platillos/lista-de-platillos.component';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { LoginComponent } from './components/clientes/login/login.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { DetalleDelClienteComponent } from './components/clientes/detalle-del-cliente/detalle-del-cliente.component';
import { ListaDePedidosComponent } from './components/Pedido/lista-de-pedidos/lista-de-pedidos.component';

const routes: Routes = [
  //{ path: "", component: ListaDePlatillosComponent }
  { path: "", component: ListaDePlatillosComponent },
  { path: "iniciarSesion", component: LoginComponent },
  { path: "carrito", component: CarritoComponent },
  { path: "cliente/detalles", component: DetalleDelClienteComponent },
  { path: "cliente/pedidos", component: ListaDePedidosComponent },
  { path: "cliente/registrar", component: AgregarClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
