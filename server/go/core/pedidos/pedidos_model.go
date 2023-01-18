package pedidos

type Pedido struct {
	Id        uint    `json:"id"`
	Idcliente string  `json:"idcliente"`
	Pedido    string  `json:"pedido"`
	Precio    float32 `json:"precio"`
	Status    float32 `json:"status"`
	UpdatedAt string  `json:"updated_at"`
}

func (b *Pedido) TableName() string {
	return "pedidos"
}
