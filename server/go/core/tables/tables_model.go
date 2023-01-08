package tables

type Table struct {
	Id       uint   `json:"id"`
	Type     string `json:"type"`
	Capacity int    `json:"capacity"`
	Img      string `json:"img"`
}

type Filter struct {
	Date string `json:"date"`
	Time string `json:"time"`
	Site string `json:"site"`
}

func (b *Table) TableName() string {
	return "tables"
}
