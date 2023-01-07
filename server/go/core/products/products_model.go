package products

type Product struct {
	Id          uint    `json:"id"`
	Nombre      string  `json:"nombre"`
	Descripcion string  `json:"descripcion"`
	Img         string  `json:"img"`
	Price       float32 `json:"price"`
	Categororia string  `json:"categoria"`
}

func (b *Product) TableName() string {
	return "products"
}
