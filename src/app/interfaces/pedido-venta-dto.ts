import { PlatilloVentaDto } from "./platillo-dto"

export interface PedidoVentaDto {
    comentario: string
    listaDetalleDelPedido: PlatilloPedidoDto[]
}

export interface PlatilloPedidoDto{
    platilloId: number
    precio: number
}
