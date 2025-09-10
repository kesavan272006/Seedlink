import React, { useState } from 'react';

const ProfileDetails = () => {
  const [shopDetails, setShopDetails] = useState({
    name: 'My Awesome Shop',
    description: 'We offer the best products in town with excellent customer service.',
    address: '123 Main Street, City Center',
    phone: '+91 9876543210',
    email: 'contact@myawesomeshop.com',
    hours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 8:00 PM',
      saturday: '10:00 AM - 4:00 PM',
      sunday: 'Closed'
    },
    categories: ['Fashion', 'Accessories']
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedDetails, setEditedDetails] = useState({...shopDetails});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleHoursChange = (day, value) => {
    setEditedDetails(prev => ({
      ...prev,
      hours: {
        ...prev.hours,
        [day]: value
      }
    }));
  };

  const handleSave = () => {
    setShopDetails({...editedDetails});
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    setEditedDetails({...shopDetails});
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gold-primary">Shop Profile</h1>
          {isEditing ? (
            <div className="space-x-4">
              <button 
                onClick={handleSave}
                className="bg-gold-primary text-gray-900 py-2 px-4 rounded-md font-semibold hover:bg-gold-light"
              >
                Save Changes
              </button>
              <button 
                onClick={handleCancel}
                className="bg-gray-700 text-white py-2 px-4 rounded-md font-semibold hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setIsEditing(true)}
              className="bg-gold-primary text-gray-900 py-2 px-4 rounded-md font-semibold hover:bg-gold-light"
            >
              Edit Profile
            </button>
          )}
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">Basic Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Shop Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={editedDetails.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-gold-primary focus:outline-none"
                />
              ) : (
                <p className="text-white">{shopDetails.name}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={editedDetails.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-gold-primary focus:outline-none"
                />
              ) : (
                <p className="text-white">{shopDetails.email}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={editedDetails.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-gold-primary focus:outline-none"
                />
              ) : (
                <p className="text-white">{shopDetails.phone}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Address</label>
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={editedDetails.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-gold-primary focus:outline-none"
                />
              ) : (
                <p className="text-white">{shopDetails.address}</p>
              )}
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
              {isEditing ? (
                <textarea
                  name="description"
                  value={editedDetails.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-gold-primary focus:outline-none"
                />
              ) : (
                <p className="text-white">{shopDetails.description}</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">Business Hours</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(shopDetails.hours).map(([day, hours]) => (
              <div key={day} className="flex justify-between items-center">
                <span className="text-gray-300 capitalize">{day}:</span>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedDetails.hours[day]}
                    onChange={(e) => handleHoursChange(day, e.target.value)}
                    className="w-48 px-3 py-1 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-gold-primary focus:outline-none"
                  />
                ) : (
                  <span className="text-white">{hours}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">Shop Photos</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-700 h-32 rounded-md flex items-center justify-center">
              <span className="text-gray-400">+ Add Photo</span>
            </div>
            <div className="bg-gray-700 h-32 rounded-md flex items-center justify-center">
              <span className="text-gray-400">+ Add Photo</span>
            </div>
            <div className="bg-gray-700 h-32 rounded-md flex items-center justify-center">
              <span className="text-gray-400">+ Add Photo</span>
            </div>
            <div className="bg-gray-700 h-32 rounded-md flex items-center justify-center">
              <span className="text-gray-400">+ Add Photo</span>
            </div>
          </div>
          
          <div className="mt-6">
            <button className="text-gold-primary hover:text-gold-light font-medium">
              Generate AR Store Preview
            </button>
            <p className="text-gray-400 text-sm mt-2">AI will stitch your photos into an immersive 3D store experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;