import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function formHandler(e) {
    e.preventDefault();
    handleLogin();
    setEmail("");
    setPassword("");
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-zinc-800">
      <div className="border-2 border-emerald-600 p-2">
        <form
          action=""
          className="flex flex-col items-center justify-center gap-2"
          onSubmit={(e) => formHandler(e)}
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400 "
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
            required
          />
          <button className="border-2 bg-emerald-600 rounded-full py-3 px-5 text-xl">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
