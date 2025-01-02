const FarmLogin = () => {
          const [formData, setFormData] = useState({
            farmId: '',
            email: '',
            password: '',
            licenseNumber: ''
          });
        
          return (
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Farm Login</h2>
              <form>
                <Input
                  label="Farm ID"
                  value={formData.farmId}
                  onChange={(e) => setFormData({...formData, farmId: e.target.value})}
                />
                <Input
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <Input
                  label="License Number"
                  value={formData.licenseNumber}
                  onChange={(e) => setFormData({...formData, licenseNumber: e.target.value})}
                />
                <Input
                  label="Password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <Button type="submit">Login</Button>
                <Link to="/register/farm">Register Farm</Link>
              </form>
            </div>
          );
        };

export default FarmLogin;
        