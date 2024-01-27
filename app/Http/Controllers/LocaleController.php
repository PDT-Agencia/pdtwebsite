<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class LocaleController extends Controller
{
    public function cambiarLocale($locale)
    {
        // Validar si $locale es una locale válida en tu aplicación

        // Almacenar la nueva locale en la sesión
        Cache::put('locale', $locale);
       
        
        // Otra opción: Almacenar la nueva locale en una cookie o en la base de datos según tus necesidades

        // Redireccionar a la página anterior o a donde prefieras
        return back();
    }
}
