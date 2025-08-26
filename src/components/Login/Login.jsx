
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}loginAdmin`,
        formData
      );

      toast.success(`🎉 Welcome back, ${response.data.data.user.fullName}!`, {
        duration: 3000,
        position: "top-right",
      });

      setTimeout(() => {
        navigate("/adminDashboard");
      }, 1500);
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "❌ Invalid email or password. Please try again.",
        {
          duration: 4000,
          position: "top-right",
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50">
      <Toaster /> {/* Toast container */}
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Admin Log-in
        </a>
        <div className="w-full  rounded-lg shadow  sm:max-w-md xl:p-0    ">
          <div className="p-6 space-y-4 sm:p-8 bg-blue-100 border border-blue-200">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:   text-gray-900">
              Sign in to your account
            </h1>
            <form className="space-y-4 " onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="your-Email@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500    text-gray-900 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an admin account yet?{" "}
                <Link
                  className="font-medium text-primary-600 hover:underline text-blue-400"
                  to="/Sign_up"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
