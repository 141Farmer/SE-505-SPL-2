import React, { useState } from 'react';
import { Mail, Lock, User, Phone, AlertCircle, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, Input, Button, Select } from './LoginPage';

const RegistrationPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      username: '',
      fullname: '',
      // accountType: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    const accountTypes = [
      { value: 'farmer', label: 'Organic Farmer' },
      { value: 'buyer', label: 'Buyer' },
      { value: 'investor', label: 'Agricultural Investor' },
      { value: 'supplier', label: 'Equipment Supplier' }
    ];
  
    const handleRegister = async (e) => {
      e.preventDefault();
      setError('');
      setIsLoading(true);

      // Validate passwords match
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch('http://127.0.0.1:8000/signup/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formData.username,
            fullname: formData.fullname,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            password: formData.password,
          }),
        });

        const data = await response.json();
        console.log(data.output);

        // if (!response.ok) {
        //   throw new Error(data.message || 'Registration failed');
        // }

        // Registration successful
        navigate('/login'); // Redirect to login page
      } catch (err) {
        setError(err.message || 'Failed to register. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-green-100 to-green-50 p-4 py-12">
        <div className="w-full max-w-md">
          <Card className="backdrop-blur-sm bg-white/90">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <Leaf className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-green-800">
                Join Green Harvest
              </h2>
              <p className="text-sm text-gray-600 mt-1">Create your account to get started</p>
            </div>
  
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Username</label>
                <Input
                  icon={User}
                  type="text"
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  required
                />
              </div>
  
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <Input
                  icon={User}
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullname}
                  onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                  required
                />
              </div>
  
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <Input
                  icon={Mail}
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
  
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <Input
                  icon={Phone}
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  required
                />
              </div>
  
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <Input
                  icon={Lock}
                  type="password"
                  placeholder="Choose a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Re-enter Password</label>
                <Input
                    icon={Lock}
                    type="password"
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                />
              </div>

              {/* Display an error message if passwords don't match */}
              {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-md flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      <span>Passwords do not match</span>
                  </div>
              )}
  
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-md flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  <span>{error}</span>
                </div>
              )}
  
              <div className="space-y-4">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </Button>
  
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>
  
                <Button type="button" variant="outline" className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </Button>
  
                <p className="text-center text-sm text-gray-600">
                  Already have an account?{' '}
                  <button
                    type="button"
                    className="text-green-600 hover:text-green-700 hover:underline font-medium"
                    onClick={() => navigate('/login')}
                  >
                    Login here
                  </button>
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    );
};

export default RegistrationPage;