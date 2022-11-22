package Controllers

import (
	"net/http"
	"restaurante_go/Models"

	"github.com/gin-gonic/gin"
)

func GetTable(c *gin.Context) {
	var table []Models.Table
	err := Models.GetAllTables(&table)

	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, gin.H{"data": "table"})
	}

}
