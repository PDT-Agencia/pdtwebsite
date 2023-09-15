<div id='contact-content'>
    <div class="row">
        <div class="row col-12 col-lg-5 ">
            <div class=" col-5">
                @include('animation.dog')
            </div>

            <div class="mt-3 col-7">
                <h3 class="idea">{{ __('¿YOU HAVE A GREAT IDEA?') }}</h3>

                <p class="idea_parraf text-black">{{ __('Tell us about her') }}</p>
            </div>


        </div>
        <div class="col-12 col-lg-7  border-start">
            <div class="row ">
                <div class="col-6">
                    <label class="">
                    {{__("Name and Company")}}</label> 
                    <input type="text" class="form-control">
                </div>
                <div class="col-6"><label for=""> {{__("Your email")}}</label>
                   
                    <input type="text" class="form-control">
                </div> <br> <br>
                <label class="mt-5 mb-3">{{__("I am interested in...")}}</label> <br> <br>

                <div class="row ">
                    <div class="col-xl-3 col-6 col-md-4">
                        <p class="service text-center p-3 mx-1  ">{{__("Web development")}}</p>
                    </div>
                    <div class="col-xl-3 col-6 col-md-4">
                        <p class="service text-center p-3 mx-1 ">{{__("App development")}}</p>
                    </div>
                    <div class="col-xl-3 col-6 col-md-4">
                        <p class="service text-center p-3 mx-1 ">{{__("UI/UX Design")}}</p>
                    </div>
                    <div class="col-xl-3 col-6 col-md-4">
                        <p class="service text-center p-3 mx-1 ">{{__("Brand design")}}</p>
                    </div>
                    <div class="col-xl-3 col-6 col-md-4">
                        <p class="service text-center p-3 mx-1 ">{{__("Web maintenance")}}</p>
                    </div>
                    <div class="col-xl-3 col-6 col-md-4">
                        <p class="service text-center p-3 mx-1 ">{{__("App maintenance")}}</p>
                    </div>
                    <div class="col-xl-3 col-6 col-md-4">
                        <p class="service text-center p-3 mx-1 ">{{__("Maintenance")}}</p>
                    </div>
                    <div class="col-xl-3 col-6 col-md-4">
                        <p class="service text-center p-3 mx-1 ">{{__("Graphic design")}}</p>
                    </div>
                    <div class="col-xl-3 col-6 col-md-4">
                        <p class="service text-center p-3 mx-1 ">{{__("Audiovisual production")}}</p>
                    </div>
                    <div class="col-xl-3 col-6 col-md-4">
                        <p class="service text-center p-3 mx-1 ">{{__("Network management")}}</p>

                    </div>
                    <div class="col-xl-3 col-6 col-md-4">
                        <p class="service text-center p-3 mx-1 ">{{__("Others")}}</p>

                    </div>


                </div>
            </div>
            <div class="my-5">
                <label class="mb-2">{{__("Tell us more about your project.")}}</label>
                <textarea name="" class="rounded" id="" cols="84" rows="5"></textarea>
                <div class="d-grid gap-2">
                    <button class="btn btn-dark" type="button">Enviar</button>
                   
                  </div>
            </div>
        </div>


    </div>
    
</div>
