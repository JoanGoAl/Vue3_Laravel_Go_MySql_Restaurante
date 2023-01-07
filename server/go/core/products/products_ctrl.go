package products

import (
	"restaurante_go/Config"
	// "fmt"

	_ "github.com/go-sql-driver/mysql"
)

func GetAllProducts(product *[]Product) (err error) {
	if err = Config.DB.Find(product).Error; err != nil {
		return err
	}
	return nil
}
