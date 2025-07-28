import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Registration = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [alert, setAlert] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password") {
      validatePasswords(value, formData.confirmPassword);
    } else if (name === "confirmPassword") {
      validatePasswords(formData.password, value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checked) {
      setAlert(
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="warning"
          className="mb-4"
        >
          Please agree to the Terms & Conditions and Privacy Policy.
        </Alert>
      );
      return;
    }

    if (passwordError || !formData.password || !formData.confirmPassword) {
      setAlert(
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="warning"
          className="mb-4"
        >
          Please fix all errors before submitting.
        </Alert>
      );
      return;
    }

    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");

    const existingUser = users.find((user) => user.email === formData.email);
    if (existingUser) {
      setAlert(
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="warning"
          className="mb-4"
        >
          An account with this email already exists.
        </Alert>
      );
      return;
    }

    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    users.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(users));

    setAlert(
      <Alert
        icon={<CheckIcon fontSize="inherit" />}
        severity="success"
        className="mb-4"
      >
        Registration successful! You can now login with your credentials.
      </Alert>
    );

    setTimeout(() => {
      navigate("/usertype");
    }, 2000);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
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
        <form onSubmit={handleSubmit}>
          {alert}
          <label className="block text-gray-700 mb-3 mt-3 font-semibold">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter first name"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <label className="block text-gray-700 mb-3 mt-3 font-semibold">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter last name"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <label className="block text-gray-700 mb-2 mt-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email address"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <label className="block text-gray-700 mb-3 mt-3 font-semibold">
            Create Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              required
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

          <label className="block text-gray-700 mb-3 mt-3 font-semibold">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm password"
              required
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
            type="submit"
            className="w-full bg-gray-200 mt-10 text-white py-3 px-4 rounded-md cursor-pointer hover:bg-blue-700 transition-colors"
            disabled={
              passwordError || !formData.password || !formData.confirmPassword
            }
          >
            <h1 className="font-semibold">Join Now</h1>
          </button>
        </form>
      </div>

      <footer className="bg-gray-100 text-center py-4 mt-10">
        <p> © 2025. All Right Reserved</p>
      </footer>
    </>
  );
};

export default Registration;
