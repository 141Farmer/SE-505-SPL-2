import React, { useState } from 'react';
import { 
  Leaf, 
  Package, 
  Bell, 
  Star, 
  LogOut, 
  Trash2, 
  History,
  FileText,
  ChevronDown,
  Sprout,
  Calendar,
  Sun,
  Mail,
  Phone,
} from 'lucide-react';

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const userInfoCard = {
    fullname: "Md. Kibria Hossen Roni",
    username: "kibria30",
    email: "kibria8007@gmail.com",
    phoneNumber: "+8801727396969",
  }

  // const farmerData = {
  //   name: "Sarah Greene",
  //   email: "sarah.greene@organicfarms.com",
  //   membershipType: "Certified Organic Farmer",
  //   orders: [
  //     { id: 1, date: "2025-01-08", item: "Organic Seeds - Tomato", status: "Delivered" },
  //     { id: 2, date: "2025-01-05", item: "Bio-Fertilizer Pack", status: "In Transit" },
  //     { id: 3, date: "2025-01-01", item: "Organic Pest Control", status: "Processing" }
  //   ],
  //   activeOrders: [
  //     { id: 4, date: "2025-01-10", item: "Composting Kit", status: "Processing" },
  //     { id: 5, date: "2025-01-09", item: "Soil Testing Kit", status: "In Transit" }
  //   ],
  //   notifications: [
  //     { id: 1, message: "New organic certification workshop next week!", time: "2 hours ago" },
  //     { id: 2, message: "Seasonal growing guide updated", time: "1 day ago" }
  //   ],
  //   cropReviews: [
  //     { id: 1, rating: 5, comment: "Excellent yield from organic tomatoes!", date: "2025-01-07" },
  //     { id: 2, rating: 4, comment: "Bio-fertilizer improved soil health significantly", date: "2025-01-03" }
  //   ],
  //   seasonalTips: "Current Season: Winter - Focus on soil preparation and greenhouse cultivation"
  // };

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logging out...");
  };

  const handleDeleteAccount = () => {
    // Add delete account logic here
    console.log("Deleting account...");
  };

  return (
    <div className="min-h-screen bg-green-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <Leaf className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-green-800">User Dashboard</h1>
          </div>
          
          {/* Custom Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-green-100 focus:outline-none"
            >
              <img
                src="/api/placeholder/32/32"
                alt="Farmer Profile"
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

        {/* Seasonal Tips Banner
        <div className="bg-green-100 p-4 rounded-lg mb-6 flex items-center gap-3">
          <Sun className="h-6 w-6 text-green-600" />
          <p className="text-green-800 font-medium">Current Season: Winter - Focus on soil preparation and greenhouse cultivation</p>
        </div> */}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-green-100 md:col-span-3">
                <div className="flex items-center gap-4 mb-6">
                    <img
                        src="/api/placeholder/64/64"
                        alt="Farmer Profile"
                        className="w-20 h-20 rounded-full border-2 border-green-600"
                    />
                    <div>
                        <h2 className="text-2xl font-semibold text-green-800">{userInfoCard.fullname}</h2>
                        <p className="text-gray-600">{userInfoCard.username}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* <p className="flex items-center gap-2 text-green-700">
                        <Sprout className="h-5 w-5" />
                        Membership Type: <span className="font-medium">{farmerData.membershipType}</span>
                    </p> */}
                    {/* <p className="flex items-center gap-2 text-green-700">
                        <Calendar className="h-5 w-5" />
                        Joined Date: <span className="font-medium">2023-03-15</span>
                    </p> */}
                    <p className="flex items-center gap-2 text-green-700">
                        <Phone className="h-5 w-5" />
                        Phone: <span className="font-medium">{userInfoCard.phoneNumber}</span>
                    </p>
                    <p className="flex items-center gap-2 text-green-700">
                        <Mail className="h-5 w-5" />
                        Email: <span className="font-medium">{userInfoCard.email}</span>
                    </p>
                </div>
            </div>
        </div>

          {/* Order History
          <div className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 text-green-800">
              <History className="h-5 w-5" />
              Order History
            </h2>
            <div className="space-y-3">
              {farmerData.orders.map(order => (
                <div key={order.id} className="flex justify-between items-center text-sm">
                  <span className="text-green-700">{order.item}</span>
                  <span className="text-gray-600">{order.status}</span>
                </div>
              ))}
            </div>
          </div> */}

          {/* Active Orders */}
          {/* <div className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 text-green-800">
              <Package className="h-5 w-5" />
              Track Orders
            </h2>
            <div className="space-y-3">
              {farmerData.activeOrders.map(order => (
                <div key={order.id} className="flex justify-between items-center text-sm">
                  <span className="text-green-700">{order.item}</span>
                  <span className="text-green-600">{order.status}</span>
                </div>
              ))}
            </div>
          </div> */}

          {/* Notifications */}
          {/* <div className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 text-green-800">
              <Bell className="h-5 w-5" />
              Farm Updates
            </h2>
            <div className="space-y-3">
              {farmerData.notifications.map(notification => (
                <div key={notification.id} className="text-sm">
                  <p className="text-green-700">{notification.message}</p>
                  <p className="text-gray-600 text-xs">{notification.time}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Reviews and Feedback */}
          {/* <div className="bg-white p-6 rounded-lg shadow-lg border border-green-100 md:col-span-2">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 text-green-800">
              <Star className="h-5 w-5" />
              Crop Reviews & Feedback
            </h2>
            <div className="space-y-4">
              {farmerData.cropReviews.map(review => (
                <div key={review.id} className="border-b border-green-100 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-green-500 text-green-500" />
                    ))}
                  </div>
                  <p className="text-sm text-green-700">{review.comment}</p>
                  <p className="text-xs text-gray-600 mt-1">{review.date}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>    
  );
};

export default Dashboard;