package Controllers

import (
	// "first-api/Models"
	// "fmt"
	// "net/http"

	"net/http"
	"restaurante_go/Models"

	"github.com/gin-gonic/gin"
)

func GetTable(c *gin.Context) {
	var user []Models.Table
	err := Models.GetAllUsers(&user)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, user)
	}
}
