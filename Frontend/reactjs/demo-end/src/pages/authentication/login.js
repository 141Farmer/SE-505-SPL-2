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
        };
        
        export default LoginPage;