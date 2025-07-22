import React, { useState } from "react";

const Login = ({ handelLogin }) => {
  // console.log(handelLogin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("Form submitted");
    handelLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className=" font-myFont6 text-2xl flex items-center justify-center h-screen w-screen">
      <div className="login-form p-10 rounded shadow-md border-2">
        <h1 className=" text-7xl mb-6 text-center">Login</h1>
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col space-y-20 "
        >
          <div className="mb-4 px-10 py-5 ">
            <label className="font-medium mb-2 text-2xl" htmlFor="email">
              Email :
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 mt-2 p-2 w-full rounded"
              type="email"
              id="email"
              required
            />
          </div>
          <div className="mb-4 px-10 py-5">
            <label className="font-medium mb-2 text-2xl" htmlFor="password">
              Password :
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 mt-2 p-2 w-full rounded"
              type="password"
              id="password"
              required
            />
          </div>
          <div>
            <button className="bg-blue-500 px-2 py-3 ml-10 text-white rounded-full hover:bg-blue-600">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
