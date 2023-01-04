<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TableController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;

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


Route::get('/getTables', [TableController::class, 'getTables']);
Route::post('/addTable', [TableController::class, 'addTable']);
Route::delete('/deleteTable/{id}', [TableController::class, 'deleteTable']);
Route::put('/updateTable/{id}', [TableController::class, 'updateTable']);

// Users

Route::get('/getUsers', [UserController::class, 'getUsers']);
Route::put('/updateUser', [UserController::class, 'updateUser']);

// Products

Route::get('/getProducts', [ProductController::class, 'getProducts']);
Route::post('/addProduct', [ProductController::class, 'addProduct']);