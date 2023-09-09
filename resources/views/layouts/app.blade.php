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

    @font-face {
        font-family: 'Montserrat-Regular';
        src: url('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf') format('truetype');
    }


    @font-face {
        font-family: 'Montserrat-Light';
        src: url('../assets/fonts/Montserrat/static/Montserrat-Light.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Montserrat-Bold';
        src: url('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf') format('truetype');
    }

    body{
        font-family: Montserrat-Regular;
    }
    .navbar a{
        font-family: Montserrat-Light;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        text-decoration: none;
        color: white;
    }

    .nav-contact a{
        font-family: Montserrat-Bold;
        color: #DE383F;
    }


    .home-services .card{
        width: 252px;
        height: 347px;
        border: none;
    }
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

    #bulb{
        background-color: black;
        padding-bottom: 15%;
        margin-top: -100px;
    }



    @keyframes parpadeo {
            0%, 100% {
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
        }



        @keyframes parpadeoText {
            0%, 100% {
                opacity: 0;
            }
            50% {
                opacity: .2;
            }
        }


        #content {
            background-color: black;
            display: flex;
            justify-content: center;
            
        }

        #content-bombilla{
            position: relative;
        }

        #bombilla {
            width: 780px;
            position: absolute;
            z-index: 100;
        }

        #luz {
            position: relative;
            width: 780px;
            z-index: 200;
            opacity: 0;
        }

        .content-items{
           
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .content-item-left{
            position: absolute;
            top: 300px;
            left: -200px;
        }

        .content-item-right{
            position: absolute;
            top: 300px;
            right:-200px;
        }

        .content-items .item p{
            font-family: Montserrat-Light;
            color: white;
            font-size: 18px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
            margin: 0;
        }

        .text-align-right p{
            text-align: right;
            line-height: 3%;
        }

        .text-align-left p{
            text-align: left;
        }

        .margin-left{
            margin-left: 65px;
        }

       
        .item{
            opacity: 0;
            padding: 7% 5%;
        }

        .item-option{
            display: flex;
            align-items: center;
        }

        .item img{
            margin-right: 10px;
        }

</style>


<script>
  
  function handleIntersection(entries, observer) {

    
    entries.forEach(function (entry) {
        const element = entry.target;
      if (entry.isIntersecting) {
        setTimeout(() => {
            
            element.style.animation = "parpadeo .15s infinite, detenerAnimacion 4s 1 forwards";


            const elements = document.querySelectorAll(".animation");
            elements.forEach(function (item) {
                item.style.animation = "parpadeoText .15s infinite, detenerAnimacion 4s 1 forwards"; 
                item.style.opacity = 1;

                setTimeout(() => {
                    item.style.animation = 'none'
                    item.style.opacity = 1;
                }, 1000);

            });

            setTimeout(() => {
                element.style.animation = 'none'
                element.style.opacity = 1;
            }, 1000);
        }, 2000);
        
      }else{
        
        element.style.opacity = 0;
        const elements = document.querySelectorAll(".animation");
        elements.forEach(function (item) {
            item.style.opacity = 0;
        });

      }
    });
  }

  
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0, 
  });

  const luz = document.getElementById("luz");
  observer.observe(luz);


</script>



</html>
