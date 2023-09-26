import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDePlatillosComponent } from './components/platillos/lista-de-platillos/lista-de-platillos.component';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { LoginComponent } from './components/clientes/login/login.component';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes: Routes = [
  //{ path: "", component: ListaDePlatillosComponent }
  { path: "", component: ListaDePlatillosComponent},
  //{ path: "", component: AgregarClienteComponent },
  { path: "iniciarSesion", component: LoginComponent },
  { path: "carrito", component: CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
