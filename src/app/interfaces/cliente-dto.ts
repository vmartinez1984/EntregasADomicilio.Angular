export interface ClienteDto {
    nombre: string
    apellidos: string
    telefono: string
    correo: string
    contrasenia: string
    fechaDeNacimiento: Date
    direccion: DireccionDto
}

export interface DireccionDto {
    calleYNumero: string
    colonia: string
    referencias: string
    codigoPostal: string
    latitud: string
    longitud: string
}
