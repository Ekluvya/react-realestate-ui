import React, { useContext, useState } from "react";
import Button from "../../components/Button"; // Adjusted import path
import Input from "../../components/Input"; // Adjusted import path
import Label from "../../components/Label"; // Adjusted import path
import { cn } from "../../lib/utils"; // Adjusted import path
import { motion } from "framer-motion";
import logo from "../../../public/logo2.png";
import { Lock, Mail, KeyRound, ArrowRight } from "lucide-react";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    // Removed: React.FormEvent

    e.preventDefault();
    setError("");
    setIsLoading(true);
    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    // Simulate an API call
    try {
      const response = await apiRequest.post(
        // Use await
        "/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        console.log(response);

        const meResponse = await apiRequest.get("/auth/me"); // Await here too
        console.log("User logger");
        console.log(meResponse.data);
        updateUser(meResponse.data);
        navigate("/profile");
      }
    } catch (err) {
      // Removed: : any
      setError(err.message || "An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <a
            className="font-bold text-xl flex gap-2.5 items-center justify-center mb-6"
            href="/"
          >
            <img className="w-7" src={logo} alt="Company Logo" />
            <span className="md:hidden sm:[display:initial] text-white">
              YashEstate
            </span>
          </a>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-center text-3xl font-extrabold text-white"
          >
            Welcome back!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-center text-sm text-gray-300"
          >
            Log in to your account to continue.
          </motion.p>
        </div>
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <Label htmlFor="email-address" className="sr-only">
                Email address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-10 py-3 text-white placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:z-10 sm:text-sm bg-gray-800 border border-gray-700"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={cn(
                    "appearance-none rounded-md relative block w-full px-10 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:z-10 sm:text-sm bg-gray-800 border border-gray-700",
                    error && "border-2 border-red-500 focus:ring-red-500" // Apply error styles
                  )}
                  placeholder="Password"
                />
              </div>
            </div>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center text-sm text-red-500"
            >
              {error}
            </motion.p>
          )}

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-[#fece51] hover:bg-[#fdd868] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="animate-spin">
                  <Lock className="w-5 h-5 text-gray-900" />
                </span>
              ) : (
                <>
                  Log in
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform text-gray-900" />
                </>
              )}
            </Button>
          </motion.div>
        </motion.form>
        <div className="text-center">
          <a
            href="#/register"
            className="text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            New User? Click to Register!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
