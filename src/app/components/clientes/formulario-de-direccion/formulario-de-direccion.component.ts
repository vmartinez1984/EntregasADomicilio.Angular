import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteDtoIn, DireccionDtoIn } from 'src/app/interfaces/cliente-dto';
import { CodigoPostalDto } from 'src/app/interfaces/codigo-postal-dto';
import { RespositorioService } from 'src/app/services/respositorio.service';

@Component({
  selector: 'app-formulario-de-direccion',
  templateUrl: './formulario-de-direccion.component.html',
  styleUrls: ['./formulario-de-direccion.component.css']
})
export class FormularioDeDireccionComponent {
  formGroup: FormGroup
  estaBuscandoCodigoPostal = false
  codigosPostales: CodigoPostalDto[] = []

  @Input() direccion?: DireccionDtoIn
  @Output() clienteEmitter: EventEmitter<ClienteDtoIn> = new EventEmitter<ClienteDtoIn>()

  constructor(
    private formBuilder: FormBuilder,
    private servicio: RespositorioService
  ) {
    this.formGroup = this.formBuilder.group({
      nombre: ["", { validators: [Validators.required] }],
      apellidos: ["", { validators: [Validators.required] }],
      fechaDeNacimiento: ["", { validators: [Validators.required] }],
      telefono: ["", { validators: [Validators.required] }],
      correo: ["", { validators: [Validators.required] }],
      contrasenia: ["", { validators: [Validators.required] }],
      calleYNumero: ["", { validators: [Validators.required] }],
      referencias: ["", { validators: [Validators.required] }],
      codigoPostal: ["", { validators: [Validators.required] }],
      colonia: ["", { validators: [Validators.required] }],
      alcaldia: '',
    })
    this.formGroup.get('alcaldia')?.disable()
  }

  ngOnChanges() {
    console.log(this.direccion)
    if (this.direccion != undefined) {
      this.servicio.codigoPostal.obtener(this.direccion.codigoPostal).subscribe({
        next: (data) => {
          //console.log(data)
          this.estaBuscandoCodigoPostal = false
          this.codigosPostales = data
          if (data.length > 0)
            this.formGroup.get('alcaldia')?.setValue(data[0].alcaldia)
        }
      })
      this.formGroup.patchValue(this.direccion)
    }
  }

  buscarCodigoPostal(data: any) {
    //console.log(this.formGroup.value.codigoPostal)
    var codigoPostal = this.formGroup.value.codigoPostal
    if (codigoPostal.length == 5) {
      this.estaBuscandoCodigoPostal = true
      this.servicio.codigoPostal.obtener(codigoPostal).subscribe({
        next: (data) => {
          //console.log(data)
          this.estaBuscandoCodigoPostal = false
          this.codigosPostales = data
          if (data.length > 0)
            this.formGroup.get('alcaldia')?.setValue(data[0].alcaldia)
        }
      })
    }
  }

  colocarCodigoPostal() {
    console.log()
  }

  guardar() {
    console.log(this.formGroup.valid)
    console.log("nombre", this.formGroup.controls['nombre'].invalid)
    if (this.formGroup.valid) {
      var cliente: ClienteDtoIn = {
        nombre: this.formGroup.value.nombre,
        apellidos: this.formGroup.value.apellidos,
        telefono: this.formGroup.value.telefono,
        correo: this.formGroup.value.correo,
        contrasenia: this.formGroup.value.contrasenia,
        fechaDeNacimiento: this.formGroup.value.fechaDeNacimiento,
        direccion: {
          calleYNumero: this.formGroup.value.calleYNumero,
          colonia: this.formGroup.value.colonia.tipoDeAsentamiento + " " + this.formGroup.value.colonia.asentamiento,
          codigoPostal: this.formGroup.value.codigoPostal,
          referencias: this.formGroup.value.referencias,
          latitud: '',
          longitud: ''
        }
      }
      //console.log(cliente)
      this.clienteEmitter.emit(cliente)
    }
  }
}
