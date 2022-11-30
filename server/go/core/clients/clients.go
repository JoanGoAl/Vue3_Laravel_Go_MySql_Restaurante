package clients

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetClients(c *gin.Context) {
	var client []Client
	err := GetAllClients(&client)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, client)
	}
}

func GetClientById(c *gin.Context) {
	id := c.Params.ByName("id")
	var client Client
	err := GetOneClient(&client, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, client)
	}
}
