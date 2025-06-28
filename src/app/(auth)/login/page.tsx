import { signin, signup } from "../actions";
export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>
      <form>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        <button type="submit" formAction={signin}>
          Sign In
        </button>
        <button type="submit" formAction={signup}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
