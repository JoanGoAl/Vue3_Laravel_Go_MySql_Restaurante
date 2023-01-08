<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Reserva;

class ReservaController extends Controller
{
    public function getReservas(Request $request)
    {
        return Reserva::all();
    }

    public function changeStatusReserva(Request $request, $id)
    {
        $reserva = Reserva::find($id);
        $reserva->status = 1;
        $reserva->save();
        return $reserva;
        // $reserva->status = 1;
        // $reserva->save();
        // return $reserva;
    }
}