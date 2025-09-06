"use client";
import Link from "next/link";
import { signup, FormState } from "../../../lib/actions";
import {
  Eye,
  EyeClosed,
  Mail,
  Lock,
  LoaderCircle,
  CalendarCheck2,
} from "lucide-react";
import { useState, useActionState } from "react";

export default function Signup() {
  const initialState: FormState = {
    errors: {},
  };
  const [showPassword, setShowPassword] = useState(false);
  const [state, formAction, isPending] = useActionState(signup, initialState);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    email: "",
    password: "",
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
  function validatePassword() {
    if (!formState.password) {
      setFormError({
        ...formError,
        password: "Password is required",
        submit: false,
      });
    } else if (
      !formState.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      setFormError({
        ...formError,
        password:
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        submit: false,
      });
    } else {
      setFormError({ ...formError, password: "", submit: true });
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
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Your Account
          </h1>
          <p className="text-gray-500">
            start managing your tasks and boost your productivity
          </p>
        </div>
        <p
          className={`text-red-500 bg-red-100 w-full text-center p-2 rounded-md ${
            state.errors.message ? "" : "opacity-0"
          }`}
        >
          {state.errors.message ? state.errors.message : "placeholder"}
        </p>
        <div className="w-full">
          <label htmlFor="email">Email</label>
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
        <div className="w-full">
          <label htmlFor="password">Password</label>
          <div className="flex justify-between items-center relative">
            <Lock className="size-5 text-gray-500 absolute left-2" />
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`w-full px-8 py-2 border border-gray-300 rounded-md outline-none ${
                formError.password && `border-red-500`
              }`}
              value={formState.password}
              onChange={(e) =>
                setFormState({ ...formState, password: e.target.value })
              }
              onBlur={validatePassword}
            />
            {showPassword ? (
              <EyeClosed
                className="size-5 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <Eye
                className="size-5 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          <p
            className={`text-red-500 ${formError.password ? "" : "opacity-0"}`}
          >
            {formError.password ? formError.password : "placeholder"}
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
            "Sign Up"
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
