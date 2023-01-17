package pedidos

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func SetPedido(c *gin.Context) {
	var pedido Pedido
	c.BindJSON(&pedido)

	idClient, _ := c.Get("client_id")

	pedido.Idcliente = idClient.(string)

	err := CreatePedido(&pedido)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
		return
	} else {
		c.JSON(http.StatusOK, pedido)
		return
	}
}
