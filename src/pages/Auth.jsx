import React, { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('customer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    businessType: ''
  });
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic
      console.log('Logging in with:', { email: formData.email, password: formData.password });
      alert('Login successful!');
    } else {
      // Registration logic
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log('Registering with:', formData);
      setOtpSent(true);
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Verify OTP logic
    alert('Account created successfully!');
    setOtpSent(false);
    setIsLogin(true);
  };

  const handleSocialLogin = (provider) => {
    alert(`Logging in with ${provider}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gold-primary">
            {otpSent ? 'Verify OTP' : (isLogin ? 'Sign in to your account' : 'Create an account')}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            {otpSent 
              ? 'Enter the OTP sent to your phone' 
              : (isLogin ? 'Or start your journey with VisioBiz AI' : 'Select your account type')
            }
          </p>
        </div>

        {!otpSent ? (
          <>
            {!isLogin && (
              <div className="flex justify-center space-x-4 mb-6">
                <button
                  onClick={() => setUserType('customer')}
                  className={`px-4 py-2 rounded-md ${
                    userType === 'customer' 
                      ? 'bg-gold-primary text-gray-900' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Customer
                </button>
                <button
                  onClick={() => setUserType('shopkeeper')}
                  className={`px-4 py-2 rounded-md ${
                    userType === 'shopkeeper' 
                      ? 'bg-gold-primary text-gray-900' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Shopkeeper
                </button>
              </div>
            )}

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm space-y-4">
                {!isLogin && (
                  <>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-gold-primary focus:border-gold-primary focus:z-10 sm:text-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    {userType === 'shopkeeper' && (
                      <>
                        <div>
                          <label htmlFor="businessName" className="block text-sm font-medium text-gray-300">
                            Business Name
                          </label>
                          <input
                            id="businessName"
                            name="businessName"
                            type="text"
                            required
                            value={formData.businessName}
                            onChange={handleInputChange}
                            className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-gold-primary focus:border-gold-primary focus:z-10 sm:text-sm"
                            placeholder="Enter your business name"
                          />
                        </div>
                        <div>
                          <label htmlFor="businessType" className="block text-sm font-medium text-gray-300">
                            Business Type
                          </label>
                          <select
                            id="businessType"
                            name="businessType"
                            required
                            value={formData.businessType}
                            onChange={handleInputChange}
                            className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-gold-primary focus:border-gold-primary focus:z-10 sm:text-sm"
                          >
                            <option value="">Select business type</option>
                            <option value="retail">Retail</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="service">Service</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </>
                    )}
                  </>
                )}
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-gold-primary focus:border-gold-primary focus:z-10 sm:text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                
                {!isLogin && (
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-gold-primary focus:border-gold-primary focus:z-10 sm:text-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>
                )}
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-gold-primary focus:border-gold-primary focus:z-10 sm:text-sm"
                    placeholder="Enter your password"
                  />
                </div>
                
                {!isLogin && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-gold-primary focus:border-gold-primary focus:z-10 sm:text-sm"
                      placeholder="Confirm your password"
                    />
                  </div>
                )}
              </div>

              {isLogin && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-gold-primary focus:ring-gold-primary border-gray-600 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-gold-primary hover:text-gold-light">
                      Forgot your password?
                    </a>
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-gold-primary hover:bg-gold-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-primary"
                >
                  {isLogin ? 'Sign in' : 'Create Account'}
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleSocialLogin('Google')}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-white hover:bg-gray-600"
                >
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13.5v7l6-3.5-6-3.5z"/>
                  </svg>
                  <span className="ml-2">Google</span>
                </button>

                <button
                  onClick={() => handleSocialLogin('Facebook')}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-white hover:bg-gray-600"
                >
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13.5v7l6-3.5-6-3.5z"/>
                  </svg>
                  <span className="ml-2">Facebook</span>
                </button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="font-medium text-gold-primary hover:text-gold-light"
              >
                {isLogin 
                  ? 'New to VisioBiz AI? Create an account' 
                  : 'Already have an account? Sign in'
                }
              </button>
            </div>
          </>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleOtpSubmit}>
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-300">
                Enter OTP
              </label>
              <input
                id="otp"
                name="otp"
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-gold-primary focus:border-gold-primary focus:z-10 sm:text-sm"
                placeholder="Enter 6-digit OTP"
                maxLength={6}
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-gold-primary hover:bg-gold-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-primary"
              >
                Verify OTP
              </button>
            </div>
            
            <div className="text-center">
              <button
                type="button"
                onClick={() => setOtpSent(false)}
                className="font-medium text-gold-primary hover:text-gold-light"
              >
                Back to registration
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;