"use client";
import Link from "next/link";
import { resetPassword, FormState } from "../../../lib/actions";
import {
  Mail,
  LoaderCircle,
  CalendarCheck2,
} from "lucide-react";
import { useState, useActionState } from "react";

export default function ResetPassword() {
  const initialState: FormState = {
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    resetPassword,
    initialState
  );
  const [formState, setFormState] = useState({
    email: "",
  });
  const [formError, setFormError] = useState({
    email: "",
    submit: true,
  });
  function validateEmail() {
    if (!formState.email) {
      setFormError({ ...formError, email: "Email is required", submit: false });
    } else if (!formState.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setFormError({ ...formError, email: "Enter valid email", submit: false });
    } else {
      setFormError({ ...formError, email: "", submit: true });
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen container gap-10 mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <CalendarCheck2 className="size-6 text-blue-700" /> Task Master
      </h1>
      <form
        action={formAction}
        className="flex flex-col gap-2 items-center p-6 rounded-md w-11/12 sm:w-2/3 border border-gray-100  lg:w-1/3 shadow-lg"
      >
        <div className="flex flex-col gap-2 text-center items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Reset your password
          </h1>
          <p className="text-gray-500 ">
            Enter your email and we&apos;ll send you a link to get back into
            your account.
          </p>
        </div>
        <p
          className={`text-red-500 bg-red-100 w-full text-center p-2 rounded-md ${
            state?.errors.message ? "" : "opacity-0"
          }`}
        >
          {state?.errors.message ? state.errors.message : "placeholder"}
        </p>
        <div className="w-full">
          <div className="flex justify-between items-center relative">
            <Mail className="size-5 text-gray-500 absolute left-2" />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className={`w-full px-8 py-2 border border-gray-300 rounded-md outline-none ${
                formError.email && `border-red-500`
              }`}
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              onBlur={validateEmail}
            />
          </div>
          <p className={`text-red-500 ${formError.email ? "" : "opacity-0"}`}>
            {formError.email ? formError.email : "placeholder"}
          </p>
        </div>
        <button
          disabled={!formError.submit || isPending}
          type="submit"
          className="text-white bg-blue-700 w-full rounded-md px-4 py-2 hover:bg-blue-600 transition-colors flex justify-center items-center"
        >
          {isPending ? (
            <LoaderCircle className="size-6 animate-spin " />
          ) : (
            "Send Reset Link"
          )}
        </button>
        <p className="text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-700 font-semibold hover:text-blue-500 transition-colors"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
