package reservas

type Reserva struct {
	Id          uint   `json:"id"`
	Idtable     uint   `json:"idtable"`
	Idclient    uint   `json:"idclient"`
	Datereserva string `json:"datereserva"`
}

func (b *Reserva) TableName() string {
	return "reservas"
}
