"use client";

import { Inputs } from "../lib/definitions";
import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useForm, SubmitHandler } from "react-hook-form";
import ContactIcon from "../icons/ContactIcon";

const MaxContactPage = () => {
  const serviceId = process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_PUBLIC_KEY;

  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setFocus,
  } = useForm<Inputs>();

  const form = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    setFocus("from_name");
  }, [setFocus]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const currentForm = form.current ?? null;

    if (currentForm && serviceId && templateId && publicKey) {
      try {
        await emailjs
          .sendForm(serviceId, templateId, currentForm, publicKey)
          .then((result) => {
            console.log(result);
            reset();
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 10_000);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="delayed-fade-animation fade-animation w-full p-4 flex flex-col items-center overflow-y-auto scroll-style">
      <div className="m-5">
        <ContactIcon width={40} />
      </div>
      <h1 className="flex justify-center m-4">Contact Me</h1>
      <br />
      {success ? (
        <p className="fade-animation text-green-500">
          Message is successfully sent. I will get back to you within 48 hours!
        </p>
      ) : (
        <p>
          <br />
        </p>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={form}
        className="w-full px-10 md:w-1/2 justify-center"
      >
        <div className="flex flex-col mb-2 items">
          <div className="flex gap-x-2">
            <label className="mb-1 text-xl">Name:</label>
            {errors.from_name && (
              <p className="text-red-500 self-center text-sm ">
                {errors.from_name.message}
              </p>
            )}
          </div>
          <input
            {...register("from_name", {
              required: { value: true, message: "Name is required." },
              maxLength: { value: 30, message: "Max length is 30 characters." },
              minLength: {
                value: 3,
                message: "Minimum length is 3 characters.",
              },
            })}
            type="text"
            className="rounded p-2"
          />
        </div>

        <div className="flex flex-col mb-2">
          <div className="flex gap-x-2">
            <label className="mb-1 text-xl">Email:</label>
            {errors.from_email && (
              <p className="text-red-500 self-center text-sm ">
                {errors.from_email.message}
              </p>
            )}
          </div>
          <input
            type="email"
            {...register("from_email", {
              required: { value: true, message: "Email is required." },
              maxLength: {
                value: 40,
                message: "Maximum length is 40 characters.",
              },
              minLength: {
                value: 8,
                message: "Minimum length is 8 characters.",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email.",
              },
            })}
            className="rounded p-2"
          />
        </div>

        <div>
          <div className="flex gap-x-2 ">
            <label className="mb-2 text-xl">Message:</label>
            {errors.message && (
              <p className="text-red-500 self-center text-sm">
                {errors.message.message}
              </p>
            )}
          </div>
          <textarea
            {...register("message", {
              required: { value: true, message: "Message is required." },
              maxLength: {
                value: 300,
                message: "Maximum length is 300 characters.",
              },
              minLength: {
                value: 5,
                message: "Minimum length is 5 characters.",
              },
            })}
            className="rounded w-full p-2 mt-1"
            rows={5}
          />
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="p-2 flex justify-center rounded mt-4 w-full bg-white text-black text-xl"
        >
          {isSubmitting ? (
            <span className="">Submitting...</span>
          ) : (
            <span>Submit</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default MaxContactPage;
