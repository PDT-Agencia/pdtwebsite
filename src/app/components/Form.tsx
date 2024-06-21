import React, { ChangeEvent, FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { SvgCheckIcon, SvgLoadIcon } from '../svg/svgs';

const initialValues = {
    name: "",
    lastname: "",
    email: "",
    emprise: "",
    celnumeral: "",
    cel: "",
    country: "",
    comment: ""
};

interface FormValues {
    name: string;
    lastname: string;
    email: string;
    emprise: string;
    celnumeral: string;
    cel: string;
    country: string;
    comment: string;
}

const Form = () => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [showValidation, setShowValidation] = useState(false);
    const [load, setLoad] = useState(false);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleBlur = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setShowValidation(true);
    };

    const isDisabled = !values.name || !values.lastname || !values.email || !values.emprise || !values.cel || !values.celnumeral || !values.country;
    const buttonClass = isDisabled ? 'bg-red-500/50 text-white/50' : 'bg-red-500';
    const [disabled, setDisabled] = useState<boolean>(true)
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoad(true);
        setDisabled(false);

        if (showValidation) {
            try {
                const res = await fetch('https://pdtagencia.aiop.com.co/api/contact', {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                });

                if (res.status === 200) {
                    console.log(await res.json());
                    setSuccess(true);
                    setLoad(false);
                    setDisabled(false);

                    toast('Tu registro fue enviado!', {
                        duration: 4000,
                        position: 'bottom-center',

                        // Styling
                        style: {},
                        className: 'z-50',

                        // Custom Icon
                        icon: '👏',

                        // Change colors of success/error/loading icon
                        iconTheme: {
                            primary: '#000',
                            secondary: '#fff',
                        },

                        // Aria
                        ariaProps: {
                            role: 'status',
                            'aria-live': 'polite',
                        },
                    });
                } else {
                    throw new Error('Error en el servidor!');
                }
            } catch (error) {
                console.error(error);

                toast('No se logro enviar la cotizacion!', {
                    duration: 4000,
                    position: 'bottom-center',

                    // Styling
                    style: {},
                    className: 'z-50',

                    // Custom Icon
                    icon: '❌',

                    // Change colors of success/error/loading icon
                    iconTheme: {
                        primary: '#000',
                        secondary: '#fff',
                    },

                    // Aria
                    ariaProps: {
                        role: 'status',
                        'aria-live': 'polite',
                    },
                });
                setLoad(false);
                setDisabled(true);
                setSuccess(false)
            }
        }
    };
    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
            <div className="w-full flex flex-col md:flex-row gap-5 ">
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="name" className="text-lg"
                    >Nombre *</label
                    >
                    <input
                        value={values.name}
                        onChange={handleOnChange}
                        onBlur={handleBlur}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nombre completo"
                        className={`w-full h-10 border rounded-md p-3 bg-black  outline-none placeholder:text-white/40  duration-200 transition ${showValidation && !values.name ? 'border-red-400' : 'border-white/50 focus:border-white'}`}
                        autoFocus
                    />
                    <p className='text-base text-red-600'>
                        {showValidation && !values.name && 'Nombre es requerido'}
                    </p>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-lg"
                    >Apellido *</label
                    >
                    <input
                        value={values.lastname}
                        onChange={handleOnChange}
                        onBlur={handleBlur}
                        type="text"
                        id="lastName"
                        name="lastname"
                        placeholder="Apellido completo"
                        className={`w-full h-10 border rounded-md p-3 bg-black outline-none placeholder:text-white/40 duration-200 transition ${showValidation && !values.lastname ? 'border-red-400' : 'border-white/50 focus:border-white'}`}
                    />
                    <p className='text-base text-red-600'>
                        {showValidation && !values.lastname && 'Apellido es requerido'}
                    </p>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-5 ">
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="email" className="text-lg"
                    >Email *</label
                    >
                    <input
                        type="email"
                        id="email"
                        name='email'
                        placeholder='Correo electronico'
                        value={values.email}
                        onChange={handleOnChange}
                        onBlur={handleBlur}
                        className={`w-full h-10 border rounded-md p-3 bg-black outline-none placeholder:text-white/40  duration-200 transition ${showValidation && !values.email ? 'border-red-400' : 'border-white/50 focus:border-white'}`}
                    />
                    <p className='text-base text-red-600'>
                        {showValidation && !values.email && 'Email es requerido'}
                    </p>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="emprise" className="text-lg"
                    >Empresa *</label
                    >
                    <input
                        value={values.emprise}
                        onChange={handleOnChange}
                        onBlur={handleBlur}
                        type="text"
                        id="emprise"
                        name='emprise'
                        placeholder='Nombre de tu empresa'
                        className={`w-full h-10 border rounded-md p-3 bg-black outline-none placeholder:text-white/40  duration-200 transition ${showValidation && !values.emprise ? 'border-red-400' : 'border-white/50 focus:border-white'}`}
                    />
                    <p className='text-base text-red-600'>
                        {showValidation && !values.emprise && 'Empresa es requerido'}
                    </p>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-5 ">
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="celnumeral" className="text-lg"
                    >Cel *</label
                    >
                    <div className={`flex gap-3 items-center border rounded-md ps-2  bg-black duration-200 transition ${showValidation && (!values.celnumeral || !values.cel) ? 'border-red-400' : 'border-white/50 focus:border-white'}`}>

                        <div className={`border-e pe-3 h-full flex items-center justify-center duration-200 ${showValidation && (!values.celnumeral || !values.cel) ? 'border-red-400' : 'border-white/50 focus:border-white'}`}>
                            <select
                                defaultValue={values.celnumeral}
                                onChange={handleOnChange}
                                onBlur={handleBlur}
                                name="celnumeral"
                                id="celnumeral"
                                className={`bg-transparent w-16 outline-none `}
                            >
                                <option value={values.celnumeral} disabled>Seleccione un prefijo</option>
                                <option value="+57">+57</option>
                                <option value="+1">+1</option>
                                <option value="+44">+44</option>
                                <option value="+33">+33</option>
                            </select>
                        </div>
                        <input
                            value={values.cel}
                            onChange={handleOnChange}
                            onBlur={handleBlur}
                            type="number"
                            id="cel"
                            name="cel"
                            className={`w-full h-10 bg-transparent p-3  outline-none placeholder:text-white/40 transition ${showValidation && (!values.cel || !values.celnumeral) ? 'border-red-400' : 'border-white/50 focus:border-white'}`}
                            placeholder="3152058711"
                        />
                    </div>
                    <p className='text-base text-red-600'>
                        {showValidation && (!values.cel || !values.celnumeral) && 'Numeral y celular son requeridos'}
                    </p>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="country" className="text-lg"
                    >País *</label
                    >
                    <div className={`flex h-fit gap-3 items-center pe-3 border rounded-md bg-black hover:border-white duration-200 transition ${showValidation && !values.country ? 'border-red-400' : 'border-white/50 focus:border-white'}`}>

                        <select
                            defaultValue={values.country}
                            onChange={handleOnChange}
                            onBlur={handleBlur}
                            name="country"
                            id="country"
                            className={`bg-transparent w-full outline-none h-10 px-3 `}
                        >
                            <option value={values.country} disabled>Seleccione un país</option>
                            <option value="COL">Colombia</option>
                            <option value="USA">Estados Unidos</option>
                        </select>
                    </div>
                    <p className='text-base text-red-600'>
                        {showValidation && !values.country && 'Pais es requerido'}
                    </p>
                </div>
            </div>

            <div className="w-full flex flex-col gap-2">
                <label htmlFor="comment" className="text-lg"
                >Comentario</label
                >
                <textarea
                    value={values.comment}
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    name="comment"
                    id="comment"
                    placeholder="Cuéntanos tu historia..."
                    className={`w-full h-20 border rounded-md p-2 bg-black border-white/50 outline-none placeholder:text-white/40 focus:border-white duration-200 transition ${showValidation && !values.comment && 'border-red-400'}`}
                ></textarea>
            </div>

            <div className='flex items-start gap-5 justify-start text-sm'>
                <input type="checkbox" name="terms" id="terms" className='mt-1' />
                <label htmlFor="terms">
                    Me gustaría registrarme con mi dirección de correo electrónico para recibir
                    notificaciones de PDT con actualizaciones, recursos valiosos y consejos útiles.
                </label>
            </div>



            <div className='flex flex-col gap-6 items-center justify-center'>

                {/* <ReCAPTCHA
                                    sitekey="TU_CLAVE_DEL_SITIO"
                                /> */}

                <span className='text-sm'>
                    Al completar este formulario, aceptas que estás de acuerdo con la política de confidencialidad
                    de Globant.
                </span>



                <button
                    disabled={isDisabled}
                    className={`${buttonClass} ${!disabled && 'pointer-events-none bg-red-500/70 text-white/50'} text-base flex items-center justify-center duration-200 transition p-2 w-60 rounded-md`}>
                    {load ?

                        <div className='animate-spin'>
                            <SvgLoadIcon size={25} />
                        </div>


                        :
                        success ? (
                            <span className='flex gap-2'>
                                Enviado
                                <SvgCheckIcon size={23} />
                            </span>

                        ) : 'Inicia el cambio'
                    }
                </button>
            </div>
            <Toaster />
        </form>
    )
}

export default Form
