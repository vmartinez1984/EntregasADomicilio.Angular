export interface ClienteDtoIn {
    nombre: string
    apellidos: string
    telefono: string
    correo: string
    contrasenia: string
    fechaDeNacimiento: Date
    direccion?: DireccionDtoIn
}

export interface DireccionDtoIn {
    calleYNumero: string
    colonia: string
    referencias: string
    codigoPostal: string
    latitud: string
    longitud: string
    orden?: number
}

export interface DireccionDto extends DireccionDtoIn{
    id: number
    orden: number
}

export interface ClienteDto {
    nombre: string
    apellidos: string
    telefono: string
    correo: string    
    fechaDeNacimiento: Date
    direcciones: DireccionDto[]
}

export interface ClienteUpdateDto {
    nombre: string
    apellidos: string
    telefono: string
    correo: string    
    fechaDeNacimiento: Date 
}