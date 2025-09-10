import React, { useState } from 'react';

const AdsManager = () => {
  const [campaignName, setCampaignName] = useState('');
  const [targetAudience, setTargetAudience] = useState('local');
  const [budget, setBudget] = useState(1000);
  const [selectedImage, setSelectedImage] = useState(null);
  const [aiGeneratedContent, setAiGeneratedContent] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      // Simulate AI processing
      setTimeout(() => {
        setAiGeneratedContent({
          poster: "AI-generated poster preview",
          video: "AI-generated video preview",
          whatsappCopy: "Check out our amazing offers! Limited time only. Visit us today!"
        });
      }, 2000);
    }
  };

  const handleCreateCampaign = () => {
    alert(`Campaign "${campaignName}" created successfully!`);
    // Reset form
    setCampaignName('');
    setTargetAudience('local');
    setBudget(1000);
    setSelectedImage(null);
    setAiGeneratedContent(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gold-primary mb-8">AdMagnet AI - Ads Manager</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Campaign Setup Form */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Create New Campaign</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Campaign Name</label>
                <input
                  type="text"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-gold-primary focus:outline-none"
                  placeholder="Enter campaign name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Target Audience</label>
                <select
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-gold-primary focus:outline-none"
                >
                  <option value="local">Local Customers</option>
                  <option value="city">City-wide</option>
                  <option value="region">Regional</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Budget (₹)</label>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full"
                />
                <div className="text-gold-primary text-right">₹{budget}</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Upload Product Image</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {selectedImage ? (
                      <img src={selectedImage} alt="Preview" className="mx-auto h-32 object-cover" />
                    ) : (
                      <>
                        <div className="flex text-sm text-gray-400">
                          <label className="relative cursor-pointer bg-gray-700 rounded-md font-medium text-gold-primary hover:text-gold-light focus-within:outline-none">
                            <span>Upload a file</span>
                            <input 
                              type="file" 
                              className="sr-only" 
                              onChange={handleImageUpload}
                              accept="image/*"
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleCreateCampaign}
                disabled={!campaignName || !selectedImage}
                className="w-full bg-gold-primary text-gray-900 py-2 px-4 rounded-md font-semibold hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Launch Campaign
              </button>
            </div>
          </div>
          
          {/* AI Generated Content Preview */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">AI-Generated Content</h2>
            
            {aiGeneratedContent ? (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gold-primary mb-2">Poster Ad</h3>
                  <div className="bg-gray-900 h-48 flex items-center justify-center rounded-md border border-gold-primary">
                    <p className="text-white">AI-Generated Poster Preview</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gold-primary mb-2">Video Ad</h3>
                  <div className="bg-gray-900 h-48 flex items-center justify-center rounded-md border border-gold-primary">
                    <p className="text-white">AI-Generated Video Preview</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gold-primary mb-2">WhatsApp Copy</h3>
                  <div className="bg-gray-900 p-4 rounded-md border border-gold-primary">
                    <p className="text-white">{aiGeneratedContent.whatsappCopy}</p>
                    <button className="mt-2 text-teal hover:text-teal-light text-sm font-medium">
                      Copy to Clipboard
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-400">Upload an image to generate AI content</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsManager;