import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Alert from "@mui/material/Alert";

import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState(null);

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/login");

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Simulate credential check
    if (
      formData.password !== "correctpassword" ||
      formData.confirmPassword !== "correctpassword"
    ) {
      setAlert(
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="warning"
          className="mb-4"
        >
          Wrong Password...
        </Alert>
      );
      return;
    }

    // If everything is correct
    setAlert(
      <Alert
        icon={<CheckIcon fontSize="inherit" />}
        severity="success"
        className="mb-4"
      >
        Password Reset...
      </Alert>
    );

    // Navigate after showing the success message
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="font-inter text-center text-2xl mt-20">
              <h2 className="mb-10 font-bold">MockPortal</h2>
            </div>

            {/* Title */}
            <h2 className="text-3xl text-center font-bold text-gray-900 mb-2">
              Set New Password
            </h2>
            <p className="text-gray-600 text-center">Enter your new password</p>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-8 space-y-6"
          >
            {alert}
            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  className={`w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${
                    errors.password
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field*/}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm password"
                  className={`w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${
                    errors.confirmPassword
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 cursor-pointer"
            >
              Confirm Password
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-4">
        <div className="text-center">
          <p className="text-sm text-gray-600">© 2025. All Right Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default PasswordReset;
