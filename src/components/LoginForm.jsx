import { useState } from "react";
import {
  findUserForLogin,
  publicUser,
  saveRegisteredUser,
  userExists,
} from "../lib/users";

function makeUserId(text) {
  return text.trim().toLowerCase().replaceAll(" ", "-");
}

function LoginForm({ currentUser, onLogin, onLogout }) {
  const [mode, setMode] = useState("login");
  const [loginText, setLoginText] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const foundUser = findUserForLogin(loginText, password);

    if (!foundUser) {
      setError("Wrong login or password.");
      return;
    }

    setError("");
    onLogin(publicUser(foundUser));
  }

  function handleRegister(e) {
    e.preventDefault();

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const userId = makeUserId(username);

    if (!cleanName || !cleanEmail || !userId || !registerPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (registerPassword.length < 4) {
      setError("Password must be at least 4 characters.");
      return;
    }

    if (userExists(userId, cleanEmail)) {
      setError("This email or username already exists.");
      return;
    }

    const newUser = {
      id: userId,
      name: cleanName,
      email: cleanEmail,
      password: registerPassword,
    };

    saveRegisteredUser(newUser);
    setError("");
    onLogin(publicUser(newUser));
  }

  if (currentUser) {
    return (
      <main className="mx-auto max-w-[520px] px-4 py-10 sm:px-6 sm:py-14">
        <section className="border border-gray-200 p-5 sm:p-8">
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="mt-4 text-gray-600">
            Logged in as <span className="font-bold text-black">{currentUser.name}</span>
          </p>
          <p className="mt-1 text-sm text-gray-500">{currentUser.email}</p>

          <p className="mt-6 rounded bg-lime-50 p-4 text-sm text-lime-800">
            This profile keeps its own cart.
          </p>

          <button
            type="button"
            onClick={onLogout}
            className="mt-8 h-12 w-full rounded bg-black font-bold text-white hover:bg-gray-800"
          >
            Logout
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-[520px] px-4 py-10 sm:px-6 sm:py-14">
      <section className="border border-gray-200 p-5 sm:p-8">
        <div className="mb-8 grid grid-cols-2 rounded border border-gray-200 p-1">
          <button
            type="button"
            onClick={() => {
              setMode("login");
              setError("");
            }}
            className={`h-10 rounded font-bold ${mode === "login" ? "bg-black text-white" : "text-gray-500"}`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("register");
              setError("");
            }}
            className={`h-10 rounded font-bold ${mode === "register" ? "bg-black text-white" : "text-gray-500"}`}
          >
            Register
          </button>
        </div>

        {mode === "login" ? (
          <>
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="mt-3 text-sm text-gray-500">
              Demo accounts are stored in users.json. New accounts are saved in this browser.
            </p>

            <form onSubmit={handleLogin} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block font-bold" htmlFor="login">
                  Email or username
                </label>
                <input
                  id="login"
                  value={loginText}
                  onChange={(e) => setLoginText(e.target.value)}
                  className="h-12 w-full rounded border border-gray-300 px-4 outline-none focus:border-lime-500"
                  placeholder="amina@mail.com"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 w-full rounded border border-gray-300 px-4 outline-none focus:border-lime-500"
                  type="password"
                  placeholder="12345"
                />
              </div>

              {error && (
                <p className="rounded bg-red-50 p-3 text-sm font-bold text-red-500">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="h-12 w-full rounded bg-lime-500 font-bold text-white hover:bg-lime-600"
              >
                Login
              </button>
            </form>

            <div className="mt-8 border-t border-gray-200 pt-5 text-sm text-gray-500">
              <p className="font-bold text-gray-700">Demo users:</p>
              <p className="mt-2">amina@mail.com / 12345</p>
              <p>student@mail.com / project</p>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold">Create Account</h1>
            <p className="mt-3 text-sm text-gray-500">
              Your new account and cart will be saved in this browser.
            </p>

            <form onSubmit={handleRegister} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block font-bold" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 w-full rounded border border-gray-300 px-4 outline-none focus:border-lime-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 w-full rounded border border-gray-300 px-4 outline-none focus:border-lime-500"
                  placeholder="you@mail.com"
                  type="email"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-12 w-full rounded border border-gray-300 px-4 outline-none focus:border-lime-500"
                  placeholder="your-login"
                />
              </div>

              <div>
                <label className="mb-2 block font-bold" htmlFor="register-password">
                  Password
                </label>
                <input
                  id="register-password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  className="h-12 w-full rounded border border-gray-300 px-4 outline-none focus:border-lime-500"
                  type="password"
                  placeholder="At least 4 characters"
                />
              </div>

              {error && (
                <p className="rounded bg-red-50 p-3 text-sm font-bold text-red-500">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="h-12 w-full rounded bg-lime-500 font-bold text-white hover:bg-lime-600"
              >
                Create Account
              </button>
            </form>
          </>
        )}
      </section>
    </main>
  );
}

export default LoginForm;
