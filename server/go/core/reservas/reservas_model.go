package reservas

type Reserva struct {
	Id       uint   `json:"id"`
	Idtable  uint   `json:"idtable"`
	Idclient uint   `json:"idclient"`
	Date     string `json:"date"`
	Time     string `json:"time"`
	Status   bool   `json:"status"`
}

func (b *Reserva) TableName() string {
	return "reservas"
}
