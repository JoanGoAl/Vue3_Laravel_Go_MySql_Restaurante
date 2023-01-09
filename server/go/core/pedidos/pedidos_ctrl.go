package pedidos

import (
	"restaurante_go/Config"
	// "fmt"

	_ "github.com/go-sql-driver/mysql"
)

func CreatePedido(pedido *Pedido) (err error) {
	if err = Config.DB.Create(pedido).Error; err != nil {
		return err
	}
	return nil
}
