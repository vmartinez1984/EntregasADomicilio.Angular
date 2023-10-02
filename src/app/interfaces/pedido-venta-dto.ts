import { PlatilloVentaDto } from "./platillo-dto"

export interface PedidoVentaDtoIn {
    comentario: string
    listaDetalleDelPedido: PlatilloPedidoDto[]
}

export interface PlatilloPedidoDto{
    platilloId: number
    precio: number
}

export interface PedidoVentaDto{
    id: number
    comentario: string
    estatus: string
    fechaDeRegistro: Date
    total: number
    listaDetalleDelPedido : PlatilloVentaDto[]
}