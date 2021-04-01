import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../base.js";

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div className="max-w-lg mx-auto mt-8">
            <form onSubmit={handleSignUp} class="flex flex-col pt-3 md:pt-8">
                <div class="flex flex-col pt-4">
                    <label for="email" class="text-lg">Email</label>
                    <input type="email" name="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>

                <div class="flex flex-col pt-4">
                    <label for="password" class="text-lg">Password</label>
                    <input type="password" name="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                {/* TODO add password confirm */}
                {/* <div class="flex flex-col pt-4">
                    <label for="confirmPassword" class="text-lg">Confirm password</label>
                    <input type="password" id="confirmPassword" placeholder="Confirm password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div> */}
                <input type="submit" value="Sign up" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"></input>
            </form>
        </div>
    );
};

export default withRouter(SignUp);