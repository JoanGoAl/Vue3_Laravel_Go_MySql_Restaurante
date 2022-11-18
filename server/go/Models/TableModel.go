package Models

type Table struct {
	Id       uint   `json:"id"`
	Reserved bool   `json:"reserved"`
	Type     string `json:"type"`
	Capacity int    `json:"capacity"`
	Img      string `json:"img"`
}

func (b *Table) TableName() string {
	return "tables"
}
