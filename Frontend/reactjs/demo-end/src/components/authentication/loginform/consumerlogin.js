const ConsumerLogin = () => {
          const [formData, setFormData] = useState({
            email: '',
            password: ''
          });
        
          return (
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Consumer Login</h2>
              <form>
                <Input
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <Input
                  label="Password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <Button type="submit">Login</Button>
                <Link to="/register/consumer">Create Consumer Account</Link>
              </form>
            </div>
          );
        };

export default ConsumerLogin;