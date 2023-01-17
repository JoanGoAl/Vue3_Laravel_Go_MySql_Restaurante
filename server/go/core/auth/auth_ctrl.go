package auth

import (
	"encoding/base64"
	"net/http"
	"restaurante_go/Common"

	"restaurante_go/core/clients"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func responseClient(client clients.Client) gin.H {
	return gin.H{
		"token":  Common.GenToken(client.Id),
		"type":   "Bearer",
		"nombre": client.Nombre,
		"email":  client.Email,
		"avatar": client.Avatar,
	}
}

func Register(c *gin.Context) {
	var client clients.Client
	c.BindJSON(&client)
	client.Id = Common.GenerateRandomIdWithLength(10)
	client.Avatar = "https://api.multiavatar.com/" + base64.StdEncoding.EncodeToString([]byte(client.Nombre)) + ".png"
	passwordEncoded, _ := bcrypt.GenerateFromPassword([]byte(client.Password), bcrypt.DefaultCost)
	client.Password = string(passwordEncoded)

	if err := RegisterClient(&client); err != nil {
		c.AbortWithStatus(http.StatusNotImplemented)
		return
	}

	c.JSON(http.StatusOK, responseClient(client))
}

func Login(c *gin.Context) {
	var client clients.Client
	c.BindJSON(&client)

	password := client.Password

	if err := LoginClient(&client); err != nil {
		c.JSON(http.StatusOK, gin.H{"error": "Usuario o contraseña incorrectos"})
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(client.Password), []byte(password)); err != nil {
		c.JSON(http.StatusOK, gin.H{"error": "Usuario o contraseña incorrectos"})
		return
	}

	c.JSON(http.StatusOK, responseClient(client))
}
