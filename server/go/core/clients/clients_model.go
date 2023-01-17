package clients

type Client struct {
	Id        string `json:"id"`
	Dni       string `json:"dni"`
	Nombre    string `json:"nombre"`
	Telefono  string `json:"telefono"`
	Email     string `json:"email"`
	Direccion string `json:"direccion"`
	Avatar    string `json:"avatar"`
	Username  string `json:"username"`
	Password  string `json:"password"`
	Admin     bool   `json:"admin"`
}

func (b *Client) TableName() string {
	return "clients"
}
