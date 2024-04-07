import { PlatilloVentaDto } from "./platillo-dto"

export interface PedidoVentaDtoIn {
    //id: string
    comentario: string
    platillos: PlatilloPedidoDto[]
}

export interface PlatilloPedidoDto{
    id: number
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