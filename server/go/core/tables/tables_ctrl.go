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
