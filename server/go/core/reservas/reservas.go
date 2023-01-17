package reservas

import (
	"net/http"
	"restaurante_go/Common"

	"github.com/gin-gonic/gin"
)

func GetReserva(c *gin.Context) {
	id, _ := c.Get("client_id")
	var reserva Reserva
	err := GetOneReservas(&reserva, id.(string))
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, reserva)
	}
}

func CreateReserva(c *gin.Context) {
	var reserva Reserva
	c.BindJSON(&reserva)

	idClient, _ := c.Get("client_id")
	reserva.Idclient = idClient.(string)

	reserva.Id = Common.GenerateRandomIdWithLength(10)

	err := CreateOneReserva(&reserva)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, reserva)
	}
}
