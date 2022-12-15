<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Client extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    // type Client struct {
    //     Id        uint   `json:"id"`
    //     Dni       string `json:"dni"`
    //     Nombre    string `json:"nombre"`
    //     Telefono  string `json:"telefono"`
    //     Email     string `json:"email"`
    //     Direccion string `json:"direccion"`
    //     Avatar    string `json:"avatar"`
    //     Usernane  string `json:"username"`
    //     Password  string `json:"password"`
    //     Admin     bool   `json:"admin"`
    // }
    protected $fillable = [
        'dni',
        'nombre',
        'telefono',
        'email',
        'direccion',
        'avatar',
        'username',
        'password',
        'admin',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
