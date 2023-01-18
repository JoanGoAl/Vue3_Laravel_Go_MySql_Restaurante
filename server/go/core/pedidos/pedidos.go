package pedidos

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

func SetPedido(c *gin.Context) {
	var pedido Pedido
	c.BindJSON(&pedido)

	idClient, _ := c.Get("client_id")
	pedido.Idcliente = idClient.(string)

	pedido.UpdatedAt = time.Now().Format("2006-01-02 15:04:05")

	err := CreatePedido(&pedido)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
		return
	} else {
		c.JSON(http.StatusOK, pedido)
		return
	}
}

func GetPedidos(c *gin.Context) {
	var pedidos []Pedido
	id, _ := c.Get("client_id")

	err := GetAllPedidos(&pedidos, id.(string))
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, pedidos)
	}
}
