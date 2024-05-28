import React, { ChangeEvent, FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { SvgLoadIcon } from '../svg/svgs';

const initialValues = {
    name: "",
    company: "",
    email: "",
    tech: [],
    comment: ""
};

interface FormValues {
    name: string;
    company: string;
    email: string;
    tech: string[];
    comment: string;
}

const FormHome = () => {

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

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        setLoad(true)
        event.preventDefault();

        if (showValidation) {
            setDisabled(false)
            const res = await fetch('/api/contact', {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            console.log(await res.json());

            toast('Tu cotizacion fue enviada!', {
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
            setDisabled(true)
            setLoad(false)
        }
    };

    const handleTechItem = (techItem: string) => {
        setValues(prevValues => {
            const techArray = [...prevValues.tech];
            if (techArray.includes(techItem)) {
                return {
                    ...prevValues,
                    tech: techArray.filter(item => item !== techItem)
                };
            } else {
                return {
                    ...prevValues,
                    tech: [...techArray, techItem]
                };
            }
        });
    };

    const isDisabled = !values.name || !values.email || !values.company || values.tech.length === 0;
    const buttonClass = isDisabled ? 'bg-black/50 text-white/50' : 'bg-black p-3 text-white rounded-2xl hover:bg-[#20293b] duration-200';
    const [disabled, setDisabled] = useState<boolean>(true)

    const handleBlur = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setShowValidation(true);
    };

    const tech = [
        { service: "Desarrollo Web" },
        { service: "Creación de App" },
        { service: "Diseño UI/UX" },
        { service: "Diseño de marca" },
        { service: "Creación de Web" },
        { service: "Desarrollo de App" },
        { service: "Mantenimiento" },
        { service: "Diseño gráfico" },
        { service: "Producción Audiovisual" },
        { service: "Manejo de redes" },
        { service: "Otros" }
    ];

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10">
            <div className="w-full flex gap-5 flex-col ">
                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="name" className="font-bold text-xl">Nombre *</label>
                    <input
                        name="name"
                        onChange={handleOnChange}
                        value={values.name}
                        onBlur={handleBlur}
                        type="text"
                        id="name"
                        className={`w-full h-10 border rounded-md p-3  outline-none ${showValidation && !values.name ? 'border-red-600' : 'border-black/80 focus:border-black'}`}
                        placeholder="Nombre completo"
                    />
                </div>

                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="company" className="font-bold text-xl">Compañia *</label>
                    <input
                        name="company"
                        onChange={handleOnChange}
                        value={values.company}
                        onBlur={handleBlur}
                        type="text"
                        id="company"
                        className={`w-full h-10 border rounded-md p-3  outline-none ${showValidation && !values.company ? 'border-red-600' : 'border-black/80 focus:border-black'}`}
                        placeholder="Compañia"
                    />
                </div>

                <div className="w-full flex flex-col gap-2">
                    <label htmlFor="email" className="font-bold text-xl">Tu Email *</label>
                    <input
                        name="email"
                        onChange={handleOnChange}
                        value={values.email}
                        onBlur={handleBlur}
                        type="email"
                        id="email"
                        className={`w-full h-10 border rounded-md p-3  outline-none ${showValidation && !values.email ? 'border-red-600' : 'border-black/80 focus:border-black'}`}
                        placeholder="Tu email"
                    />
                </div>
            </div>

            <div className="w-full flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-xl">Estoy interesado en...</h3>
                    <p className="text-lg font-light">selecciona las opciones que son de tu interes (selecciona al menos una opcion)</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
                    {tech.map((item) => (
                        <span
                            onClick={() => handleTechItem(item.service)}
                            key={item.service}
                            className={`${values.tech.includes(item.service) && 'bg-black text-white'
                                } ${item.service === 'Producción Audiovisual' && 'py-3 md:py-0'} ${showValidation && values.tech.length === 0 ? 'border-red-600 text-black hover:bg-red-400/20' : 'border-black/80 focus:border-black hover:bg-black/90 hover:text-white'}  border duration-100 transition select-none cursor-pointer rounded-full w-full sm:w-44 p-3 text-center self-center`}
                        >
                            {item.service}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-full flex flex-col gap-5">
                <label htmlFor='comment' className="font-bold text-xl">Cuéntanos más sobre tu proyecto</label>
                <textarea
                    id='comment'
                    name="comment"
                    onChange={handleOnChange}
                    cols={10}
                    rows={5}
                    className="border rounded-md outline-none border-black/80 p-4"
                    placeholder='Cuéntanos tu historia...'
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isDisabled}
                className={`${buttonClass} ${!disabled && 'pointer-events-none bg-black/70 text-white/50'} font-bold flex items-center justify-center duration-200 transition p-3 rounded-md`}>
                {load ?

                    <div className='animate-spin'>
                        <SvgLoadIcon size={25} />
                    </div>


                    :
                    'Enviar'
                }
            </button>

            <Toaster />


        </form>
    )
}

export default FormHome;
