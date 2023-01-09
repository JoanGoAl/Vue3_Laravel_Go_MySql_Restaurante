package pedidos

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func SetPedido(c *gin.Context) {
	var pedido Pedido
	c.BindJSON(&pedido)
	err := CreatePedido(&pedido)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, pedido)
	}
}
