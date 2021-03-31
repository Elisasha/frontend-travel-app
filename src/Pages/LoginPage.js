import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../base.js";
import { AuthContext } from "../Auth.js";
import { signInWithGoogle } from '../base.js';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/trips" />;
  }

  return (
    <div class="w-full flex flex-wrap">
      <div class="lg:w-1/2 shadow-2xl hidden lg:block md:mx-auto">
        <img class="object-cover w-full h-screen " src="https://images.unsplash.com/photo-1539639087565-41c59f40f3d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"></img>
      </div>
      <div class="w-full lg:w-1/2 flex flex-col">
        <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p class="text-center text-3xl">Welcome.</p>
          <form onSubmit={handleLogin} class="flex flex-col pt-3 md:pt-8">
            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg">Email</label>
              <input type="email" id="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"></input>
            </div>

            <div class="flex flex-col pt-4">
              <label for="password" class="text-lg">Password</label>
              <input type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"></input>
            </div>

            <input type="submit" value="Log In" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"></input>
          </form>
          <button className="login-provider-button mt-8 border border-gray-900 " onClick={signInWithGoogle}>
            <div className="flex login-button py-1 items-center justify-center">
              <img className="h-8 w-8 mx-1" src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon" />
              <span> Continue with Google</span>
            </div>
          </button>

          <div class="text-center pt-12 pb-12">
            <p>Don't have an account? <a href="/signup" class="underline font-semibold">Register here.</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);