import React from 'react';
import background from '../assets/amafor.jpg';


const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="w-[420px] bg-transparent border border-solid border-[rgba(255,255,255,0.3)] p-8 rounded-3xl shadow-lg backdrop-blur-lg">
        <h1 className="text-center text-white text-5xl font-bold mb-7.5">KADUKAL</h1>
        <h1 className="text-center text-white text-4xl font-bold mb-">Welcome Back</h1>
        <h1 className="text-center text-white text-2xl font-bold mb-8">Signup</h1>
        

        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
             
              className="w-full h-12 bg-transparent border border-[rgb(236,236,236)] rounded-2xl px-2 text-white text-sm placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <i className="absolute left-4 top-1/2 transform -translate-y-1/2 bx bxs-user text-white"></i>
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full h-12 bg-transparent border border-[rgb(255,255,255)] rounded-2xl px-2 text-white text-sm placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
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
            className="w-full h-12 bg-blue-500 text-white rounded-full text-sm font-bold">
            Login
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-white">
          Don't have an account? <a href="#" className="text-blue-400 underline">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
