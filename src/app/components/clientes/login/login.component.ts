import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { InicioDesesionDto } from 'src/app/interfaces/inicio-desesion-dto';
import { RespositorioService } from 'src/app/services/respositorio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formGroup: FormGroup
  estaCargando : boolean = false

  constructor(
    private servicio : RespositorioService,
    private formBuild: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router
  ){
    this.formGroup = this.formBuild.group({
      correo: ['', {validartors:[Validators.required, Validators.email]}],
      contrasenia: ['', {validartors:[Validators.required]}]
    })
  }

  iniciarSesion(){
    var inicioDeSesion: InicioDesesionDto={
      correo : this.formGroup.value.correo,
      contrasenia: this.formGroup.value.contrasenia
    }
    this.estaCargando = true;
    this.habilitarFormulario(!this.estaCargando!)
    this.servicio.cliente.iniciarSesion(inicioDeSesion).subscribe({
      next:(data)=>{
        console.log(data)
        this.estaCargando = false
        //this.habilitarFormulario(true)
        this.servicio.cliente.guardarToken(data)
        this.snackbar.open("Bienvenido "+ this.servicio.cliente.obtenerCampo("Nombre"), "Ok", {duration: 5000})
        this.router.navigate(['/'])
      }, error:(data)=>{
        //console.log(data.error.mensaje)
        this.snackbar.open(data.error.mensaje, ":(", {duration: 5000})
        this.estaCargando = false
        this.habilitarFormulario(true)
      }
    })
  }

  habilitarFormulario(habilitar: boolean) {
    if(habilitar){
      this.formGroup.get('correo')?.enable()
      this.formGroup.get('contrasenia')?.enable()
    }else{
      this.formGroup.get('correo')?.disable()
      this.formGroup.get('contrasenia')?.disable()
    }
  }
}
