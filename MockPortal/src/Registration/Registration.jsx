import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Registration = () => {
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePasswords(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validatePasswords(password, e.target.value);
  };

  const validatePasswords = (pass, confirmPass) => {
    if (pass && confirmPass && pass !== confirmPass) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  return (
    <>
      <div className="font-inter text-center text-2xl mt-20">
        <h2 className="mb-10 font-bold">MockPortal</h2>
        <h1>Join the Decentralized Grid</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mt-10 max-w-md mx-auto">
        <label className="block text-gray-700 mb-2 mt-2 font-semibold">
          First Name
        </label>
        <input
          type="text"
          placeholder="Enter first name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <label className="block text-gray-700 mb-2 mt-2 font-semibold">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Enter last name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <label className="block text-gray-700 mb-2 mt-2 font-semibold">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter email address"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <label className="block text-gray-700 mb-2 mt-2 font-semibold">
          Create Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <VisibilityOff fontSize="small" />
            ) : (
              <Visibility fontSize="small" />
            )}
          </button>
        </div>

        <label className="block text-gray-700 mb-2 mt-2 font-semibold">
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={`w-full p-3 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              passwordError ? "border-red-500" : "border-gray-300"
            }`}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <VisibilityOff fontSize="small" />
            ) : (
              <Visibility fontSize="small" />
            )}
          </button>
        </div>
        {passwordError && (
          <p className="text-red-500 text-sm mt-1">{passwordError}</p>
        )}

        <div className="flex items-center mt-4 mb-4">
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <span className="ml-2">
            I agree to the{" "}
            <span className="text-red-600 underline">Terms & Conditions</span>{" "}
            and <span className="text-red-600 underline">Privacy Policy</span>
          </span>
        </div>

        <button
          className="w-full bg-gray-200 text-white py-3 px-4 rounded-md cursor-pointer hover:bg-blue-700 transition-colors"
          disabled={passwordError || !password || !confirmPassword}
          onClick={() => {
            if (!checked) {
              alert("Please agree to the terms and conditions.");
            } else {
              alert("Registration successful!");
            }
          }}
        >
          <h1 className="font-semibold">Join Now</h1>
        </button>
      </div>
    </>
  );
};

export default Registration;
