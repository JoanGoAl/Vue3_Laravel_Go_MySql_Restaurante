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
}
