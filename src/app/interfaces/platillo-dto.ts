import { CategoriaVentaDto } from "./categoria-dto";

export interface PlatilloVentaDto {
    id: number
    categoria: CategoriaVentaDto
    nombre: string
    descripcion: string
    precio: number
}
