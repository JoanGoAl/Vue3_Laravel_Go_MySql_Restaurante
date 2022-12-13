package tables

type Table struct {
	Id       uint   `json:"id"`
	Type     string `json:"type"`
	Capacity int    `json:"capacity"`
	Img      string `json:"img"`
}

func (b *Table) TableName() string {
	return "tables"
}
