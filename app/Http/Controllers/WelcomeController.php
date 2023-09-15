<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class WelcomeController extends Controller
{
    public function home(){

        $locale = Cache::get('locale');
        app()->setLocale($locale);
        return view("welcome");
    }

    public function about(){

        $locale = Cache::get('locale');
        app()->setLocale($locale);
        return view("about_us");
    }
    public function team(){

        $locale = Cache::get('locale');
        app()->setLocale($locale);
        return view("team");
    }

    public function service(){

        $locale = Cache::get('locale');
        app()->setLocale($locale);
        return view("our-service");
    }
}
