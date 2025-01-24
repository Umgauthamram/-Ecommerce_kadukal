import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import ValidationFormObject from "./validation";
import background from '../assets/amafor.jpg';
import { IoIosRemoveCircle } from "react-icons/io";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [errors, setErrors] = useState({});


  const handleFileSubmit = (e) => {
    const file = e.target.files[0];
    if (file) {
      const filePath = URL.createObjectURL(file);
      console.log("File path:", filePath);
      setAvatar(file);
    }
  };


  const validateFields = () => {
    const nameError = ValidationFormObject.validteName(name);
    const emailError = ValidationFormObject.validteEmail(email);
    const passwordError = ValidationFormObject.validtePass(password);


    const newErrors = {};
    if (nameError !== true) newErrors.name = nameError;
    if (emailError !== true) newErrors.email = emailError;
    if (passwordError !== true) newErrors.password = passwordError;


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    if (!validateFields()) {
      return;
    }


    const newForm = new FormData();
    newForm.append("file", avatar);
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("password", password);


    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "any",
      },
    };


    axios.post("http://localhost:8000/api/v2/user/create-user", newForm, config).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  };


  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">

      </div>
      
        <div className="w-[420px] bg-transparent border border-solid border-[rgba(255,255,255,0.3)] p-8 rounded-3xl shadow-lg backdrop-blur-lg">

          <h1 className="text-center text-white text-5xl font-bold mb-5">KADUKAL</h1>
          <h2 className="text-center text-3xl font-extrabold text-white mb-10">
            Sign Up
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>

            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <div className="mt-2 flex items-center justify-center">
                <span className="h-20 w-20 overflow-hidden ">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (

                  
                      <label
                        htmlFor="file-input"
                        className="cursor-pointer"
                      >

                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 16 16" id="user">
                          <path fill="#FFFFFF" d="M3.893 2A2.896 2.896 0 0 0 1 4.893v5.712A2.897 2.897 0 0 0 3.893 13.5h4.353a3.252 3.252 0 0 0 2.996 1.992 3.254 3.254 0 0 0 3.25-3.25A3.25 3.25 0 0 0 12.5 9.248V4.893A2.896 2.896 0 0 0 9.607 2H3.893Zm0 .5h5.714A2.395 2.395 0 0 1 12 4.893v4.199a3.21 3.21 0 0 0-.758-.098 3.22 3.22 0 0 0-2.023.727 4.733 4.733 0 0 0-7.03 2.562 2.383 2.383 0 0 1-.689-1.676V4.893A2.395 2.395 0 0 1 3.893 2.5Zm2.841 1.525a2.245 2.245 0 0 0-2.242 2.243 2.242 2.242 0 1 0 2.242-2.242zm0 .5a1.742 1.742 0 1 1-1.742 1.742c0-.96.782-1.742 1.742-1.742zm-.033 4.967c.757 0 1.488.208 2.137.584a3.227 3.227 0 0 0-.846 2.166c0 .261.039.514.098.758H3.893c-.475 0-.916-.145-1.29-.385a4.239 4.239 0 0 1 4.098-3.123zm4.541 0a2.752 2.752 0 0 1 2.75 2.75 2.752 2.752 0 0 1-2.75 2.75 2.752 2.752 0 0 1-2.75-2.75 2.752 2.752 0 0 1 2.75-2.75zm.012 1.4L9.633 12.06l.293.406 1.08-.778v2.053h.5v-2.06l1.123.787.287-.408-1.662-1.166z"></path>
                        </svg>


                        <input
                          type="file"
                          name="avatar"
                          id="file-input"
                          accept=".jpg,.jpeg,.png"
                          onChange={handleFileSubmit}
                          className="sr-only "
                        />
                      </label>
                    


                  )}

                </span>

                {avatar ? (
                  <button
                    className=" mx-1 flex items-center justify-center border-gray-900 rounded-full shadow-sm text-sm font-medium"

                    onClick={() => {
                      setAvatar(null)
                    }}><IoIosRemoveCircle size={26} className="text-red-600 hover:text-red-800  " /></button>

                ) : ""}

              </div>
            </div>


            <div>
              <div className="mt-1 ">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full h-12 bg-transparent border border-[rgb(236,236,236)] rounded-2xl px-2
                     text-white text-sm placeholder-white focus:outline-none focus:ring-2 focus:ring-white ${errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm placeholder-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
            </div>


            <div>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full h-12 bg-transparent border border-[rgb(236,236,236)] rounded-2xl px-2 text-white text-sm
                     placeholder-white focus:outline-none focus:ring-2 focus:ring-white ${errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm placeholder-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>


            <div>

              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  placeholder=" New Password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full h-12 bg-transparent border border-[rgb(236,236,236)] rounded-2xl px-2 text-white text-sm
                     placeholder-white focus:outline-none focus:ring-2 focus:ring-white ${errors.password ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm placeholder-white focus:outline-none sm:text-sm`}
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-3 cursor-pointer text-white scale-105"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-3 cursor-pointer text-white scale-105 "
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Create a new account
              </button>
            </div>


            <div className="text-center mt-4 text-sm text-white">
              Already have an account?
              <Link to="/login" className="text-blue-400 underline pl-2">
                Log-In
              </Link>
            </div>
          </form>
        </div>
      
    </div>
  );
};


export default Signup;
