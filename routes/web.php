<?php

use App\Http\Controllers\LocaleController;
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

Route::get('/', function () {
    $locale = Cache::get('locale');
    app()->setLocale($locale);
    return view('welcome');
})->name("home");

Route::get('/about_us', function () {
    $locale = Cache::get('locale');
    app()->setLocale($locale);
    return view('about_us');
})->name("about");
Route::get('/team', function () {
    $locale = Cache::get('locale');
    app()->setLocale($locale);
    return view('team');
})->name("team");
Route::get('/cambiar-locale/{locale}', [LocaleController::class,'cambiarLocale'])->name('cambiar-locale');
