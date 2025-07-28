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
  BarChart3,
  FileText,
  Plus,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Menu,
  X,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  // Logout Page Component
  const LogoutPage = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg max-w-md w-full">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <LogOut className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Logging Out
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Are you sure you want to log out of your account?
          </p>
          <div className="space-y-3">
            <button
              onClick={() => navigate("/login")}
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

  // Handle logout button click
  const handleLogout = () => {
    setCurrentPage("logout");
  };

  // Handle sidebar toggle
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle navigation click
  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setSidebarOpen(false);
  };

  // If on logout page, show logout component
  if (currentPage === "logout") {
    return <LogoutPage />;
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-80 bg-slate-800 text-white flex flex-col transform transition-transform duration-300 ease-in-out lg:transform-none ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="p-4 lg:p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-red-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 lg:w-6 lg:h-6 bg-red-600 rounded transform rotate-12"></div>
              </div>
              <span className="text-xl lg:text-2xl font-bold text-red-400">
                Logo
              </span>
            </div>
            {/* Close button for mobile */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4 lg:py-6 overflow-y-auto">
          <ul className="space-y-1 lg:space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg transition-colors ${
                      currentPage === item.id
                        ? "bg-slate-700 text-white"
                        : "text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                    <span className="font-medium text-sm lg:text-base">
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-slate-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 lg:w-5 lg:h-5" />
            </div>
            <span className="font-medium text-sm lg:text-base">Matthew</span>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-3 lg:px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
          >
            <LogOut className="w-3 h-3 lg:w-4 lg:h-4" />
            <span className="text-sm lg:text-base">Log Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <button
                onClick={toggleSidebar}
                className="lg:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg -ml-2"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Dashboard
                </h1>
                <p className="text-gray-600 mt-1 text-sm lg:text-base hidden sm:block">
                  Here is an overview of your activities
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-4">
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                <Bell className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                <HelpCircle className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          {/* KYC Alert */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 lg:p-6 mb-6 lg:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-800 text-sm lg:text-base">
                    Complete KYC
                  </h3>
                  <p className="text-yellow-700 text-sm lg:text-base">
                    Verify your identity to get started!
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate("/verification")}
                className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 px-3 lg:px-4 py-2 rounded-lg font-medium transition-colors text-sm lg:text-base whitespace-nowrap"
              >
                Verify Account
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-600 text-xs lg:text-sm font-medium">
                    Active Project
                  </h3>
                  <p className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2">
                    0
                  </p>
                </div>
                <BarChart3 className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400" />
              </div>
              <div className="flex items-center text-xs lg:text-sm text-gray-500">
                <span className="bg-gray-100 px-2 py-1 rounded text-xs mr-2">
                  0%
                </span>
                Last 30 Days
              </div>
            </div>

            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-600 text-xs lg:text-sm font-medium">
                    Active Negotiations
                  </h3>
                  <p className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2">
                    0
                  </p>
                </div>
                <BarChart3 className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400" />
              </div>
              <div className="flex items-center text-xs lg:text-sm text-gray-500">
                <span className="bg-gray-100 px-2 py-1 rounded text-xs mr-2">
                  0%
                </span>
                Last 30 Days
              </div>
            </div>

            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm border border-gray-200 sm:col-span-2 lg:col-span-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-gray-600 text-xs lg:text-sm font-medium">
                    Wallet Balance
                  </h3>
                  <p className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2">
                    $0.00
                  </p>
                </div>
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 font-bold text-sm lg:text-base">
                    $
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8">
            <div className="text-center">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                No project listed yet
              </h3>
              <p className="text-gray-600 mb-6 text-sm lg:text-base">
                Your active projects will appear here
              </p>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 lg:px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 mx-auto text-sm lg:text-base">
                <Plus className="w-4 h-4" />
                <span>Create Project</span>
              </button>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 lg:mt-8">
            <div className="flex items-center space-x-2 bg-gray-800 rounded-lg p-1">
              <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
