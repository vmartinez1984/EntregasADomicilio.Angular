import { CategoriaVentaDto } from "./categoria-dto";

export interface PlatilloVentaDto {
    id: number
    //categoria: CategoriaVentaDto
    categoria: string
    nombre: string
    descripcion: string
    precio: number
}
