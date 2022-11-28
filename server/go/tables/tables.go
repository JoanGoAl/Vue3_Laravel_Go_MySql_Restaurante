package tables

import (
	"fmt"
	"net/http"

	"restaurante_go/Config"

	"github.com/gin-gonic/gin"
)

func GetTables(c *gin.Context) {
	var table []Table
	err := GetAllTables(&table)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, table)
	}
}

func CreateTable(c *gin.Context) {
	var table Table
	c.BindJSON(&table)
	err := CreateOneUser(&table)
	if err != nil {
		fmt.Println(err.Error())
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, table)
	}
}

func DeleteTable(c *gin.Context) {
	id := c.Params.ByName("id")
	var table Table
	err := DeleteOneUser(&table, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, gin.H{"id #" + id: "deleted"})
	}
}

func UpdateTable(c *gin.Context) {
	var table Table
	id := c.Params.ByName("id")
	err := Config.DB.Where("id = ?", id).First(&table).Error
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	}
	c.BindJSON(&table)
	err = UpdateOneUser(&table, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, table)
	}
}
