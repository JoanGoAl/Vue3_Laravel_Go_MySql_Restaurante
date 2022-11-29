package main

import (
	"fmt"
	"restaurante_go/Config"
	"restaurante_go/Routes"
	"restaurante_go/tables"

	"github.com/jinzhu/gorm"
)

var err error

func main() {
	Config.DB, err = gorm.Open("mysql", Config.DbURL(Config.BuildDBConfig()))
	defer Config.DB.Close()
	Config.DB.AutoMigrate(&tables.Table{})

	if err != nil {
		fmt.Println("Status:", err)
	}

	r := Routes.SetupRouter()
	//running
	r.Run()
}
