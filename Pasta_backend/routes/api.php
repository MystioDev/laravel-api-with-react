<?php

use App\Http\Controllers\PastaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('api:auth');

Route::get('/pastas', [PastaController::class, 'index']);
Route::get('/pastas/{id}', [PastaController::class, 'show']);
Route::delete('/pastas/{id}', [PastaController::class, 'destroy']);
Route::post('/pastas', [PastaController::class, 'store']);
