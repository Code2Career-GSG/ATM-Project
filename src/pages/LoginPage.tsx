

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { setUserData } from "../store/store";

import "./LoginPage.css";

interface User {
  id: string;
  user_name: string;
  first_name: string;
  pin: string;
  birthday: string;
}

export const LoginPage = () =>  {
 
  //State 
  
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setLogin } = useAuth();
const dispatch = useDispatch();

   const navigate = useNavigate();
  


  
  // Login 


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");



    if (!username.trim() || !pin.trim()) {
      setError("please enter user name and PIN");
      return;
    }

    setLoading(true);

    try {
     
      const response = await fetch("https://690a2aaa1a446bb9cc21a097.mockapi.io/users");
      if (!response.ok) throw new Error("API Error");
const users = await response.json();


    
      const user = users.find(
        (u:User) => u.user_name.toLowerCase()===username.trim().toLowerCase()&&u.pin===pin.trim()
      );

      if (user) {
      
  dispatch(setUserData(user));    
  setLogin(true);     
      
        toast.success(
          ` Welcome back, ${user.first_name || user.user_name}!`,
          { autoClose: 1600 }
        );

        

        setTimeout(() => {
          navigate("/dashboard");
        }, 700);
      } else {
       
        setError("user name or PIN is incorrect");
        toast.error( "user name or PIN is incorrect", { autoClose: 2500 });
      }
    } catch (err) {
      console.error(err);
      setError(" We were unable to connect to the API. Please try again later.");
      toast.error("API connection failed", { autoClose: 2500 });
    } finally {
      setLoading(false);
    }
  };


  
  // jsx
  

  return (
    <div className="login-container">
      <h2 className="title">Login</h2>
      <p className="login-subtitle">Let's get you back to your account!</p>
      <form onSubmit={handleLogin} className="login-form">
        <input
        name="user_name"
          type="text"
          placeholder="user name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
        name="password"
          type="password"
          placeholder=" Password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Checking ..." : "Login"}
        </button>
        {error && <p className="error">{error}</p>}
      </form>

       


    </div>
  );
  };


