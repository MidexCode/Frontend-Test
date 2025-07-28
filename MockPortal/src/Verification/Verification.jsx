import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  Wallet,
  Settings,
  Bell,
  HelpCircle,
  User,
  LogOut,
  Upload,
  ArrowLeft,
} from "lucide-react";

const Verification = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("dashboard");
  const sidebarItems = [
    {
      id: "dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
      active: true,
    },
    { id: "project", icon: Briefcase, label: "Project" },
    { id: "messages", icon: MessageSquare, label: "Messages" },
    { id: "wallet", icon: Wallet, label: "Wallet" },
    { id: "token", icon: Settings, label: "Token Management" },
  ];

  const LogoutPage = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full mx-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <LogOut className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Logging Out</h2>
          <p className="text-gray-600 mb-6">
            Are you sure you want to log out of your account?
          </p>
          <div className="space-y-3">
            <button
              onClick={() => alert("Redirecting to login...")}
              className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Yes, Log Out
            </button>
            <button
              onClick={() => setCurrentPage("dashboard")}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const FileUploadBox = () => (
    <div className="border-2 border-dashed border-orange-300 rounded-lg p-8 text-center bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer">
      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Upload className="w-6 h-6 text-orange-500" />
      </div>
      <p className="text-gray-600 mb-2">
        <span className="text-orange-500 cursor-pointer hover:underline font-medium">
          Click to upload
        </span>{" "}
        or drag and drop
      </p>
      <p className="text-sm text-gray-500">
        SVG, PNG, JPG or GIF (max. 800x400px)
      </p>
    </div>
  );

  const VerificationContent = () => (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="p-2 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <span className="text-orange-500 text-sm font-medium">
                Dashboard
              </span>
              <h1 className="text-2xl font-bold text-gray-900">
                Account Verification
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg relative transition-colors">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="bg-white shadow-sm px-8 py-6 max-w-4xl mx-auto space-y-8">
          {/* KYC Verification Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              KYC Verification
            </h2>

            {/* CAC Incorporation Certificate */}
            <div className="mb-8">
              <h3 className="text-base font-medium text-gray-700 mb-4">
                CAC Incorporation Certificate
              </h3>
              <FileUploadBox />
            </div>

            {/* TIN Number */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                TIN Number
              </label>
              <input
                type="text"
                placeholder="Enter TIN number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
              />
            </div>

            {/* TIN Certificate */}
            <div className="mb-8">
              <h3 className="text-base font-medium text-gray-700 mb-4">
                TIN Certificate
              </h3>
              <FileUploadBox />
            </div>

            {/* License Number */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                License Number (DPR/NUPRC/NERC)
              </label>
              <input
                type="text"
                placeholder="Enter License number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
              />
            </div>

            {/* DPR/NUPRC/NERC License */}
            <div className="mb-8">
              <h3 className="text-base font-medium text-gray-700 mb-4">
                DPR/NUPRC/NERC License
              </h3>
              <FileUploadBox />
            </div>

            {/* EIA Section */}
            <div className="mb-8">
              <h3 className="text-base font-medium text-gray-700 mb-4">
                EIA (Environmental Impact Assessment)
              </h3>
              <FileUploadBox />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Submit Verification
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  const handleLogout = () => {
    setCurrentPage("logout");
  };

  if (currentPage === "logout") {
    return <LogoutPage />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-slate-800 text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-red-600 rounded transform rotate-12"></div>
            </div>
            <span className="text-2xl font-bold text-red-400">Logo</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setCurrentPage(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      currentPage === item.id
                        ? "bg-slate-700 text-white"
                        : "text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <span className="font-medium">Matthew</span>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Log Out</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}

      <VerificationContent />
    </div>
  );
};

export default Verification;
