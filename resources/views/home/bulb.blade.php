<div id='bulb'>
    <div class='container'>
        <div id="content">
            <div id="content-bombilla">
                <div class="content-items content-item-left text-align-left">
                    <div class="item animation">
                        <div class="item-option margin-left">
                            <img src="{{ asset('image/item.png') }}" width="24" alt="">
                            <p>{{ __('More than 300 websites') }}</p>
                        </div>
                    </div>

                    <div class="item animation">
                        <div class="item-option">
                            <img src="{{ asset('image/item.png') }}" width="24" alt="">
                            <p>{{ __('More than 30 applications') }}</p>
                        </div>
                    </div>

                    <div class="item animation">
                        <div class="item-option margin-left">
                            <img src="{{ asset('image/item.png') }}" width="24" alt="">
                            <div class="item-especial">
                                <p>{{ __('Content creation and network management') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img class="elemento-3d-up-lefts" id="bombilla" src="{{ asset('image/bombilla.png') }}" alt="">
                <img class="elemento-3d-up-lefts" id="luz" src="{{ asset('image/luz.png') }}" alt="">


                <div class="content-items content-item-right text-align-left">
                    <div class="item animation">
                        <div class="item-option">
                            <img src="{{ asset('image/item.png') }}" width="24" alt="">
                            <p>{{ __('Production of Audiovisual content') }}</p>
                        </div>
                    </div>

                    <div class="item animation">
                        <div class="item-option margin-left">
                            <img src="{{ asset('image/item.png') }}" width="24" alt="">
                            <p>{{ __('More than 3000 pieces created') }}</p>
                        </div>
                    </div>

                    <div class="item animation">
                        <div class="item-option">
                            <img src="{{ asset('image/item.png') }}" width="24" alt="">
                            <p>{{ __('More than 8 years of experience') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @push('scripts')
        <script>
            $(document).ready(function() {
                $(".owl-carousel").owlCarousel();
            });

            function handleIntersection(entries, observer) {


                entries.forEach(function(entry) {
                    const element = entry.target;
                    if (entry.isIntersecting) {
                        setTimeout(() => {

                            element.style.animation = "parpadeo .15s infinite, detenerAnimacion 4s 1 forwards";


                            const elements = document.querySelectorAll(".animation");
                            elements.forEach(function(item) {
                                item.style.animation =
                                    "parpadeoText .15s infinite, detenerAnimacion 4s 1 forwards";
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

                    } else {

                        element.style.opacity = 0;
                        const elements = document.querySelectorAll(".animation");
                        elements.forEach(function(item) {
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
    @endpush
</div>
