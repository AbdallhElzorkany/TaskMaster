"use client";
import { resetPasswordConfirm, FormState } from "@/lib/actions";
import {
  Eye,
  EyeClosed,
  Lock,
  LoaderCircle,
  CalendarCheck2,
} from "lucide-react";
import { useState, useActionState } from "react";



export default function ResetPasswordConfirm() {
  const initialState: FormState = {
    errors: {},
  };
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm: false,
  });
  const [state, formAction, isPending] = useActionState(
    resetPasswordConfirm,
    initialState
  );
  const [formState, setFormState] = useState({
    password: "",
    passwordConfirm: "",
  });
  const [formError, setFormError] = useState({
    password: "",
    passwordConfirm: "",
    submit: true,
  });
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
  function validateConfirm() {
    if(!formState.passwordConfirm){
      setFormError({
        ...formError,
        passwordConfirm: "Confirm Password is required",
        submit: false,
      })
    }else if(formState.password !== formState.passwordConfirm){
      setFormError({
        ...formError,
        passwordConfirm: "Confirm Password does not match",
        submit: false,
      })
    }else{
      setFormError({
        ...formError,
        passwordConfirm: "",
        submit: true,
      })
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen container gap-10 mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <CalendarCheck2 className="size-6 text-blue-700" /> Task Master
      </h1>
      <form
        action={formAction}
        className="flex flex-col gap-2 items-center p-10 rounded-md w-11/12 sm:w-2/3 border border-gray-100  lg:w-1/3 shadow-lg"
      >
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-3xl font-bold text-gray-800">Set New Password</h1>
          <p className="text-gray-500">
            Create a new password to get back into your account.
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
          <label htmlFor="password">Password</label>
          <div className="flex justify-between items-center relative">
            <Lock className="size-5 text-gray-500 absolute left-2" />
            <input
              id="password"
              name="password"
              type={showPassword.password ? "text" : "password"}
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
            {showPassword.password ? (
              <EyeClosed
                className="size-5 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    password: !showPassword.password,
                  })
                }
              />
            ) : (
              <Eye
                className="size-5 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    password: !showPassword.password,
                  })
                }
              />
            )}
          </div>
          <p
            className={`text-red-500 ${formError.password ? "" : "opacity-0"}`}
          >
            {formError.password ? formError.password : "placeholder"}
          </p>
        </div>
        <div className="w-full">
          <label htmlFor="password">Confirm Password</label>
          <div className="flex justify-between items-center relative">
            <Lock className="size-5 text-gray-500 absolute left-2" />
            <input
              id="ConfirmPassword"
              name="ConfirmPassword"
              type={showPassword.confirm ? "text" : "password"}
              placeholder="Confirm Password"
              className={`w-full px-8 py-2 border border-gray-300 rounded-md outline-none ${
                formError.passwordConfirm && `border-red-500`
              }`}
              value={formState.passwordConfirm}
              onChange={(e) =>
                setFormState({ ...formState, passwordConfirm: e.target.value })
              }
              onBlur={validateConfirm}
            />
            {showPassword.confirm ? (
              <EyeClosed
                className="size-5 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    confirm: !showPassword.confirm,
                  })
                }
              />
            ) : (
              <Eye
                className="size-5 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    confirm: !showPassword.confirm,
                  })
                }
              />
            )}
          </div>
          <p
            className={`text-red-500 ${
              formError.passwordConfirm ? "" : "opacity-0"
            }`}
          >
            {formError.passwordConfirm
              ? formError.passwordConfirm
              : "placeholder"}
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
            "Set New Password"
          )}
        </button>
      </form>
    </div>
  );
}
