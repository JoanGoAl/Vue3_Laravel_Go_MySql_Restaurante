package pedidos

type Pedido struct {
	Id        uint    `json:"id"`
	Idcliente uint    `json:"idcliente"`
	Pedido    string  `json:"pedido"`
	Precio    float32 `json:"precio"`
	Status    float32 `json:"status"`
}

func (b *Pedido) TableName() string {
	return "pedidos"
}
