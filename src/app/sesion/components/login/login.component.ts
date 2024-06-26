import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InicioDesesionDto } from 'src/app/sesion/interfaces/inicio-desesion-dto';
import { InicioDeSesionService } from '../../services/inicio-de-sesion.service';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formGroup: FormGroup
  estaCargando: boolean = false

  constructor(
    private inicioDeSesion: InicioDeSesionService,
    private sesion: SesionService,
    private formBuild: FormBuilder,    
    private router: Router    
  ) {    
    this.formGroup = this.formBuild.group({
      correo: ['', { validators: [Validators.required, Validators.email] }],
      contrasenia: ['', { validators: [Validators.required] }]
    })   
  }

  iniciarSesion() {
    console.log(this.formGroup.controls['correo'])
    if (this.formGroup.valid) {
      //console.log(this.formGroup.value)
      var inicioDeSesion: InicioDesesionDto = {
        correo: this.formGroup.value.correo,
        contrasenia: this.formGroup.value.contrasenia
      }
      this.estaCargando = true;
      this.habilitarFormulario(!this.estaCargando!)
      this.inicioDeSesion.iniciarSesion(inicioDeSesion).subscribe({
        next: (data) => {
          //console.log(data)
          this.estaCargando = false
          //this.habilitarFormulario(true)
          this.sesion.guardarToken(data)
          //this.snackbar.open("Bienvenido " + this.servicio.sesion.obtenerCampo("Nombre"), "Ok", { duration: 5000 })
          this.router.navigate(['/'])
        }, error: (data) => {
          //console.log(data.error.mensaje)
          //this.snackbar.open(data.error.mensaje, ":(", { duration: 5000 })
          this.estaCargando = false
          this.habilitarFormulario(true)
        }
      })
    }
  }

  habilitarFormulario(habilitar: boolean) {
    if (habilitar) {
      this.formGroup.get('correo')?.enable()
      this.formGroup.get('contrasenia')?.enable()
    } else {
      this.formGroup.get('correo')?.disable()
      this.formGroup.get('contrasenia')?.disable()
    }
  }
}
