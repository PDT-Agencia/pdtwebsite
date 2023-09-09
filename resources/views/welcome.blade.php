<x-app-layout>


    
   @include('home.card')

    @include('home.bulb')
    @include('home.circle')
    @include('home.our-clients')

   
        

     <div class="container">
    <br> <br> <br> <br>
           @include('home.video')
            <br> <br> <br>
            
            @include('home.dog')
       
    </div>


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
    </style>


    
</x-app-layout>
