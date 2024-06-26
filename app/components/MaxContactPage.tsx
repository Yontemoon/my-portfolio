"use client"

import { Inputs } from "../lib/definitions";
import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com"
import {useForm, SubmitHandler} from "react-hook-form"
import ContactIcon from "../icons/ContactIcon";


const MaxContactPage = () => {

    const serviceId = process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_PUBLIC_KEY

    const [success, setSuccess] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        setFocus
      } = useForm<Inputs>();

      const form = useRef<HTMLFormElement | null>(null)

      useEffect(() => {
        setFocus("from_name")
      }, [setFocus])

    
    const onSubmit: SubmitHandler<Inputs> =  (data) => {
        const currentForm = form.current ?? null;
        // console.log(currentForm)
        if (currentForm && serviceId && templateId && publicKey) {
            emailjs.sendForm(
                serviceId,
                templateId,
                currentForm,
                publicKey
            )
            .then((result) => {
                console.log(result)
                reset();
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                }, 10_000);
            }, (error) => {
                console.log(error.text)
            })
        } 
    }

    return (
        <div className="fade-animation w-full m-4 flex flex-col items-center text-white overflow-y-scroll">
            <div className="m-5">
                <ContactIcon color="white" width={40}/>
            </div>
            <h1 className="flex justify-center m-4">Contact Me</h1>
            <br/>
            {success ? <p className="fade-animation text-green-500">Message is successfully sent. I will get back to you within 48 hours!</p>: 
            <p><br/></p>}
            
            {/* <p>Would love to get in contact and possibly connect!</p> */}
            <form onSubmit={handleSubmit(onSubmit)} ref={form} className="w-1/2 justify-center">

                <div className="flex flex-col mb-2 items">
                    <div className="flex gap-x-2">
                        <label className="mb-1 text-xl">Name:</label>
                        {errors.from_name && (
                            <p className="text-red-500 self-center text-sm fade-animation">{errors.from_name.message}</p>
                        )}
                    </div>
                    <input 
                        {...register("from_name", 
                            {
                                required: {value: true, message: "Name is required."}, 
                                maxLength: {value: 30, message: "Max length is 30 characters."}, 
                                minLength: {value: 3, message: "Minimum length is 3 characters."},
                            }
                        )}
                        type="text"
                        className="rounded p-2"
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <div className="flex gap-x-2">
                        <label className="mb-1 text-xl">Email:</label>
                        {errors.from_email && (
                            <p className="text-red-500 self-center text-sm fade-animation">{errors.from_email.message}</p>
                        )}
                    </div>
                    <input 
                        type="email"
                        {...register("from_email", 
                            {
                                required: {value: true, message: "Email is required."}, 
                                maxLength: {value: 40, message: "Maximum length is 40 characters."}, 
                                minLength: {value: 8, message: "Minimum length is 8 characters."},
                                pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Please enter a valid email."}

                            }
                        )}
                        className="rounded p-2"
                    />
                </div>

                <div>
                    <div className="flex gap-x-2 ">
                        <label className="mb-2 text-xl">Message:</label>
                        {errors.message && (
                            <p className="text-red-500 self-center text-sm fade-animation">{errors.message.message}</p>
                        )}
                    </div>
                    <textarea 
                        {...register("message", 
                        {
                            required: {value: true, message: "Message is required."}, 
                            maxLength: {value: 300, message: "Maximum length is 300 characters."}, 
                            minLength: {value: 5, message: "Minimum length is 5 characters."}})}
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