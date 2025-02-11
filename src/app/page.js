"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons

export default function Home() {
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {/* Logo Container */}
      <div className="mt-10 h-[108px] w-[320px] m-auto sm:w-[280px] md:w-[300px] lg:w-[320px]">
        <img src="./logo.png" width={"100%"} height={"100%"} alt="Logo" />
      </div>

      {/* Login Form Container */}
      <div className="w-full px-4 sm:w-[400px] md:w-[480px] lg:w-[512px] m-auto">
        {/* Login Title */}
        <p className="mb-[20px] font-black self-center text-[#141414] block flex-[0_1] font-helvetica text-[24px] sm:text-[28px] md:text-[32px] font-normal font-bold tracking-[.05em] leading-[37px] relative text-center">
          Login
        </p>

        {/* Username Input */}
        <div className="relative mb-2">
          <input
            id="username"
            className="mb-[20px] block w-full p-2 pt-5 border border-gray-300 rounded bg-[#eff3f6] border-none outline-none"
            onFocus={() => setIsUsernameFocused(true)}
            onBlur={(e) => !e.target.value && setIsUsernameFocused(false)}
            placeholder=" "
          />
          <label
            htmlFor="username"
            className={`absolute left-2 transition-all duration-300 ${
              isUsernameFocused
                ? "top-2 text-xs text-black-500"
                : "top-4 text-sm text-black-400"
            }`}
          >
            Username*
          </label>
        </div>

        {/* Password Input */}
        <div className="relative mb-4">
          <input
            id="password"
            className="mb-[20px] block w-full p-2 pt-5 border border-gray-300 rounded bg-[#eff3f6] border-none outline-none"
            type={showPassword ? "text" : "password"} // Toggle between text and password type
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={(e) => !e.target.value && setIsPasswordFocused(false)}
            placeholder=" "
          />
          <label
            htmlFor="password"
            className={`absolute left-2 transition-all duration-300 ${
              isPasswordFocused
                ? "top-2 text-xs text-black-500"
                : "top-4 text-sm text-black-400"
            }`}
          >
            Password*
          </label>
          {/* Eye Icon */}
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        {/* Login Button */}
        <button className="mb-[20px] w-full font-bold bg-[#0071bc] text-white py-4 px-4 rounded hover:bg-[#0071bc] transition duration-300">
          Login
        </button>

        {/* Forgot Password Link */}
        <a className="mb-[40px] block text-left text-black-500 mt-2 underline text-base sm:text-lg" href="#">
          Forgot password?
        </a>

        {/* Sign Up Section */}
        <p className="text-left mt-4 text-base sm:text-lg">Don’t have an acnt?</p>
        <button className="mb-[30px] font-bold w-full bg-[transparent] border border-[#0071bc] hover:text-white text-[#00818d] py-4 px-4 rounded mt-2 hover:bg-[#0071bc] transition duration-300">
         Register
        </button>

        {/* Mobile App Section */}
        <div className="mt-6 mb-10">
          <p className="text-left text-base sm:text-lg font-helvetica font-bold tracking-wide">Get our mobile app</p>
          <div className="flex gap-4 mt-4">
            <div className="flex-1">
              <img src="./appstore-image.png" className="w-full h-auto" alt="App Store" />
            </div>
            <div className="flex-1">
              <img src="./googlplay-image.png" className="w-full h-auto" alt="Google Play" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}