import {React, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import background from '../assets/amafor.jpg';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";



const Login = () => {


  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
     
      <div className="w-[420px] bg-transparent border border-solid border-[rgba(255,255,255,0.3)] p-8 rounded-3xl shadow-lg backdrop-blur-lg">
        <h1 className="text-center text-white text-5xl font-bold mb-5">KADUKAL</h1>
    
        <h1 className="mt-6 text-center text-3xl font-extrabold text-white mb-8">LogIn</h1>
        

        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
             
              className="w-full h-12 bg-transparent border rounded-md px-2 text-white text-sm border-gray-300 placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <i className="absolute left-4 top-1/2 transform -translate-y-1/2 bx bxs-user text-white"></i>
          </div>

          <div className="relative">
            <input
            type={visible ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full h-12 bg-transparent border border-gray-300 rounded-md px-2 text-white text-sm placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
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

            <i className="absolute left-4 top-1/2 transform -translate-y-1/2 bx bxs-lock-alt text-white"></i>
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center text-sm text-white">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-sm text-white underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Login
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-white">
          Don't have an account? <Link to="/signup" className="text-blue-400 underline">Sign-Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
