import React, { useRef, useState, useEffect } from "react";
import { Upload, Store, MapPin, Clock, Tag, Send } from "lucide-react";

const GOOGLE_GEOCODE_API_KEY = "AIzaSyBMVb2tS1xhdqg5EI3DMwscKO-GHhrh3s0"; // Replace with your API Key

export default function ShopkeeperDashboard() {
  const [shopDetails, setShopDetails] = useState({
    name: "",
    address: "",
    categories: [],
    timings: "",
  });

  const availableCategories = [
    "Groceries",
    "Clothing",
    "Footwear",
    "Electronics",
    "Mobiles",
    "Books & Stationery",
    "Jewelry",
    "Handicrafts",
    "Beauty & Personal Care",
    "Home Decor",
    "Furniture",
    "Toys & Games",
    "Kitchenware",
    "Bags & Accessories",
    "Bakery & Sweets",
    "Dairy & Beverages",
    "Restaurant",
    "Pharmacy",
    "Pet Supplies",
    "Flowers & Plants",
    "Tools",
    "Auto Spares",
    "Repairs",
    "Tailoring",
    "Gifts",
  ];

  const [images, setImages] = useState([]);
  const fileInputRef = useRef();

  const toggleCategory = (category) => {
    setShopDetails((prev) => {
      if (prev.categories.includes(category)) {
        return {
          ...prev,
          categories: prev.categories.filter((c) => c !== category),
        };
      } else {
        return { ...prev, categories: [...prev.categories, category] };
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShopDetails((prev) => ({ ...prev, [name]: value }));
  };

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/")
    );
    setImages((prev) => [...prev, ...files].slice(0, 5));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).filter((file) =>
      file.type.startsWith("image/")
    );
    setImages((prev) => [...prev, ...files].slice(0, 5));
  };

  const removeImage = (idx) => {
    setImages((imgs) => imgs.filter((_, i) => i !== idx));
  };

  // Geocode address and print latitude & longitude to console
  useEffect(() => {
    async function fetchCoordinates() {
      if (!shopDetails.address) return;

      try {
        const encodedAddress = encodeURIComponent(shopDetails.address);
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${GOOGLE_GEOCODE_API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "OK") {
          const location = data.results[0].geometry.location;
          console.log(
            `Geocoded Location - Latitude: ${location.lat}, Longitude: ${location.lng}`
          );
        } else {
          console.error("Geocoding API error:", data.status);
        }
      } catch (error) {
        console.error("Error fetching geocoding data:", error);
      }
    }
    fetchCoordinates();
  }, [shopDetails.address]);

  const handleSubmit = () => {
    const formData = {
      ...shopDetails,
      images: images.map((img, idx) => ({
        name: typeof img === "string" ? `image-${idx}` : img.name,
        size: typeof img === "string" ? "unknown" : img.size,
        type: typeof img === "string" ? "unknown" : img.type,
      })),
    };
    console.log("Shop Details Submitted:", formData);
    alert("Form data logged to console!");
  };

  const isFormValid =
    shopDetails.name &&
    shopDetails.address &&
    shopDetails.categories.length > 0 &&
    shopDetails.timings &&
    images.length > 0;

  return (
    <div className="min-h-screen bg-slate-800 p-4 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Set Up Your Digital Storefront
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Add your shop details and images to create an immersive AR experience
          for your customers
        </p>
      </div>

      {/* Form and Upload container */}
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-8">
        {/* Left: Form Fields */}
        <div className="flex-1 bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 shadow-2xl">
          <div className="space-y-8">
            {/* Shop Name and Timings Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-yellow-400 font-semibold text-lg">
                  <Store className="w-5 h-5" />
                  Shop Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={shopDetails.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 'Modern Threads'"
                  className="w-full px-4 py-4 bg-slate-800/80 border-2 border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200"
                />
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-yellow-400 font-semibold text-lg">
                  <Clock className="w-5 h-5" />
                  Shop Timings
                </label>
                <input
                  type="text"
                  name="timings"
                  value={shopDetails.timings}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., '10 AM - 9 PM, Mon-Sat'"
                  className="w-full px-4 py-4 bg-slate-800/80 border-2 border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200"
                />
              </div>
            </div>

            {/* Shop Address */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-yellow-400 font-semibold text-lg">
                <MapPin className="w-5 h-5" />
                Shop Address
              </label>
              <textarea
                name="address"
                value={shopDetails.address}
                onChange={handleInputChange}
                required
                rows={3}
                placeholder="Enter your complete shop address with landmark"
                className="w-full px-4 py-4 bg-slate-800/80 border-2 border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-200 resize-none"
              />
            </div>

            {/* Categories Section */}
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-yellow-400 font-semibold text-lg">
                <Tag className="w-5 h-5" />
                Categories ({shopDetails.categories.length} selected)
              </label>

              {/* SCROLLABLE CATEGORY OPTIONS */}
              <div className="bg-slate-800/60 rounded-xl p-4 border-2 border-slate-600 max-h-48 overflow-y-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2">
                  {availableCategories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => toggleCategory(category)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                        shopDetails.categories.includes(category)
                          ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 shadow-lg"
                          : "bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white border border-slate-600"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* SELECTED TAGS: ALWAYS VISIBLE, NEVER IN SCROLLBOX */}
              {shopDetails.categories.length > 0 && (
                <div className="pt-3">
                  <p className="text-slate-400 text-xs mb-2">Selected categories:</p>
                  <div className="flex flex-wrap gap-1">
                    {shopDetails.categories.map((category) => (
                      <span
                        key={category}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-400/20 text-yellow-700 rounded-md text-xs"
                      >
                        {category}
                        <button
                          type="button"
                          onClick={() => toggleCategory(category)}
                          className="hover:text-yellow-100 ml-1"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  </div>
              )}
              {shopDetails.categories.length === 0 && (
                <p className="text-slate-400 text-sm">
                  Please select at least one category for your shop
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right: Image Upload */}
        <div className="flex-1 bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 shadow-2xl flex flex-col h-[60vh]">
          <div className="h-full flex flex-col overflow-y-auto">
            <h2 className="text-yellow-400 font-semibold text-lg mb-6 flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Upload Shop Images
            </h2>

            <div
              className={`flex-1 min-h-[300px] border-3 border-dashed rounded-2xl p-6 transition-all duration-300 cursor-pointer
                ${
                  images.length
                    ? "border-teal-400 bg-teal-400/5"
                    : "border-yellow-400/60 bg-yellow-400/5 hover:border-yellow-400 hover:bg-yellow-400/10"
                }`}
              onDrop={onDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => fileInputRef.current.click()}
            >
              <input
                type="file"
                multiple
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />

              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="mb-4">
                  <Upload className="h-16 w-16 text-yellow-400 mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {images.length ? "Add More Images" : "Upload Shop Images"}
                  </h3>
                  <p className="text-slate-300 mb-2">
                    Drag & drop or click to select up to 5 high-quality images
                  </p>
                  <p className="text-sm text-slate-400">
                    {images.length > 0
                      ? `${images.length}/5 images selected`
                      : "JPG, PNG, WEBP formats supported"}
                  </p>
                </div>

                {images.length > 0 && (
                  <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
                    {images.map((img, idx) => {
                      const url =
                        typeof img === "string" ? img : URL.createObjectURL(img);
                      return (
                        <div key={idx} className="relative group">
                          <img
                            src={url}
                            alt="Shop Preview"
                            className="w-full h-20 object-cover rounded-lg border-2 border-teal-400 shadow-lg"
                          />
                          <button
                            type="button"
                            className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeImage(idx);
                            }}
                          >
                            ×
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8 text-center">
        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto shadow-2xl ${
            isFormValid
              ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 hover:from-yellow-300 hover:to-yellow-400 hover:shadow-yellow-400/25"
              : "bg-slate-600 text-slate-400 cursor-not-allowed"
          }`}
        >
          <Send className="w-5 h-5" />
          Create Digital Storefront
        </button>
        {!isFormValid && (
          <p className="text-slate-400 text-sm mt-3">
            Please fill all fields and upload at least one image to continue
          </p>
        )}
      </div>
    </div>
  );
}
