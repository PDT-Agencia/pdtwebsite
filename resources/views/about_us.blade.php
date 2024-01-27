<x-app-layout>
    <div class="bg-black">

        <div class="container">
            <div class="row container overlay-p">
                <div class="col-7 ">

                </div>
                <div class=" col-5">
                    <p>
                        Innovar objetivamente productos manufacturados empoderados mien
                        tras que las plataformas paralelas. Predominan de manera holística los
                        procedimientos de prueba extensibles para cadenas de suministro con
                        fiables. Involucre drásticamente los servicios web de primera línea fren
                        te a los entregables de vanguardia. afdfdajfgbdig dafhdbhiadsfad sdfa
                        sadgasdgjnafong jdsangfodasg oiajgfdgñsdnjfboigd jdnasgosndoas ds
                        asgnbfiogsa idojisagnidadjdfao sodanfgsabgñippiubfdbxa jdfsdoansdd
                        aovnoudasugdoaisknfodsodsfa.


                    </p>
                </div>
            </div>

        </div> <br> <br> <br> <br> <br>
        <div class=" container">
            <div class="row">
                <div class="col-12 col-lg-5 text-white">
                    <div class="d-grid mb-3 p-2 btn btn-danger">adsdsa</div><br>
                    <div class="d-grid mb-3 p-2 btn btn-light">adsdsa</div><br>
                    <div class="d-grid mb-3 p-2 btn btn-light">adsdsa</div><br>
                    <div class="d-grid mb-3 p-2 btn btn-light">adsdsa</div><br>
                    <div class="d-grid mb-3 p-2 btn btn-light">adsdsa</div><br>
                    <div class="d-grid mb-3 p-2 btn btn-light">adsdsa</div><br>
                </div>
                <div class="col-12 col-lg-5 rounded">
                    <div class="i" id='contact-content'>
                        <div class="an">
                            @include('animation.dog')
                        </div>
                    </div> <br><br><br><br><br><br><br>




                </div>
            </div>
        </div>

        <style>
            .i {
                background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url('{{ asset('image/meeting.png') }}') lightgray;
                background-size: 100% 100%;
                width: 786px;
                height: 482px;
                position: relative;
                /* Agrega posición relativa al contenedor principal */
            }

            .an {
                position: absolute;
                /* Cambia la posición a absoluta */
                bottom: -390px;
                /* Ajusta la distancia desde la parte inferior según tus necesidades */
                right: -250px;
                /* Ajusta la distancia desde la derecha según tus necesidades */
            }

            body {
                overflow-x: hidden;
                /* Oculta el scroll horizontal */
            }

            .overlay-p {
                position: absolute;
                bottom: 0;
                /* Coloca la capa en la parte inferior */

                /* Coloca la capa en la parte derecha */

                /* Fondo semi-transparente para hacer que el texto sea legible */
                padding: 10px;
                /* Añade espacio alrededor del texto */
            }

            .overlay-p p {
                
                color: var(--Blanco-PDT, #FFF);
                font-family: 'Montserrat-light';
                font-size: 16px;
                font-style: normal;
                font-weight: 300;
                line-height: normal;
                /* Tamaño de fuente del texto */
                /* Otros estilos de texto */
            }
        </style>
    </div>
</x-app-layout>
