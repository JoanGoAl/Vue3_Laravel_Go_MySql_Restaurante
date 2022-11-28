package tables

import (
	"net/http"

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
