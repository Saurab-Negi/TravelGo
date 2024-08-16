import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (input.email === loggeduser?.email && input.password === loggeduser?.password) {
      localStorage.setItem("loggedIn", true);
      navigate("/");
      setOrderPopup(false)
    } else {
      alert("Wrong Email or Password");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    setIsLogin(true); // Switch to login form after successful registration
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[400px]">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-black/70">
                {isLogin ? "Log in" : "Sign Up"}
              </h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setOrderPopup(false)}
              />
            </div>
            <div className="flex min-h-full flex-col justify-center py-6">
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                  className="space-y-6"
                  onSubmit={isLogin ? handleLogin : handleRegister}
                >
                  {!isLogin && (
                    <div>
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Username
                      </label>
                      <div className="mt-2">
                        <input
                          id="username"
                          name="username"
                          value={input.username}
                          onChange={(e) =>
                            setInput({ ...input, [e.target.name]: e.target.value })
                          }
                          type="text"
                          required
                          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        value={input.email}
                        onChange={(e) =>
                          setInput({ ...input, [e.target.name]: e.target.value })
                        }
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        value={input.password}
                        onChange={(e) =>
                          setInput({ ...input, [e.target.name]: e.target.value })
                        }
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {isLogin ? "Log in" : "Sign Up"}
                    </button>
                  </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                  {isLogin ? "Create a new account?" : "Already have an account?"}
                  <button
                    className="font-semibold leading-6 text-red-400 ml-2"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? "Register here" : "Login here"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
