import { useState } from "react";
import { FiHome, FiPieChart, FiSettings, FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-lg ">
      <div className="max-w-7xl mx-11 px-3">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D0BAQGqonrBtU1aYA/company-logo_200_200/company-logo_200_200/0/1709982258747/ai_firein_logo?e=1740009600&v=beta&t=tOQQHN4Tx3aEBPEdHgRfBw84hDhDVdKSgENdDLxuenM"
              alt="Logo"
              className="h-12 w-12 rounded-full"
              onClick={() => navigate("/")}
            />
            <span
              className="ml-2 text-xl font-bold bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent"
              onClick={() => {
                navigate("/");
              }}
            ></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => navigate("/")}
              className={`px-3 py-2 rounded-md bg-gray-100`}
            >
              <FiHome className="inline mr-1" /> Home
            </button>
            <button
              onClick={() => navigate("/analytics")}
              className={`px-3 py-2 rounded-md  bg-gray-100`}
            >
              <FiPieChart className="inline mr-1" /> Analytics
            </button>
            <button
              onClick={() => navigate("/settings")}
              className={`px-3 py-2 rounded-md bg-gray-100`}
            >
              <FiSettings className="inline mr-1" /> Settings
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => navigate("/home")}
              className="block px-3 py-2 rounded-md w-full text-left"
            >
              <FiHome className="inline mr-1" /> Home
            </button>
            <button
              onClick={() => navigate("/analytics")}
              className="block px-3 py-2 rounded-md w-full text-left"
            >
              <FiPieChart className="inline mr-1" /> Analytics
            </button>
            <button
              onClick={() => navigate("/settings")}
              className="block px-3 py-2 rounded-md w-full text-left"
            >
              <FiSettings className="inline mr-1" /> Settings
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
