import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olvido-de-contrasenia',
  templateUrl: './olvido-de-contrasenia.component.html',
  styleUrls: ['./olvido-de-contrasenia.component.css']
})
export class OlvidoDeContraseniaComponent {
  formGroup: FormGroup
  estaCargando: boolean = false

  constructor(
    private formBuild: FormBuilder,
    private router: Router
  ) {
    this.formGroup = this.formBuild.group({
      correo: ['', { validators: [Validators.required, Validators.email] }]
    })

  }

  recuperarContrasenia(){
    console.log(this.formGroup.valid)
    if(this.formGroup.valid){
      alert("Se ha enviado un enlace a su correo para restablecer su contraseña")
      this.router.navigate(['iniciarSesion'])
    }
  }
}
