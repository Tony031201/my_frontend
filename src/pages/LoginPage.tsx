import { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(username);

      if (response && response.id) {
        
        alert(`Sign-in successful! ${response.username}`);
        localStorage.setItem('userId', response.id);
        localStorage.setItem('sessionId', response.username);
        navigate("/chat");
      } else {
        setErrors("Sign-in failed. Please try again.");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">登录</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="username"
            placeholder="Username"
            className="w-full p-2 border rounded mb-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;