export interface RestauranteInfoDto {
    nombre: string
    direccion: string
    coordenadasGps: string
    telefono: string
    correo: string
    horarios: HorarioDto[]
    tarjetas: TarjetaDto[]
    acercaDeNosotros: AcercaDeNosotrosDto
}

export interface HorarioDto{
    dias: string
    horas: string
}

export interface TarjetaDto{
    icon: string
    titulo: string
    contenido: string
}

export interface AcercaDeNosotrosDto{
    titulo: string
    contenido: string
}