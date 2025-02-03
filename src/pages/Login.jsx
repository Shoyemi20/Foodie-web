import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  // Initialize navigate
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      alert("Success!");
      
      // Navigate to homepage after successful login/signup
      navigate("/"); // Adjust the path to your homepage route
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-semibold text-center">{isRegistering ? "Sign Up" : "Sign In"}</h2>
        
        {/* Error message */}
        {error && <p className="text-red-500 text-center">{error}</p>}
        
        {/* Form */}
        <form onSubmit={handleAuth} className="mt-4">
          <input 
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Submit button styled with the Button component */}
          <button type="submit" className="w-full mt-4 p-2 px-6 py-1 border-2 border-brightColor hover:bg-brightColor hover:text-white rounded-full">
            {isRegistering ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {/* Toggle between Sign In / Sign Up */}
        <p className="text-center mt-4 text-sm">
          {isRegistering ? "Already have an account?" : "Don't have an account?"} 
          <span 
            className="px-1 py-1 border-1 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full cursor-pointer"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}

