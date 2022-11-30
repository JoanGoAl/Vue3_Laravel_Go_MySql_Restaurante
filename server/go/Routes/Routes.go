package Routes

import (
	// "restaurante_go/Controllers"

	"net/http"
	"restaurante_go/core/clients"
	"restaurante_go/core/tables"

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

	grp_table := r.Group("/table-api")
	{
		grp_table.GET("/allTables", tables.GetTables)
		grp_table.POST("/createTable", tables.CreateTable)
		grp_table.DELETE("/deleteTable/:id", tables.DeleteTable)
		grp_table.PUT("/updateTable/:id", tables.UpdateTable)
	}

	grp_client := r.Group("/client-api")
	{
		grp_client.GET("/allClients", clients.GetClients)
		grp_client.GET("/client/:id", clients.GetClientById)
	}
	return r
}
