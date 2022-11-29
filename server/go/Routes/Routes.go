package Routes

import (
	// "restaurante_go/Controllers"

	"net/http"
	"restaurante_go/tables"

	"github.com/gin-gonic/gin"
)

func CORS(c *gin.Context) {

	// First, we add the headers with need to enable CORS
	// Make sure to adjust these headers to your needs
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Methods", "*")
	c.Header("Access-Control-Allow-Headers", "*")
	c.Header("Content-Type", "application/json")

	// Second, we handle the OPTIONS problem
	if c.Request.Method != "OPTIONS" {
		c.Next()
	} else {
		// Everytime we receive an OPTIONS request,
		// we just return an HTTP 200 Status Code
		// Like this, Angular can now do the real
		// request using any other method than OPTIONS
		c.AbortWithStatus(http.StatusOK)
	}
}

// SetupRouter ... Configure routes
func SetupRouter() *gin.Engine {
	r := gin.Default()
	r.Use(CORS)

	grp1 := r.Group("/table-api")

	{
		// grp1.GET("/table", gin.H{"data": "user"})
		grp1.GET("/allTables", tables.GetTables)
		grp1.POST("/createTable", tables.CreateTable)
		grp1.DELETE("/deleteTable/:id", tables.DeleteTable)
		grp1.PUT("/updateTable/:id", tables.UpdateTable)
		// grp1.POST("user", Controllers.CreateUser)
		// grp1.GET("user/:id", Controllers.GetUserByID)
		// grp1.PUT("user/:id", Controllers.UpdateUser)
		// grp1.DELETE("user/:id", Controllers.DeleteUser)
	}
	return r
}
