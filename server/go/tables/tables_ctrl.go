package tables

import (
	"restaurante_go/Config"
	// "fmt"

	_ "github.com/go-sql-driver/mysql"
)

func GetAllTables(table *[]Table) (err error) {
	if err = Config.DB.Find(table).Error; err != nil {
		return err
	}
	return nil
}
