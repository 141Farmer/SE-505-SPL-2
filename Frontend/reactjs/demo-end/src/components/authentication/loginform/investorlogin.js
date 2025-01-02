const InvestorLogin = () => {
          const [formData, setFormData] = useState({
            email: '',
            password: '',
            investorId: '',
            securityToken: ''
          });
        
          return (
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Investor Login</h2>
              <form>
                <Input
                  label="Investor ID"
                  value={formData.investorId}
                  onChange={(e) => setFormData({...formData, investorId: e.target.value})}
                />
                <Input
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <Input
                  label="Security Token"
                  value={formData.securityToken}
                  onChange={(e) => setFormData({...formData, securityToken: e.target.value})}
                />
                <Input
                  label="Password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <Button type="submit">Login</Button>
                <Link to="/register/investor">Register as Investor</Link>
              </form>
            </div>
          );
        };

export default InvestorLogin;