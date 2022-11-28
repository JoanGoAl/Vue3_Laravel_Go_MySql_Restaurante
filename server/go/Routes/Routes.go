package Routes

import (
	// "restaurante_go/Controllers"

	"restaurante_go/tables"

	"github.com/gin-gonic/gin"
)

// SetupRouter ... Configure routes
func SetupRouter() *gin.Engine {
	r := gin.Default()

	grp1 := r.Group("/table-api")

	{
		// grp1.GET("/table", gin.H{"data": "user"})
		grp1.GET("/allTables", tables.GetTables)
		// grp1.POST("user", Controllers.CreateUser)
		// grp1.GET("user/:id", Controllers.GetUserByID)
		// grp1.PUT("user/:id", Controllers.UpdateUser)
		// grp1.DELETE("user/:id", Controllers.DeleteUser)
	}
	return r
}
