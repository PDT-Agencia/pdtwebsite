<x-app-layout>


    <div class="container-our-service">
        <br> <br>
        <div class="container" id='portfolio'>
            
            <div class="row">
                <div class="col-md-6">
                    <div id='wellezy' class='item-portfolio'>
                        <img class='image' src="{{asset('image/portfolio/wellezy.png')}}" alt="">
                        <div class='content-text-portfolio top left'>
                            <p class="hero-note-footer-text text-card-service">Web y Buscador de vuelos </p>
                            <p class="text-card-service-two">
                                <span class="hero-note-footer-text-bold ">Wellezy</span>
                            </p>
                        </div>
                    </div>
                   
                </div>
                <div class="col-md-6">
                    <div id='cep' class='item-portfolio'>
                        <img class='image' src="{{asset('image/portfolio/cep.png')}}" alt="">

                        <div class='content-text-portfolio top left'>
                            <p class="hero-note-footer-text text-card-service">APP Y WEB </p>
                            <p class="text-card-service-two">
                                <span class="hero-note-footer-text-bold ">Clínica CEP</span>
                            </p>
                        </div>


                    </div>
                </div>
            </div>

            <br>


            <div class="row">
                <div class="col-md-6">
                    <div id='wellezy' class='item-portfolio' style='height: 885px'>
                        <img class='image' style='height: 885px' src="{{asset('image/portfolio/daniel_correa_posada.png')}}" alt="">
                        <div class='content-text-portfolio bottom left'>
                            <p class="hero-note-footer-text text-card-service">APP MÓVIL</p>
                            <p class="text-card-service-two">
                                <span class="hero-note-footer-text-bold ">Dr. Daniel Correa</span>
                            </p>
                        </div>
                    </div>
                   
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-12" style='margin-bottom: 25px;'> 
                            <div class='item-portfolio'>
                                <img class='image' src="{{asset('image/portfolio/wellezy2.png')}}" alt="">

                                <div class='content-text-portfolio top left'>
                                    <p class="hero-note-footer-text text-card-service">Web y Buscador de vuelos </p>
                                    <p class="text-card-service-two">
                                        <span class="hero-note-footer-text-bold ">Wellezy</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <br>
                        <br>

                        <div class="col-md-12">
                            <div class='item-portfolio'>
                                <img class='image' src="{{asset('image/portfolio/web_dr_correa.png')}}" alt="">

                                <div class='content-text-portfolio bottom right'>
                                    <p class="hero-note-footer-text text-card-service">APP Y WEB </p>
                                    <p class="text-card-service-two">
                                        <span class="hero-note-footer-text-bold ">Clínica CEP</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>



        </div>

    </div>
    <style>
       .background-container{
            background-color: white !important;
       }
       .navbar a{
        color: #000
       }

       .fill a{
        color : white
       }
    </style>

    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    <script>
        var logoLink = document.getElementById("logoLink");
        var logoImage = document.getElementById("logo");

        function changeToImage() {
            logoLink.style.display = "none";  
            logoImage.style.display = "block";  
        }

        changeToImage();

    </script>

</x-app-layout>
