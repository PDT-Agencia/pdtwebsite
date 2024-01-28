<x-app-layout>
    <div class="bg-black" id="abouts">
        <div class="container" id='container-about'>
            <div class="row">
                <div class="col-md-7">
                </div>
                <div class="col-md-5">
                    <p>
                        En PDT, no solo creamos soluciones; damos vida a visiones. Somos más que una agencia de medios: somos arquitectos digitales, artistas de la narrativa y expertos en integración tecnológica. 
                    </p>
                    <br>
                    <h3>¿NUESTRO SECRETO?</h3>
                    <p>
                        Un equipo apasionado de diseñadores y programadores que transforman ideas en experiencias cautivadoras.
                    </p>

                    <br>
                    <h3>NUESTRA ESENCIA</h3>
                    <p>
                        En el corazón de PDT late la fusión perfecta entre creatividad y tecnología. Somos contadores de historias digitales, construyendo narrativas que resuenan y experiencias que impactan. Cada proyecto es una oportunidad para desafiar los límites, trascender las expectativas y convertir ideas en realidad.
                    </p>

                </div>
            </div>


            <br><br>
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <h3>LO QUE HACEMOS</h3>

                        <ul>
                            <li>
                                <p>
                                Desarrollo: Transformamos líneas de código en experiencias interactivas. Desde aplicaciones web hasta soluciones personalizadas, construimos el futuro digital.
                                </p>

                                <p>
                                    Publicidad: Nuestra creatividad no conoce límites. Diseñamos campañas impactantes que no solo captan la atención, sino que también generan resultados tangibles.
                                </p>

                                <p>
                                    Integraciones: Conectamos tecnologías para potenciar tu presencia en línea. Desde API hasta integraciones complejas, hacemos que todo funcione en armonía.
                                </p>
                            </li>
                        </ul>
                        
                    </div>
                    <div class="col-md-5">
                        <h3>¿POR QUÉ ELEGIRNOS?</h3>
                        <ul>
                            <li>
                                <p>
                                    Equipo Apasionado: Nos apasiona lo que hacemos y eso se refleja en cada línea de código y cada pixel de diseño.
                                </p>

                                <p>
                                    Innovación Constante: Abrazamos la evolución digital. Siempre estamos un paso adelante, listos para llevar tus ideas al siguiente nivel.
                                </p>

                                <p>
                                    Colaboración Total: Tu visión es nuestra guía. Trabajamos contigo en cada paso para garantizar que el resultado final refleje tus objetivos.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <br><br>
                <div class="row">
                    <div class="col-md-12">
                        <p id='welcome-text'>Bienvenido a PDT, donde la creatividad encuentra su mejor aliado en la tecnología. Juntos, construimos el futuro digital.</p>
                    </div>
                </div>
            </div>
        </div>
        <br><br>
        <div class="container" id="our-team">
            <div class="row">
                <div class="col-md-12">
                    <h1 id='title-our-team'>Nuestro equipo</h1>
                </div>
                <br><br>
                <br>
                <div class="col-md-4 text-white">
                    <div class="d-grid mb-3 p-2 btn btn-danger btn-option" onclick='handleOurTeam(this, "creative")'>
                        Somos creativos
                    </div><br>
                    <div class="d-grid mb-3 p-2 btn btn-light btn-option" onclick='handleOurTeam(this, "responsible")'>
                        Somos responsables
                    </div><br>
                    <div class="d-grid mb-3 p-2 btn btn-light btn-option" onclick='handleOurTeam(this, "efficient")'>
                        Somos eficientes
                    </div><br>
                    <div class="d-grid mb-3 p-2 btn btn-light btn-option" onclick='handleOurTeam(this, "integral")'>
                        Somos integros
                    </div><br>
                    <div class="d-grid mb-3 p-2 btn btn-light btn-option" onclick='handleOurTeam(this, "adaptive")'>
                        Somos adaptativos
                    </div><br>
                    <div class="d-grid mb-3 p-2 btn btn-light btn-option" onclick='handleOurTeam(this, "evolution")'>
                        Somos evolución
                    </div><br>
                </div>
                <div class="col-md-8 rounded">
                    <div class="i" id='contact-content'>
                        <p id='decription-out-team'>
                            La pasión impulsa nuestra creatividad. Cada línea 
                            de código escrita, diseño creado y producción 
                            audiovisual realizada está impregnada de una pasión 
                            palpable por la creación y la expresión visual.
                        </p>
                    </div> 
                </div>
            </div>
        </div>

        <style>

            @media (max-width: 767px){
                .background-container{
                    height: 300px
                }
            }
            body{ 
                background: #000
            }
            .main-container{
                margin-top: -50px;
                background: transparent;
            }

            #container-about{
                background: transparent;
            }

            .bg-black{
                background-color: transparent !important;
            }
            .i {
                background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url('{{ asset('image/meeting.png') }}') lightgray;
                background-size: cover;
                width: 786px;
                height: 482px;
                position: relative;
            }

            .an {
                position: absolute;
                bottom: -390px;
                right: -250px;
            }

            body {
                overflow-x: hidden;
            }

            .overlay-p {
                position: absolute;
                bottom: 0;
                padding: 10px;
            }

            .overlay-p p {
                
                color: var(--Blanco-PDT, #FFF);
                font-family: 'Montserrat-light';
                font-size: 16px;
                font-style: normal;
                font-weight: 300;
                line-height: normal;
            }
        </style>

        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
        <script>
           function handleOurTeam(clickedButton, selectedOption) {
               
                var buttons = document.getElementsByClassName('btn-option');

                for (var i = 0; i < buttons.length; i++) {
                    if (buttons[i] === clickedButton) {
                        buttons[i].classList.remove('btn-light');
                        buttons[i].classList.add('btn-danger');
                    } else {
                        buttons[i].classList.remove('btn-danger');
                        buttons[i].classList.add('btn-light');
                    }
                }
                
                var paragraph = document.getElementById('decription-out-team');
                if (paragraph) {
                    switch (selectedOption) {
                        case 'creative':
                            paragraph.innerText = "La pasión impulsa nuestra creatividad. Cada línea de código escrita, diseño creado y producción audiovisual realizada está impregnada de una pasión palpable por la creación y la expresión visual.";
                            break;
                        case 'responsible':
                            paragraph.innerText = "Nos esforzamos por estar a la vanguardia de las tendencias tecnológicas y creativas. La innovación es la fuerza impulsora detrás de cada proyecto, permitiéndonos ofrecer soluciones únicas y revolucionarias.";
                            break;

                        case 'efficient':
                            paragraph.innerText = "La calidad y responsabilidad es nuestra firma. Desde el desarrollo de software hasta la producción audiovisual, nos comprometemos a mantener altos estándares en cada fase del proceso, garantizando resultados excepcionales.";
                            break;

                        case 'integral':
                            paragraph.innerText = "El tiempo es esencial. Nuestro equipo de producción se compromete a entregar resultados de manera eficiente sin comprometer la excelencia, garantizando que tu mensaje llegue en el momento adecuado.";
                            break;

                        case 'adaptive':
                            paragraph.innerText = "La integridad guía cada decisión. Mantenemos estándares éticos elevados en todas nuestras interacciones, asegurando transparencia, honestidad y respeto en cada proyecto y relación comercial.";
                            break;

                        case 'evolution':
                            paragraph.innerText = "En un mundo digital en constante evolución, la adaptabilidad es clave. Estamos preparados para enfrentar desafíos, ajustarnos a cambios rápidos y encontrar soluciones flexibles que se adapten a las necesidades cambiantes de nuestros clientes.";
                            break;
                        
                    }
                }


                var targetPosition = $('#decription-out-team').offset().top;

                $('html, body').animate({
                    scrollTop: targetPosition
                }, 0); 



            }
        </script>
    </div>
</x-app-layout>
