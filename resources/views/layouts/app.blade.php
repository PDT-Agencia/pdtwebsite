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
            $background ="180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%";
        } elseif ($route == 'about') {
            $image = 'office.png';
            $background ="180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%";
        }elseif($route == "team") {
            $image = 'team.png';
            $background ="180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%";
        }
        
    @endphp
    <style>
        .background-container {
            position: relative;
            background:  linear-gradient({{$background}} ), url('{{ asset('image/' . $image) }}');
            background-size: cover;
            background-repeat: no-repeat;
          
            /* Opcional: para centrar la imagen */
            height: 100%;
            flex-shrink: 0;
            overflow: hidden;
            


        }
    </style>


    <div class="background-container ">


        @include('layouts.navbar')


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
