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
            <form onSubmit={handleSignUp} className="flex flex-col pt-3 md:pt-8">
                <div className="flex flex-col pt-4">
                    <label for="email" className="text-lg">Email</label>
                    <input type="email" name="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>

                <div className="flex flex-col pt-4">
                    <label for="password" className="text-lg">Password</label>
                    <input type="password" name="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div>
                {/* TODO add password confirm */}
                {/* <div className="flex flex-col pt-4">
                    <label for="confirmPassword" className="text-lg">Confirm password</label>
                    <input type="password" id="confirmPassword" placeholder="Confirm password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"></input>
                </div> */}
                <input type="submit" value="Sign up" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"></input>
            </form>
        </div>
    );
};

export default withRouter(SignUp);