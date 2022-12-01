package reservas

import (
	"restaurante_go/Config"

	_ "github.com/go-sql-driver/mysql"
)

func GetAllReservas(reserva *Reserva, id string) (err error) {
	if err = Config.DB.Where("id = ?", id).First(reserva).Error; err != nil {
		return err
	}
	return nil
}

func CreateOneReserva(reserva *Reserva) (err error) {
	if err = Config.DB.Create(reserva).Error; err != nil {
		return err
	}
	return nil
}