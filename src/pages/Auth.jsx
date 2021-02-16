import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Auth.css";
import axios from "axios";
import Brand from "../components/Brand";
import routes from '../routes';

const Auth = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(true);
  const [state, setState] = useState(true);

  let cancelation = axios.CancelToken.source();

  const inputDecorator = () => {
    var toggleInputContainer = function (input) {
      if (input.value != "") {
        input.classList.add("filled");
      } else {
        input.classList.remove("filled");
      }
    };

    var labels = document.querySelectorAll(".label");
    for (var i = 0; i < labels.length; i++) {
      labels[i].addEventListener("click", function () {
        this.previousElementSibling.focus();
      });
    }

    var inputs = document.getElementsByClassName("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("keyup", function () {
        toggleInputContainer(this);
      });
      toggleInputContainer(inputs[i]);
    }
  };

  const signInHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      let response = await axios.post(
        `${routes.baseUrl}/login`,
        {
          username,
          password,
        },
        { cancelToken: cancelation.token }
      );
    } catch (e) {
      setValid(false);
      setPassword('');
      console.error(e);
    }
    setLoading(false);
  };

  const registerHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      let response = await axios.post(
        `${routes.baseUrl}/register`,
        {
          username: username,
          password: password,
          nama_penumpang: name,
        },
        { cancelToken: cancelation.token }
      );
    } catch (e) {
      setValid(false);
      console.error(e);
      setPassword('');
    }
    setLoading(false);
  };

  useEffect(() => {
    inputDecorator();

    return () => {
      cancelation.cancel();
    }
  }, [state]);

  return (
    <div className="bg-image-login">
      <div className="container mx-auto relative h-screen flex items-center">
        <a
          href=""
          className="absolute top-16 left-2/4 transform -translate-y-2/4 md -translate-x-2/4 text-4xl brand"
        >
          <Brand />
        </a>
        <motion.div
          layout
          className="p-10 py-16 pb-12 bg-white w-full ml-0 md:mx-auto md:max-w-sm lg:ml-20 rounded-3xl shadow-box relative"
        >
          <motion.div layout>
            {loading && (
              <div className="w-full z-50 absolute h-full bg-black bg-opacity-20 top-0 left-0 rounded-3xl flex justify-center items-center transition-all duration-500">
                <div className="lds-ellipsis text-center">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            )}
            <h1 className="text-4xl font-black mb-12 text-center">
              {state ? "Sign In" : "Register"}
            </h1>
            <form
              onSubmit={(e) => (state ? signInHandler(e) : registerHandler(e))}
            >
              <AnimatePresence presenceAffectsLayout>
                {!state && (
                  <motion.div
                    className="mb-4 relative"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    exit={{ x: -100, opacity: 0 }}
                  >
                    <input
                      className={
                        "input border appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-black focus:outline-none active:outline-none active:border-black " +
                        (valid ? "border-gray-400" : "border-red-500 filled")
                      }
                      id="name"
                      type="text"
                      autoComplete="none"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoFocus
                    />
                    <label
                      htmlFor="name"
                      className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base cursor-text"
                    >
                      Name
                    </label>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="mb-4 relative">
                <input
                  className={
                    "input border appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-black focus:outline-none active:outline-none active:border-black " +
                    (valid ? "border-gray-400" : "border-red-500 filled")
                  }
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  autoComplete="none"
                  autoFocus
                />
                <label
                  htmlFor="username"
                  className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base cursor-text"
                >
                  Username
                </label>
              </div>
              <div className="mb-8 relative">
                <input
                  className={
                    "input border appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-black focus:outline-none active:outline-none active:border-black " +
                    (valid ? "border-gray-400" : "border-red-500")
                  }
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
                <label
                  htmlFor="password"
                  className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base cursor-text"
                >
                  Password
                </label>
              </div>
              <div className="text-center">
                <button className="bg-black shadow-sm hover:bg-blue-dark text-white font-bold py-3 px-6 rounded focus:outline-none">
                  {state ? "SIGN IN" : "SUBMIT"}
                </button>
              </div>
            </form>
            <div className="text-center mt-7">
              <a
                href=""
                className="font-light"
                onClick={(e) => {
                  e.preventDefault();
                  setState(!state);
                }}
              >
                {state
                  ? "Don't have an account ? "
                  : "Already have an account ? "}{" "}
                <span className="font-bold">
                  {state ? "Sign Up" : "Sign In"}
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
