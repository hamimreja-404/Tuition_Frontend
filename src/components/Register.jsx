// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Register() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     secretPin: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_API_URL}registerAdmin`,
//         formData
//       );

//       toast.success("✅ Registration successful! Redirecting...");
//       setTimeout(() => {
//         navigate("/adminDashboard");
//       }, 1500);
//     } catch (error) {
//       if (error.response) {
//         toast.error(error.response.data.message || "Something went wrong");
//       }
//       if (error.response) {
//         // Our ApiError from backend
//         toast.error(error.response.data.message || "Something went wrong");
//         console.error("Backend error:", error.response.data);
//       } else if (error.request) {
//         // No response from server
//         toast.error("❌ Server not responding. Please try again later.");
//         console.error("Request error:", error.request);
//       } else {
//         // Any other error
//         toast.error("⚠️ Unexpected error: " + error.message);
//         console.error("Error:", error.message);
//       }
//     }
//   };

//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900  ">
//           Admin Registration
//         </h2>
//         <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border dark:border-gray-700">
//           <div className="p-6 space-y-6 sm:p-8">
//             <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl  ">
//               Create Your Admin Account
//             </h1>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Full Name */}
//               <div>
//                 <label
//                   htmlFor="fullName"
//                   className="block mb-2 text-sm font-medium text-gray-900  "
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   id="fullName"
//                   type="text"
//                   name="fullName"
//                   placeholder="Enter your full name"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   required
//                   className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block mb-2 text-sm font-medium text-gray-900  "
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   name="email"
//                   placeholder="example@email.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
//                 />
//               </div>

//               {/* Secret Pin */}
//               <div>
//                 <label
//                   htmlFor="secretPin"
//                   className="block mb-2 text-sm font-medium text-gray-900  "
//                 >
//                   Secret Pin
//                 </label>
//                 <input
//                   id="secretPin"
//                   type="number"
//                   name="secretPin"
//                   placeholder="Enter a 4-digit pin"
//                   value={formData.secretPin}
//                   onChange={handleChange}
//                   required
//                   className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
//                 />
//               </div>

//               {/* Password */}
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block mb-2 text-sm font-medium text-gray-900  "
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="••••••••"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
//                 />
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//               >
//                 Register
//               </button>

//               {/* Redirect to login */}
//               <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                 Already have an account?{" "}
//                 <Link
//                   className="font-medium text-blue-600 hover:underline dark:text-blue-400"
//                   to="/login"
//                 >
//                   Login here
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    secretPin: "",
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
      await axios.post(
        `${import.meta.env.VITE_API_URL}registerAdmin`,
        formData
      );

      toast.success("🎉 Registration successful! Redirecting...");
      setTimeout(() => {
        navigate("/adminDashboard");
      }, 1500);
    } catch (error) {
      if (error.response) {
        // Backend error (from ApiError)
        toast.error(error.response.data.message || "❌ Something went wrong");
        console.error("Backend error:", error.response.data);
      } else if (error.request) {
        // No response from server
        toast.error("⚠️ Server not responding. Please try again later.");
        console.error("Request error:", error.request);
      } else {
        // Any other error
        toast.error("⚡ Unexpected error: " + error.message);
        console.error("Error:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50">
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900 ">
          Admin Registration
        </h2>
        <div className="w-full bg-blue-100 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0  border border-blue-200">         
          <div className="p-6 space-y-6 sm:p-8">
            <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create Your Admin Account
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
                             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                             
                              "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
                             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                               
                              "
                />
              </div>

              {/* Secret Pin */}
              <div>
                <label
                  htmlFor="secretPin"
                  className="block mb-2 text-sm font-medium text-gray-900  "
                >
                  Secret Pin
                </label>
                <input
                  id="secretPin"
                  type="number"
                  name="secretPin"
                  placeholder="Enter a 4-digit pin"
                  value={formData.secretPin}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
                             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                               
                              "
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900  "
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
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
                             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                               
                              "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center bg-blue-600 text-white 
                           hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 
                           font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                ) : null}
                {loading ? "Registering..." : "Register"}
              </button>

              {/* Redirect to login */}
              <p className="text-sm font-light text-gray-500 ">
                Already have an account?{" "}
                <Link
                  className="font-medium text-blue-600 hover:underline "
                  to="/login"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
