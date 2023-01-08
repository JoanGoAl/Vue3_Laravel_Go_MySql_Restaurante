package products

type Product struct {
	Id          uint    `json:"id"`
	Nombre      string  `json:"nombre"`
	Descripcion string  `json:"descripcion"`
	Img         string  `json:"img"`
	Precio      float32 `json:"precio"`
	Categoria   string  `json:"categoria"`
}

func (b *Product) TableName() string {
	return "products"
}
