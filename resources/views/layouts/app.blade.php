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

<body class="antialiased">

    <div class="hola ">
        <nav class="container pt-4 navbar navbar-light  justify-content-between">
            <a class="navbar-brand"><svg xmlns="http://www.w3.org/2000/svg" width="94" height="41"
                    viewBox="0 0 94 41" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0.00121364 4.0025C0.00121364 2.08863 1.50974 0 3.94546 0H17.3438C24.884 0 31.6705 5.04621 31.6705 14.7321C31.6705 23.8961 24.884 29.0006 17.3438 29.0006H7.6567V36.6573C7.6567 39.2095 6.03288 40.6598 3.94425 40.6598C2.03038 40.6598 0 39.2095 0 36.6573V4.0025H0.00121364ZM7.65791 7.30839V21.7516H17.345C21.231 21.7516 24.3051 18.3292 24.3051 14.7333C24.3051 10.6725 21.231 7.30839 17.345 7.30839H7.65791ZM72.8424 7.50502H62.693C57.6468 7.50502 57.6468 0.0801192 62.693 0.0801192H90.128C95.2907 0.0801192 95.2907 7.50502 90.128 7.50502H80.4991V36.7968C80.4991 41.8431 72.8424 41.9596 72.8424 36.7968V7.50502ZM34.7507 40.235C34.2264 40.2119 33.8186 39.7726 33.832 39.2471H33.8295L33.9703 33.7774C33.9703 28.7688 37.4097 26.8173 39.0396 26.1741C39.4983 25.992 39.9862 25.8998 40.4801 25.8998H49.3225C49.6175 25.8998 49.9124 25.8452 50.1879 25.7372C53.4974 24.4349 53.8724 21.1533 53.802 19.3171C53.7741 18.595 53.1879 18.0234 52.4658 18.0234H48.3092C47.8165 18.0234 47.4135 17.6472 47.3626 17.1581C46.6975 10.8024 42.1756 10.8024 42.1756 10.8024H34.9339C34.4011 10.8024 33.9703 10.3716 33.9703 9.83879V1.4612C33.9703 0.983035 34.321 0.572833 34.7956 0.507297C61.5509 -3.17481 62.034 19.5004 62.034 19.5004C62.034 40.2496 39.6561 40.4425 34.7507 40.235ZM38.2386 13.4274C38.8551 14.4736 39.2411 15.6532 39.4219 16.8753C39.6015 18.095 39.5421 19.3984 39.076 20.6108C38.8406 21.2116 38.5105 21.7868 38.0748 22.2723C37.6391 22.7553 37.1221 23.1558 36.5638 23.458C35.4376 24.049 34.1961 24.2929 32.9873 24.2589C34.139 23.8876 35.2337 23.4422 36.1597 22.8038C36.6087 22.4664 37.0202 22.0975 37.3588 21.6715C37.6986 21.2468 37.9595 20.7649 38.1573 20.2552C38.5542 19.2334 38.6755 18.0926 38.6585 16.9396C38.6282 15.7843 38.4716 14.6131 38.2386 13.4286V13.4274ZM43.4899 16.2176C43.4899 16.6707 43.1226 17.038 42.6695 17.038C42.2164 17.038 41.8491 16.6707 41.8491 16.2176C41.8491 15.7645 42.2164 15.3971 42.6695 15.3971C43.1226 15.3971 43.4899 15.7645 43.4899 16.2176Z"
                        fill="white" />
                </svg></a>

            <div>
                <div class="btn btn-light rounded-circle mx-3 my-2 my-sm-0">
                    Contáctanos
                </div>
                <div class="btn text-white  my-2 my-sm-0">
                    
                        Idioma
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8"
                        fill="none">
                        <path
                            d="M12.4102 0.940948C12.4142 0.757525 12.361 0.577404 12.258 0.425624C12.1549 0.273844 12.007 0.157947 11.8351 0.0940481C11.6631 0.030149 11.4755 0.021422 11.2983 0.0690802C11.1212 0.116738 10.9633 0.218413 10.8466 0.35997L6.21948 5.76116L1.59399 0.35997C1.52202 0.262048 1.43065 0.180041 1.32552 0.119084C1.22039 0.058127 1.10377 0.0195338 0.983032 0.00572064C0.862295 -0.00809253 0.740032 0.00317224 0.62385 0.0388094C0.507668 0.0744465 0.400061 0.133688 0.307835 0.212825C0.215608 0.291961 0.140797 0.389288 0.0879268 0.498709C0.0350561 0.608131 0.00536153 0.72729 0.000676118 0.848725C-0.00400929 0.970159 0.0163602 1.09125 0.0606422 1.20442C0.104923 1.31759 0.172093 1.4204 0.257948 1.50641L5.54886 7.69028C5.63174 7.78739 5.7346 7.86537 5.85053 7.91884C5.96645 7.97231 6.09263 8 6.2203 8C6.34796 8 6.47414 7.97231 6.59007 7.91884C6.70599 7.86537 6.80896 7.78739 6.89183 7.69028L12.1878 1.50641C12.3266 1.3502 12.4053 1.14983 12.4102 0.940948Z"
                            fill="white" />
                    </svg>
                </div>
            </div>

        </nav>
        <main>
            {{ $slot }}
        </main>
    </div>
    < <script src="https://cdn.canvasjs.com/ga/canvasjs.stock.min.js"></script>
</body>
<style>
    .hola {
        background: url('{{ asset('image/hombre.png') }}'), lightgray 50% / cover no-repeat;


    }

    p {
        color: var(--Blanco-PDT, #FFF);
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
</style>

</html>
