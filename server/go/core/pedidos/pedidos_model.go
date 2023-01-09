package pedidos

type Pedido struct {
	Id        uint    `json:"id"`
	IdCliente uint    `json:"id_cliente"`
	Pedido    string  `json:"pedido"`
	Precio    float32 `json:"precio"`
	Status    bool    `json:"status"`
}

func (b *Pedido) TableName() string {
	return "pedidos"
}
