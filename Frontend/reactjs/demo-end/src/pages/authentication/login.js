import React, { useState } from 'react';
import ConsumerLogin from '../../components/authentication/loginform/consumerlogin';
import FarmLogin from '../../components/authentication/loginform/farmlogin';
import InvestorLogin from '../../components/authentication/loginform/investorlogin';


const LoginPage = () => {
          
          const [userType, setUserType] = useState('consumer');
          
          const renderLoginForm = () => {
            switch(userType) {
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
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
              <div className="mb-6">
                <select 
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="p-2 border rounded"
                >
                  <option value="consumer">Consumer</option>
                  <option value="farm">Farm</option>
                  <option value="investor">Investor</option>
                </select>
              </div>
              {renderLoginForm()}
            </div>
          );
          
          
  {/*
  return (
    <div style={{ padding: '20px' }}>
      <h1>Login Page</h1>
      <select 
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
      >
        <option value="consumer">Consumer</option>
        <option value="farm">Farm</option>
        <option value="investor">Investor</option>
      </select>
      <div>
        <h2>Selected type: {userType}</h2>
      </div>
    </div>
  );
    */}
};
        
export default LoginPage;