import { React } from "react";
import "./index.css";

function MainPage() {
    return (
        // <!-- This is an example component -->
        <div class="h-screen font-sans login bg-cover">
            {/* <h1 class="block text-center">START YOUR JOURNEY TODAY</h1> */}
            {/* <div class="container mx-auto h-full flex flex-1 justify-center items-center"> */}
            <div class="container mx-auto h-full flex flex-1 justify-center">
                <div class="w-full max-w-lg">
                    <div class="leading-loose">
                        <form class="max-w-sm m-4 mt-20 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                            <p class="text-white font-medium text-center text-lg font-bold">LOGIN</p>
                            <div class="">
                                <label class="block text-sm text-white" for="email">E-mail</label>
                                <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="email" id="email" placeholder="Enter email" aria-label="email" required>
                                </input>
                            </div>
                            <div class="mt-2">
                                <label class="block  text-sm text-white">Password</label>
                                <input class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                                    type="password" id="password" placeholder="Enter password" arial-label="password" required>
                                </input>
                            </div>
                            <div class="mt-4 items-center flex justify-between">
                                <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                                    type="submit">Log in</button>
                                <a class="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                                    href="#">Forgot password ?</a>
                            </div>
                            <div class="text-center">
                                <a class="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">
                                    Create an account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
