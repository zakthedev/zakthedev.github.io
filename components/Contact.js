import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

import { contact } from "@/data/config";

export default function Contact() {
  const { title, subtitle } = contact;
  const apiKey = process.env.NEXT_PUBLIC_FORM_KEY;
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Portfolio Inquiry",
      subject: "New Message",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <div id="contact">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {title}
        </h2>
        <h1>{subtitle}</h1>
        <div className="flex flex-col">
          <h3>
            If you have any question or inquiry, Please fill the form below and I
            will get back to you very soon.
          </h3>
          <div className="justify-center md:px-24">
            <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="checkbox"
                name="botcheck"
                id=""
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}
              ></input>

              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#050708] dark:text-white dark:border-gray-600 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
                    errors.name
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("name", {
                    required: "Name is required",
                    maxLength: 80,
                  })}
                  required
                />
                {errors.name && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.name.message}</small>
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="tel"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Phone Number
                </label>
                <input
                  id="tel"
                  name="tel"
                  type="tel"
                  className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#050708] dark:text-white dark:border-gray-600 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
                    errors.tel
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("tel")}
                />
                {errors.tel && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.tel.message}</small>
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#050708] dark:text-white dark:border-gray-600 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
                    errors.email
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email.",
                    },
                  })}
                  required
                />
                {errors.email && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.email.message}</small>
                  </div>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-[#050708] dark:text-white dark:border-gray-600 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
                    errors.message
                      ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                      : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  }`}
                  placeholder="How can I help you?"
                  {...register("message", {
                    required: "Enter your Message.",
                  })}
                  required
                ></textarea>
                {errors.message && (
                  <div className="mt-1 text-red-600">
                    <small>{errors.message.message}</small>
                  </div>
                )}
              </div>
              <div className="flex w-full justify-center items-center">
                <button
                  type="submit"
                  className="text-gray-900 font-extrabold bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#050708] dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  {isSubmitting ? (
                    <svg
                      className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    "Send"
                  )}
                </button>
              </div>
            </form>
            {isSubmitSuccessful && isSuccess && (
              <div className="mt-3 text-sm text-center text-green-500">
                {message || "Success. Message sent successfully"}
              </div>
            )}
            {isSubmitSuccessful && !isSuccess && (
              <div className="mt-3 text-sm text-center text-red-500">
                {message || "Something went wrong. Please try later."}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
