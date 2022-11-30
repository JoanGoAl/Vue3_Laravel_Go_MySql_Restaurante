package clients

import (
	"restaurante_go/Config"
	// "fmt"

	_ "github.com/go-sql-driver/mysql"
)

func GetAllClients(client *[]Client) (err error) {
	if err = Config.DB.Find(client).Error; err != nil {
		return err
	}
	return nil
}

func GetOneClient(client *Client, id string) (err error) {
	if err = Config.DB.Where("id = ?", id).First(client).Error; err != nil {
		return err
	}
	return nil
}
