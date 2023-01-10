<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Pedido;

class PedidoController extends Controller
{
    public function getPedidos(Request $request)
    {
        return Pedido::all();
    }

    public function changeStatusPedido(Request $request, $id)
    {
        $pedido = Pedido::find($id);
        $pedido->status = $request->status;
        $pedido->save();
        return $pedido;
    }
}
