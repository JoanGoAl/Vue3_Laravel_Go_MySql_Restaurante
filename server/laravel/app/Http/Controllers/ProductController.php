<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Product;

class ProductController extends Controller
{
    public function getProducts(Request $request)
    {
        return Product::all();
    }

    public function addProduct(Request $request)
    {
        $product = new Product();
        $product->nombre = $request->nombre;
        $product->descripcion = $request->descripcion;
        $product->img = $request->img;
        $product->precio = $request->precio;
        $product->categoria = $request->categoria;
        $product->save();
        return $product;
    }

    public function deleteProduct(Request $request, $id)
    {
        $product = Product::find($id);
        $product->delete();
        return $product;
    }

    public function updateProduct(Request $request, $id)
    {
        $product = Product::find($id);
        $product->nombre = $request->nombre;
        $product->descripcion = $request->descripcion;
        $product->img = $request->img;
        $product->precio = $request->precio;
        $product->categoria = $request->categoria;
        $product->save();
        return $product;
    }
}
