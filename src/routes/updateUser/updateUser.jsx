import React, { useState, useContext, useEffect } from "react";
import Button from "../../components/Button"; // Adjust the path if necessary
import Input from "../../components/Input"; // Adjust the path if necessary
import Label from "../../components/Label"; // Adjust the path if necessary
import { motion } from "framer-motion";
import {
  User,
  Mail,
  KeyRound,
  CheckCircle,
  Loader2,
  ArrowRight,
} from "lucide-react"; // Added icons
import apiRequest from "../../lib/apiRequest"; // Adjust the path if necessary
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext"; // Adjust the path if necessary

const UpdateUser = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Consider how you want to handle this
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false); // Track update success
  const navigate = useNavigate();

  useEffect(() => {
    // Populate the form with the current user's data
    if (currentUser) {
      setUsername(currentUser.username || "");
      setEmail(currentUser.email || "");
      setAvatar(currentUser.avatar || "");
    }
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    setIsUpdated(false);

    const userData = {
      username: username,
      email: email,
      ...(password ? { password: password } : {}), // Include password only if it's provided
      avatar: avatar,
    };

    try {
      const response = await apiRequest.put(
        `/auth/user/${currentUser.id}`,
        userData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        console.log("User updated successfully", response.data);
        // Update the user context with the new data
        updateUser({ ...currentUser, ...response.data }); // Merge existing with updated
        setIsUpdated(true); // Set success state
        // Optionally, clear the password field after successful update
        setPassword("");
        // Navigate to profile page after successful update
        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      } else {
        setError("Failed to update user profile.");
      }
    } catch (err) {
      setError(err.message || "An error occurred while updating profile.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-[3_3_0%] items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-center text-3xl font-extrabold text-white"
          >
            Update Profile
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-center text-sm text-gray-300"
          >
            Modify your profile information below.
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
              <Label htmlFor="username" className="sr-only">
                Username
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-10 py-3 text-white placeholder-gray-400
                                        focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:z-10 sm:text-sm bg-gray-800 border border-gray-700"
                  placeholder="Username"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="sr-only">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-10 py-3 text-white placeholder-gray-400
                                        focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:z-10 sm:text-sm bg-gray-800 border border-gray-700"
                  placeholder="Email"
                  required
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-10 py-3 text-white placeholder-gray-400
                                        focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:z-10 sm:text-sm bg-gray-800 border border-gray-700"
                  placeholder="Password (Leave blank to keep current)"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="avatar" className="sr-only">
                Avatar URL
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="avatar"
                  name="avatar"
                  type="text"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-10 py-3 text-white placeholder-gray-400
                                        focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:z-10 sm:text-sm bg-gray-800 border border-gray-700"
                  placeholder="Avatar URL"
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
          {isUpdated && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center text-sm text-green-500 flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              Profile updated successfully!
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
                <span className="animate-spin flex items-center">
                  <Loader2 className="w-5 h-5 text-gray-900 mr-2" />
                  Updating...
                </span>
              ) : (
                <>
                  Update Profile
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform text-gray-900" />
                </>
              )}
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
};

export default UpdateUser;
