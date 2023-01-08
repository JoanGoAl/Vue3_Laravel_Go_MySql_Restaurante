package tables

import (
	"restaurante_go/Config"
	// "fmt"

	_ "github.com/go-sql-driver/mysql"
)

func GetAllTables(table *[]Table, filter *Filter) (err error) {

	var query string

	// TODO - Fix this query
	query = "SELECT * FROM tables WHERE type LIKE '" + filter.Site + "' " +
		"AND id NOT IN (SELECT idtable FROM reservas WHERE date = '" + filter.Date + "' AND time = '" + filter.Time + "');"

	if err = Config.DB.Raw(query).Scan(&table).Error; err != nil {
		return err
	}

	return nil
}

func CreateOneUser(table *Table) (err error) {
	if err = Config.DB.Create(table).Error; err != nil {
		return err
	}
	return nil
}

func DeleteOneUser(table *Table, id string) (err error) {
	Config.DB.Where("id = ?", id).Delete(table)
	return nil
}

func UpdateOneUser(table *Table, id string) (err error) {
	Config.DB.Save(table)
	return nil
}
