package auth

import (
	"restaurante_go/Config"
	"restaurante_go/core/clients"
)

func RegisterClient(client *clients.Client) (err error) {
	if err := Config.DB.Create(client).Error; err != nil {
		return err
	}
	return nil
}

func LoginClient(client *clients.Client) (err error) {
	if err := Config.DB.Where("email = ?", client.Email).Find(client).Error; err != nil {
		return err
	}
	return nil
}

func GetUserInfo(client *clients.Client, id string) (err error) {
	if err := Config.DB.Where("id = ?", id).Find(client).Error; err != nil {
		return err
	}
	return nil
}
