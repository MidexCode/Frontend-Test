import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
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

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const registeredUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );

    const user = registeredUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (!user) {
      setAlert(
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="warning"
          className="mb-4"
        >
          Wrong Email or Password.
        </Alert>
      );
      return;
    }

    if (rememberMe) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        })
      );
    }

    setAlert(
      <Alert
        icon={<CheckIcon fontSize="inherit" />}
        severity="success"
        className="mb-4"
      >
        Login successful! Welcome back, {user.firstName}!
      </Alert>
    );

    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  const handleCreateAccount = () => {
    setAlert(
      <Alert
        icon={<CheckIcon fontSize="inherit" />}
        severity="info"
        className="mb-4"
      >
        Redirecting to registration page...
      </Alert>
    );
    setTimeout(() => navigate("/"), 500);
  };

  const handleForgotPassword = () => {
    setAlert(
      <Alert
        icon={<CheckIcon fontSize="inherit" />}
        severity="info"
        className="mb-4"
      >
        Redirecting to forgot password page...
      </Alert>
    );
    setTimeout(() => navigate("/passwordreset"), 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="font-inter text-center text-2xl mt-20">
              <h2 className="mb-10 font-bold">MockPortal</h2>
            </div>

            <h2 className="text-3xl text-center font-bold text-gray-900 mb-2">
              Sign in to your account
            </h2>
            <p className="text-gray-600 text-center">
              Access your platform dashboard
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-8 space-y-6"
          >
            {alert}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${
                  errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-orange-500 hover:text-orange-600 font-medium cursor-pointer"
              >
                Forgot your password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Sign In
            </button>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={handleCreateAccount}
                  className="text-orange-500 hover:text-orange-600 font-medium cursor-pointer"
                >
                  Create account
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>

      <footer className="bg-gray-100 py-4">
        <div className="text-center">
          <p className="text-sm text-gray-600">© 2025. All Right Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
