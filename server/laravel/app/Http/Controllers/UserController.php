<?php

namespace App\Http\Controllers;

// use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
// use Illuminate\Foundation\Bus\DispatchesJobs;
// use Illuminate\Foundation\Validation\ValidatesRequests;
// use Illuminate\Routing\Controller as BaseController;
// Use for request
use Illuminate\Http\Request;

use App\Models\Client;

class UserController extends Controller
{
    public function getUsers(Request $request)
    {
        return Client::all();
    }

    public function updateUser(Request $request)
    {
        $client = Client::find($request->id);
        $client->dni = $request->dni;
        $client->nombre = $request->nombre;
        $client->telefono = $request->telefono;
        $client->email = $request->email;
        $client->direccion = $request->direccion;
        $client->username = $request->username;
        $client->admin = $request->admin;
        $client->save();
        return $client;
    }
}
