package main

import (
	"fmt"
	"restaurante_go/Config"
	"restaurante_go/Routes"

	"github.com/jinzhu/gorm"
)

var err error

func main() {
	Config.DB, err = gorm.Open("mysql", Config.DbURL(Config.BuildDBConfig()))

	if err != nil {
		fmt.Println("Status:", err)
	}

	// defer Config.DB.Close()
	// Config.DB.AutoMigrate(&Models.Table{})

	r := Routes.SetupRouter()
	//running
	r.Run(":4000")
}
