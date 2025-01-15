import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  LogOut, 
  Trash2, 
  ChevronDown,
  Phone,
  Mail,
} from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userInfoCard, setUserInfoCard] = useState(null);

  const fetchUserInfo = async (username) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/dashboard/?username=${username}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch user info:', error);
      return null;
    }
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const userInfo = await fetchUserInfo('hasnain08');
      setUserInfoCard(userInfo);
    };

    getUserInfo();
  }, []);

  const handleLogout = () => {
    console.log('Logging out...');
  };

  const handleDeleteAccount = () => {
    console.log('Deleting account...');
  };

  if (!userInfoCard) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-green-50 p-8">
      {/* <Navbar/> */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <Leaf className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-green-800">User Dashboard</h1>
          </div>
          
          {/* Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-green-100 focus:outline-none"
            >
              <img
                src="/api/placeholder/32/32"
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-green-600"
              />
              <ChevronDown size={16} className="text-green-700" />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </button>
                <button
                  onClick={handleDeleteAccount}
                  className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Account
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/api/placeholder/64/64"
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-green-600"
            />
            <div>
              <h2 className="text-2xl font-semibold text-green-800">{userInfoCard.fullname}</h2>
              <p className="text-gray-600">{userInfoCard.username}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="flex items-center gap-2 text-green-700">
              <Phone className="h-5 w-5" />
              Phone: <span className="font-medium">{userInfoCard.phone}</span>
            </p>
            <p className="flex items-center gap-2 text-green-700">
              <Mail className="h-5 w-5" />
              Email: <span className="font-medium">{userInfoCard.email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
