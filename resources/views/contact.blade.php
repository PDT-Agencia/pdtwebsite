<x-app-layout>


    <div class="container-our-service">
        <br> <br>
        <div class="container" id='portfolio'>
            
            <div class="row">
            <div class="container">
                <br> <br> <br> <br>
                @include('home.video')
                <br> <br> <br>

                @include('home.dog')

            </div>
               
            </div>

            <br>

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
