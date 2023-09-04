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

    <canvas id="canvas" width="500" height="100"></canvas>


    <style>
        body {
            margin: 0;
            overflow: hidden;
        }

        canvas {
            display: block;
        }
    </style>

    <canvas id="myCanvas"></canvas>
    <script>
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");

        // Configurar el tamaño del canvas
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Configurar el estilo de la línea
        ctx.lineWidth = 3;
        ctx.strokeStyle = "blue";

        // Comenzar el trazado
        ctx.beginPath();

        // Dibujar un semicírculo
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 100;
        const startAngle = 0;
        const endAngle = Math.PI;

        ctx.arc(centerX, centerY, radius, startAngle, endAngle);

        // Calcular las coordenadas de destino para las líneas rectas
        const startX = centerX - radius;
        const startY = centerY;
        const endX1 = centerX + radius + 100; // Línea recta hacia la derecha
        const endY1 = centerY;
        const endX2 = centerX - radius - 100; // Línea recta hacia la izquierda
        const endY2 = centerY;

        // Continuar con líneas rectas desde los extremos del semicírculo en la misma dirección
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX1, endY1); // Línea recta hacia la derecha
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX2, endY2); // Línea recta hacia la izquierda

        // Finalizar el trazado
        ctx.stroke();
    </script>
</x-app-layout>
