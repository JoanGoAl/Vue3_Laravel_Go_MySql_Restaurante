<?php

namespace App\Http\Controllers;

// use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
// use Illuminate\Foundation\Bus\DispatchesJobs;
// use Illuminate\Foundation\Validation\ValidatesRequests;
// use Illuminate\Routing\Controller as BaseController;
// Use for request
use Illuminate\Http\Request;

use App\Models\Table;

class TableController extends Controller
{
    public function getTables(Request $request)
    {
        return Table::all();
    }

    public function addTable(Request $request)
    {
        return Table::create($request->toArray());
    }

    public function deleteTable(Request $request, $id)
    {
        return Table::destroy($id);
    }

    public function updateTable(Request $request, $id)
    {
        try {
            $table = Table::where('id', $id)->first();
            $table->update($request->toArray());
            return $table;
        } catch (\Throwable $th) {
            return 'tonto';
        }
    }
}
