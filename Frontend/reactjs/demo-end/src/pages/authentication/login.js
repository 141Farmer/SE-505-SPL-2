import React, { useState } from 'react';
import ConsumerLogin from '../../components/authentication/loginform/consumerlogin';
import FarmLogin from '../../components/authentication/loginform/farmlogin';
import InvestorLogin from '../../components/authentication/loginform/investorlogin';

const LoginPage = () => {
  const [userType, setUserType] = useState('consumer');

  const renderLoginForm = () => {
    switch (userType) {
      case 'consumer':
        return <ConsumerLogin />;
      case 'farm':
        return <FarmLogin />;
      case 'investor':
        return <InvestorLogin />;
      default:
        return <ConsumerLogin />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Login as {userType.charAt(0).toUpperCase() + userType.slice(1)}
        </h2>

        <div className="mb-4">
          <label htmlFor="userType" className="block mb-2 text-sm font-medium text-gray-600">
            Select User Type
          </label>
          <select
            id="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="consumer">Consumer</option>
            <option value="farm">Farm</option>
            <option value="investor">Investor</option>
          </select>
        </div>

        <div className="mt-6">{renderLoginForm()}</div>
      </div>
    </div>
  );
};

export default LoginPage;
