import { useState } from "react";
import { Link } from "react-router-dom";
// import useLogin from "../../hooks/useLogin";

const Login = () => {
	return (
	<div className="flex flex-col items-center justify-center min-w-[24rem] mx-auto">
    <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-opacity-10 backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
            Login
            <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
            <div>
                <label className="p-2">
                    <span className="text-base">Username</span>
                </label>
                <input type="text" placeholder="Enter username" className="w-full h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500" />
            </div>

            <div>
                <label>
                    <span className="text-base">Password</span>
                </label>
                <input type="password" placeholder="Enter Password" className="w-full h-10 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                {"Don't"} have an account?
            </a>

            <div>
                <button className="w-full h-10 bg-blue-500 text-white rounded-lg mt-2 hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600">
                    Login
                </button>
            </div>
        </form>
    </div>
</div>

	);
};
export default Login;