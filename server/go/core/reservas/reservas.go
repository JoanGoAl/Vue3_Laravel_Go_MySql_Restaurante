package reservas

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetReserva(c *gin.Context) {
	id := c.Params.ByName("id")
	var reserva Reserva
	err := GetAllReservas(&reserva, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, reserva)
	}
}

func CreateReserva(c *gin.Context) {
	var reserva Reserva
	c.BindJSON(&reserva)
	err := CreateOneReserva(&reserva)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, reserva)
	}
}
