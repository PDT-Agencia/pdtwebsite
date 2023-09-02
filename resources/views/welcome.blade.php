<x-app-layout>


    <div id="carouselExampleCaptions" class="bg-secondary mx-5 carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <div class="container">
        <div class="line"></div>
        <div class="point start"></div>
        <div class="point middle"></div>
        <div class="point end"></div>
    </div>
    <style>
       body, html {
    height: 100%;
    margin: 0;
    padding: 0;
}

.container {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    overflow: hidden;
}

.line {
    position: absolute;
    background-color: #000;
    height: 2px;
    width: 0;
    transition: width 2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    top: 50%; /* Agregamos esta línea para centrar la línea verticalmente */
}

.point {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

.start {
    top: 50%;
    left: 10px;
}

.middle {
    top: 20%;
    left: 50%;
}

.end {
    top: 80%;
    left: 90%;
}
    </style>

    <script>
       document.addEventListener("DOMContentLoaded", function () {
    const line = document.querySelector(".line");
    const middlePoint = document.querySelector(".middle");
    const endPoint = document.querySelector(".end");

    // Calcula la longitud total de la línea
    const totalLength = Math.sqrt(
        Math.pow(middlePoint.offsetTop - endPoint.offsetTop, 2) +
        Math.pow(middlePoint.offsetLeft - endPoint.offsetLeft, 2)
    );

    // Establece la longitud inicial de la línea
    line.style.width = totalLength + "px";

    // Inicia la animación
    setTimeout(function () {
        line.style.width = "0";
    }, 100);

    // Agrega una clase para animar los puntos finales
    middlePoint.classList.add("animate");
    endPoint.classList.add("animate");
});
    </script>
</x-app-layout>
