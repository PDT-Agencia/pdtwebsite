<?php

use App\Http\Controllers\LocaleController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [WelcomeController::class, "home"])->name("home");

Route::get('/about_us',[WelcomeController::class,"about"])->name("about");
Route::get('/team',[WelcomeController::class,"team"])->name("team");
Route::get('/service',[WelcomeController::class,"service"])->name("service");

Route::get('/cambiar-locale/{locale}', [LocaleController::class,'cambiarLocale'])->name('cambiar-locale');

Route::get('/portafolio',[WelcomeController::class,"portfolio"])->name("portfolio");

