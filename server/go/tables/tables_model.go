package tables

type Table struct {
	Id            uint   `json:"id"`
	Reserved      bool   `json:"reserved"`
	Type          string `json:"type"`
	Capacity      int    `json:"capacity"`
	Img           string `json:"img"`
	Fecha_reserva string `json:"fecha_reserva"`
}

func (b *Table) TableName() string {
	return "tables"
}
