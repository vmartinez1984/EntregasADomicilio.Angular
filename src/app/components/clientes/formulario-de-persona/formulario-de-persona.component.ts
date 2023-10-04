import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteDto, ClienteDtoIn } from 'src/app/interfaces/cliente-dto';
import { CodigoPostalDto } from 'src/app/interfaces/codigo-postal-dto';

@Component({
  selector: 'app-formulario-de-persona',
  templateUrl: './formulario-de-persona.component.html',
  styleUrls: ['./formulario-de-persona.component.css']
})
export class FormularioDePersonaComponent {
  formGroup: FormGroup
  estaBuscandoCodigoPostal = false
  codigosPostales: CodigoPostalDto[] = []
  botonGuardar = false

  @Input() cliente?: ClienteDto
  @Output() clienteEmitter: EventEmitter<ClienteDtoIn> = new EventEmitter<ClienteDtoIn>()

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      nombre: ["", { validators: [Validators.required] }],
      apellidos: ["", { validators: [Validators.required] }],
      fechaDeNacimiento: ["", { validators: [Validators.required] }],
      telefono: ["", { validators: [Validators.required] }],
      correo: ["", { validators: [Validators.required] }]
    })
    this.habilitarFormulario(false)
  }

  ngOnChanges() {
    if (this.cliente != undefined)
      this.formGroup.patchValue(this.cliente)
    this.formGroup.get('fechaDeNacimiento')?.setValue(this.obtenerFecha(this.cliente?.fechaDeNacimiento))
  }

  obtenerFecha(fechaDeNacimiento: Date | undefined): string {
    var fechaString = ''
    var fecha = new Date(this.cliente?.fechaDeNacimiento + "")
    var mes = fecha.getMonth()
    var mesString = mes + 1 < 9 ? '0' + (mes + 1 ): mes + 1 + ""

    fechaString = fecha.getFullYear() + "-" + mesString + "-" + fecha.getDate()
    //console.log(fechaString)
    return fechaString;
  }

  guardar() {
    // console.log(this.formGroup.valid)
    // console.log("nombre", this.formGroup.controls['nombre'].invalid)
    if (this.formGroup.valid) {
      var cliente: ClienteDtoIn = {
        nombre: this.formGroup.value.nombre,
        apellidos: this.formGroup.value.apellidos,
        telefono: this.formGroup.value.telefono,
        correo: this.formGroup.value.correo,
        fechaDeNacimiento: this.formGroup.value.fechaDeNacimiento,
        contrasenia: ''
      }
      //console.log(cliente)
      this.clienteEmitter.emit(cliente)
    }
  }

  public habilitarFormulario(habilitar: boolean) {
    if (habilitar) {
      this.formGroup.get('nombre')?.enable()
      this.formGroup.get('apellidos')?.enable()
      this.formGroup.get('correo')?.enable()
      this.formGroup.get('fechaDeNacimiento')?.enable()
      this.formGroup.get('telefono')?.enable()
      this.botonGuardar = true
    } else {
      this.formGroup.get('nombre')?.disable()
      this.formGroup.get('apellidos')?.disable()
      this.formGroup.get('correo')?.disable()
      this.formGroup.get('fechaDeNacimiento')?.disable()
      this.formGroup.get('telefono')?.disable()
      this.formGroup.get('botonGuardar')?.disable()
    }
  }
}
