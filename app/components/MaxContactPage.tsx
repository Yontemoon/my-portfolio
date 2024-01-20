import { Inputs } from "../lib/definitions";
import { useRef } from "react";
import emailjs from "emailjs-com"
import {useForm, SubmitHandler} from "react-hook-form"


const MaxContactPage = () => {

    const serviceId = process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_PUBLIC_KEY

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<Inputs>()

      const form = useRef<HTMLFormElement | null>(null)

    
    const onSubmit: SubmitHandler<Inputs> =  (data) => {
        const currentForm = form.current ?? null;
        console.log(currentForm)
        if (currentForm && serviceId && templateId && publicKey) {
            emailjs.sendForm(
                serviceId,
                templateId,
                currentForm,
                publicKey
            )
            .then((result) => {
                console.log(result)
            }, (error) => {
                console.log(error.text)
            })
        reset();
        } 
    }

    return (
        <div className="fade-animation w-full m-4 flex flex-col items-center text-white">
            <br/>
            <h1 className="flex justify-center underline m-4">Contact Me</h1>
            <br/>
            {/* <p>Would love to get in contact and possibly connect!</p> */}
            <form onSubmit={handleSubmit(onSubmit)} ref={form} className="w-1/2 justify-center">
                <div className="flex flex-col mb-2">
                    <label className="mb-1 text-xl">Name:</label>
                    <input 
                        {...register("from_name", {required: true, maxLength: 20, minLength: 3})}
                        type="text"
                        className="rounded p-2"
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label className="mb-1 text-xl">Email:</label>
                    <input 
                        type="email"
                        {...register("from_email", {required: true, maxLength: 25, minLength: 5})}
                        className="rounded p-2"
                    />
                </div>
                <div>
                    <label className="mb-2 text-xl">Message:</label>
                    <textarea 
                        {...register("message", {required: true, maxLength: 300, minLength: 10})}
                        className="rounded w-full p-2 mt-1"
                        rows={5}
                    />
                </div>
                <button 
                    type="submit"
                    className="p-2 flex justify-center rounded mt-4 w-full bg-white text-black text-xl"
                >
                    Submit
                </button>

            </form>
        </div>
    );
};

export default MaxContactPage;