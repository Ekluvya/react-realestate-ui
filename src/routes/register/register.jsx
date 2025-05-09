import React, { useState } from "react";
import Button from "../../components/Button"; // Adjusted import path
import Input from "../../components/Input"; // Adjusted import path
import Label from "../../components/Label"; // Adjusted import path
import { motion } from "framer-motion";
import logo from "../../../public/logo2.png";
import { Lock, Mail, KeyRound, User, ArrowRight } from "lucide-react";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // Inside your component
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // Removed: React.FormEvent
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    console.log({
      username: name,
      email: email,
      password: password,
    });
    // Simulate an API call
    try {
      //new Promise((resolve) => setTimeout(resolve, 1500));
      apiRequest
        .post(
          "/auth/register",
          {
            username: name,
            email: email,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function () {
          navigate("/login"); // ✅ redirect to login
        })
        .catch(function () {
          setError("Registration failed.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (err) {
      // Removed: : any
      console.log(err);
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
            className="mt-6 text-3xl font-extrabold text-white"
          >
            Create an account
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-center text-sm text-gray-300"
          >
            Register to get started.
          </motion.p>
        </div>
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="rounded-md shadow-sm space-y-6">
            <div>
              <Label htmlFor="name" className="sr-only">
                Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                />
              </div>
            </div>
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
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </Label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
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
                  Create Account
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform text-gray-900" />
                </>
              )}
            </Button>
          </motion.div>
        </motion.form>
        <div className="text-center">
          <a
            href="#/login" //  change this to your actual login route
            className="text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            Already have an account? Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
