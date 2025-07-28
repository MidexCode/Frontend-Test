import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Building2, Users, Zap } from "lucide-react";

const UserType = () => {
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState("Energy Developer");

  const userTypes = [
    {
      id: "investor",
      label: "Investor",
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
      description: "Invest in energy projects",
    },
    {
      id: "energy-developer",
      label: "Energy Developer",
      icon: <Building2 className="w-6 h-6 text-orange-500" />,
      description: "Develop and manage energy projects",
    },
    {
      id: "service-provider",
      label: "Service Provider",
      icon: <Users className="w-6 h-6 text-orange-500" />,
      description: "Provide services to the energy ecosystem",
    },
    {
      id: "independent-off-taker",
      label: "Independent Off-taker",
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      description: "Purchase energy from the grid",
    },
  ];

  const handleUserTypeSelect = (userType) => {
    setSelectedUserType(userType);
  };

  const handleProceed = () => {
    localStorage.setItem("selectedUserType", selectedUserType);

    navigate("/login");
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-xs sm:max-w-md lg:max-w-lg w-full space-y-6 sm:space-y-8">
          <div className="text-center">
            <div className="mb-4 sm:mb-6">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                MockPortal
              </h1>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8 px-2">
              Join the Decentralized Grid
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            <h3 className="text-base sm:text-lg font-medium text-gray-900 text-center mb-4 sm:mb-6">
              Select User Type
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {userTypes.map((userType) => (
                <div key={userType.id} className="relative">
                  <input
                    type="radio"
                    id={userType.id}
                    name="userType"
                    value={userType.label}
                    checked={selectedUserType === userType.label}
                    onChange={() => handleUserTypeSelect(userType.label)}
                    className="sr-only"
                  />
                  <label
                    htmlFor={userType.id}
                    className={`flex items-center p-3 sm:p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:border-orange-300 ${
                      selectedUserType === userType.label
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="flex items-center flex-1 min-w-0">
                      <div className="mr-3 sm:mr-4 flex-shrink-0">
                        <div className="w-5 h-5 sm:w-6 sm:h-6">
                          {userType.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center">
                          <span className="text-xs sm:text-sm text-gray-400 mr-2 flex-shrink-0">
                            ⓘ
                          </span>
                          <span className="font-medium text-gray-900 text-sm sm:text-base truncate">
                            {userType.label}
                          </span>
                        </div>
                      </div>
                      <div className="ml-3 sm:ml-4 flex-shrink-0">
                        <div
                          className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedUserType === userType.label
                              ? "border-orange-500 bg-orange-500"
                              : "border-gray-300"
                          }`}
                        >
                          {selectedUserType === userType.label && (
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              ))}
            </div>

            {/* Sign In Link */}
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-xs sm:text-sm text-gray-600">
                You have an account?{" "}
                <button
                  onClick={handleSignIn}
                  className="text-orange-500 hover:text-orange-600 font-medium cursor-pointer"
                >
                  Sign in
                </button>
              </p>
            </div>

            {/* Proceed Button */}
            <button
              onClick={handleProceed}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 sm:py-4 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 mt-4 sm:mt-6 text-sm sm:text-base"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-3 sm:py-4">
        <div className="text-center px-4">
          <p className="text-xs sm:text-sm text-gray-600">
            © 2025. All Right Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default UserType;
