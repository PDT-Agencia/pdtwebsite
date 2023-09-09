<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

    <!-- Styles -->
    @vite(['resources/css/app.scss', 'resources/js/app.js'])

</head>

<body class="">


    <div class="background-container ">

        @include('layouts.navbar')

    </div>

    <main>
        {{ $slot }}
    </main>

    @stack('scripts')
    <script src="https://cdn.canvasjs.com/ga/canvasjs.stock.min.js"></script>
</body>
<style>
    .client {
        color: var(--Negro-PDT, #171D2A);
        font-family: Montserrat;
        font-size: 36px;
        font-style: normal;
        font-weight: 1000;
        line-height: normal;
        margin-top: 350px;
        /* Agrega un margen superior para separar el texto del contenido */
    }



    .circle-pdt {
        transform: translate(-50%, -50%);
        position: absolute;
        /* Establece una posición absoluta para el contenido */
        left: 50%;
        /* Centra el contenido horizontalmente en el contenedor */

        border-radius: 336px;
        background: var(--Blanco-PDT, #FFF);
        box-shadow: 12px 15px 16px 0px rgba(0, 0, 0, 0.25);
        width: 336px;
        height: 336px;
        flex-shrink: 0;
    }





    @keyframes rotateTail {
        0% {
            transform: rotateY(0deg);
        }

        25% {
            transform: rotateY(15deg);
        }

        50% {
            transform: rotateY(0deg);
        }

        75% {
            transform: rotateY(-15deg);
        }

        100% {
            transform: rotateY(0deg);
        }
    }

    .button-cont {
        color: var(--Rojo-PDT, #DE383F);

        /* Cambia el color de fondo al pasar el cursor */

    }

    .button-cont:hover {

        color: white;
        /* Cambia el color de fondo al pasar el cursor */

    }

    .background-container {
        position: relative;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url('{{ asset('image/hombre.png') }}');
        background-size: cover;
        height: 100%;
        flex-shrink: 0;
        overflow: hidden;
    }

    .background-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }







    /* Estilos para el contenedor principal de contenido */
    body {
        overflow-y: scroll;
        /* Agrega una barra de desplazamiento vertical cuando sea necesario */
        height: 100vh;
        /* Ocupa toda la altura de la ventana */

    }

    p {
        color: var(--Blanco-PDT, #FFF);
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

    .fill {
        border-radius: 13.5px;
        background: var(--Blanco-PDT, #FFF);

    }
</style>

</html>
