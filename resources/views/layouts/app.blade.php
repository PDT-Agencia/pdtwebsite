<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="{{ asset('vendor/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/OwlCarousel2-2.3.4/dist/assets/owl.carousel.min.css') }}">

    <!-- Styles -->
    @vite(['resources/css/app.scss', 'resources/js/app.js'])


</head>

<body class="">
    @php
        
        $route = $currentRoute = \Route::currentRouteName();
        
        if ($route == 'home') {
            $image = 'hombre.png';
            $background = '180deg, rgba(0, 0, 0, 0.00) 90%, #000 100%';
        } elseif ($route == 'about') {
            $image = 'office.png';
            $background = '180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%';
        } elseif ($route == 'team') {
            $image = 'team.png';
            $background = '180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%';
        }
        
    @endphp


    @if (isset($image))
        <style>
            .background-container {

                background: linear-gradient({{ $background }}), url('{{ asset('image/' . $image) }}');
                background-size: cover;
                background-repeat: no-repeat;

                /* Opcional: para centrar la imagen */
                height: 100vh;
                flex-shrink: 0;
                overflow: hidden;



            }
        </style>
    @endif



    <div class="background-container bg-black">


        @include('layouts.navbar')

       <div class="hero-note-footer">
            <div class="hero-note-regtangle"></div>
            <div>
                <div class="hero-note-flex">
                    <p class="hero-note-footer-text">Creamos <span class="hero-note-footer-text-bold">experiencias</span></p>
                </div>
                
                <div class="hero-note-flex-2">
                    <p class="hero-note-footer-text">Consolidamos <span class="hero-note-footer-text-bold">sueños</span></p>
                </div>
            </div>
       </div>

       <div class="hero-note-footer-icons">
            <div class="">
                <img src="{{ asset('image/play.png') }}" class="rounded card-img-top" alt="...">
            </div>

           
       </div>

    </div>

    <div class="hero-note-footer-location">
        <div class="hero-note-footer-container">
            <div class="hero-note-footer-location-pagination-select"></div>
            <div class="hero-note-footer-location-pagination"></div>
            <div class="hero-note-footer-location-pagination"></div>
            <div class="hero-note-footer-location-pagination"></div>
        </div>
    </div>


    <main>
        {{ $slot }}
    </main>
    <div class="bg-black">
        @include('layouts.footer')
    </div>




    <script src="{{ asset('vendor/OwlCarousel2-2.3.4/docs/assets/vendors/jquery.min.js') }}"></script>
    <script src="{{ asset('vendor/OwlCarousel2-2.3.4/dist/owl.carousel.min.js') }}"></script>
</body>


@stack('scripts')


</html>
