<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TableController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReservaController;
use App\Http\Controllers\PedidoController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('jwt.verify')->group(function () {
    Route::get('/getTables', [TableController::class, 'getTables']);
    Route::post('/addTable', [TableController::class, 'addTable']);
    Route::delete('/deleteTable/{id}', [TableController::class, 'deleteTable']);
    Route::put('/updateTable/{id}', [TableController::class, 'updateTable']);
});
// Users
Route::middleware('jwt.verify')->group(function () {
    Route::get('/getUsers', [UserController::class, 'getUsers']);
    Route::put('/updateUser', [UserController::class, 'updateUser']);
});
Route::get('/checkAdmin/{email}', [UserController::class, 'checkAdmin']);

// Products
Route::middleware('jwt.verify')->group(function () {
    Route::get('/getProducts', [ProductController::class, 'getProducts']);
    Route::post('/addProduct', [ProductController::class, 'addProduct']);
    Route::delete('/deleteProduct/{id}', [ProductController::class, 'deleteProduct']);
    Route::put('/updateProduct/{id}', [ProductController::class, 'updateProduct']);
});
// Reserves
Route::middleware('jwt.verify')->group(function () {
    Route::get('/getReservas', [ReservaController::class, 'getReservas']);
    Route::put('/changeStatusReserva/{id}', [ReservaController::class, 'changeStatusReserva']);
});
// Orders
Route::middleware('jwt.verify')->group(function () {
    Route::get('/getPedidos', [PedidoController::class, 'getPedidos']);
    Route::put('/changeStatusPedido/{id}', [PedidoController::class, 'changeStatusPedido']);
});
