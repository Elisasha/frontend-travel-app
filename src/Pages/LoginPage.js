import { React } from "react";

export function LoginPage() {
  return (
    <div class="h-screen font-sans login bg-cover">
      <div className="container mx-auto h-full flex flex-1 justify-center">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form className="max-w-sm m-4 mt-20 p-10 bg-white bg-opacity-25 rounded shadow-xl">
              <p className="text-white font-medium text-center text-lg font-bold">
                LOGIN
              </p>
              <div className="">
                <label className="block text-sm text-white" for="email">
                  E-mail
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  aria-label="email"
                  required
                ></input>
              </div>
              <div className="mt-2">
                <label className="block  text-sm text-white">Password</label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  arial-label="password"
                  required
                ></input>
              </div>
              <div className="mt-4 items-center flex justify-between">
                <button
                  className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                  type="submit"
                >
                  Log in
                </button>
                <a
                  className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                  href="#"
                >
                  Forgot password ?
                </a>
              </div>
              <div className="text-center">
                <a className="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">
                  Create an account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
