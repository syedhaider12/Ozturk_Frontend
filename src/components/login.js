import React, { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
const[error ,setError]=useState({});
const[resError ,setResError]=useState({});
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
    console.log(name, value);
  }
  const handleSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();
    setError(validate(input));
    if (Object.keys(error).length === 0) {
      const data = {
        email: input.email,
        password: input.password,
      };

      axios
        .post('https://ozturkbackend-production.up.railway.app/admin/get', data,{
          headers: {
              
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }
          })
        .then((res) => {
         if(res.status===200){

           localStorage.setItem("token", res.data.token);
           console.log(res.data.token)
           navigate("/dashboard");
          }
          
        })
        .catch((err) => {
          setResError(err.response.data.error);
        });
       
    }
  }
    
  const validate = (values) => {
    const error = {};
    if (!values.email) {
      error.email = "Email is required";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-[400px] px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-center">Admin Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={input.email}
                  onChange={handleInput}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                  <p className="text-red-600"> {error.email}</p>
              </div>
              <div className="mt-4">
                <label className="block" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={input.password}
                  onChange={handleInput}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                 <p className="text-red-600"> {error.password}</p>
                 <p className="text-red-600"> {resError.length>0 ? resError:null}</p>
                
              </div>
              <div className="flex items-baseline justify-center">
                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
