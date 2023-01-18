package Routes

import (
	// "restaurante_go/Controllers"

	"net/http"
	"restaurante_go/core/auth"
	"restaurante_go/core/clients"
	"restaurante_go/core/pedidos"
	"restaurante_go/core/products"
	"restaurante_go/core/reservas"
	"restaurante_go/core/tables"

	"github.com/gin-gonic/gin"

	"restaurante_go/Middlewares"
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
		grp_table.POST("/getTables", tables.GetTables)
		// grp_table.POST("/createTable", tables.CreateTable)       // TODO : eliminar
		// grp_table.DELETE("/deleteTable/:id", tables.DeleteTable) // TODO : eliminar
		// grp_table.PUT("/updateTable/:id", tables.UpdateTable)    // TODO : eliminar
	}

	grp_client := r.Group("/client-api")
	{
		// grp_client.GET("/allClients", clients.GetClients) // TODO : eliminar
		grp_client.Use(Middlewares.AuthMiddleware(true)).GET("/getClient", clients.GetClientById)
	}

	grp_reserva := r.Group("/reserva-api")
	{
		grp_reserva.Use(Middlewares.AuthMiddleware(true)).GET("/reserva", reservas.GetReserva)
		grp_reserva.Use(Middlewares.AuthMiddleware(true)).POST("/createReserva", reservas.CreateReserva)
		grp_reserva.Use(Middlewares.AuthMiddleware(true)).GET("/getReservas", reservas.GetReservas)
	}

	grp_product := r.Group("/product-api")
	{
		grp_product.GET("/getProducts", products.GetProducts)
	}

	grp_pedidos := r.Group("/pedidos-api")
	{
		grp_pedidos.Use(Middlewares.AuthMiddleware(true)).POST("/setPedido", pedidos.SetPedido)
		grp_pedidos.Use(Middlewares.AuthMiddleware(true)).GET("/getPedidos", pedidos.GetPedidos)
	}

	grp_auth := r.Group("/auth")
	{
		grp_auth.POST("/register", auth.Register)
		grp_auth.POST("/login", auth.Login)
		grp_auth.Use(Middlewares.AuthMiddleware(true)).GET("/user", auth.User)

	}

	return r
}
