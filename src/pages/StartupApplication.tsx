import React, { useState, useRef } from 'react';

const StartupApplication = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyUrl: '',
    companyDescription: '',
    founderName: '',
    founderEmail: '',
    founderRole: '',
    coFounderName: '',
    coFounderEmail: '',
    coFounderRole: '',
    category: '',
    problem: '',
    solution: '',
    targetMarket: '',
    revenue: '',
    growth: '',
  });

  const [videoFile, setVideoFile] = useState(null);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState('');
  const videoInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 100 * 1024 * 1024) { // 100MB limit
        alert('Video file size must be less than 100MB');
        e.target.value = '';
        return;
      }
      
      setVideoFile(file);
      setVideoPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send both formData and videoFile to your server
    console.log('Form submitted:', formData);
    console.log('Video file:', videoFile);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">SEED Application</h1>
        <p className="text-gray-600">Spring 2025 Batch</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Video Upload Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Founder Video</h2>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload a 1-minute video introducing yourself and your startup
                  <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  <input
                    type="file"
                    ref={videoInputRef}
                    onChange={handleVideoChange}
                    accept="video/*"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    required
                  />
                  <p className="text-xs text-gray-500">
                    Maximum file size: 100MB. Supported formats: MP4, WebM, MOV
                  </p>
                </div>
                
                {/* Video Preview */}
                {videoPreviewUrl && (
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Preview:</h3>
                    <video
                      controls
                      className="w-full rounded-lg border border-gray-200"
                      style={{ maxHeight: '400px' }}
                    >
                      <source src={videoPreviewUrl} type={videoFile?.type} />
                      Your browser does not support the video tag.
                    </video>
                    <button
                      type="button"
                      onClick={() => {
                        setVideoFile(null);
                        setVideoPreviewUrl('');
                        if (videoInputRef.current) {
                          videoInputRef.current.value = '';
                        }
                      }}
                      className="mt-2 text-sm text-red-600 hover:text-red-700"
                    >
                      Remove video
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

          {/* Company Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Company Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company URL
                </label>
                <input
                  type="url"
                  name="companyUrl"
                  value={formData.companyUrl}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Describe your company in 50 characters or less
                </label>
                <input
                  type="text"
                  name="companyDescription"
                  value={formData.companyDescription}
                  onChange={handleChange}
                  maxLength={50}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Founder Information</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Founder Name
                  </label>
                  <input
                    type="text"
                    name="founderName"
                    value={formData.founderName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Founder Email
                  </label>
                  <input
                    type="email"
                    name="founderEmail"
                    value={formData.founderEmail}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Co-Founder Name (if any)
                  </label>
                  <input
                    type="text"
                    name="coFounderName"
                    value={formData.coFounderName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Co-Founder Email
                  </label>
                  <input
                    type="email"
                    name="coFounderEmail"
                    value={formData.coFounderEmail}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Business Details Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Business Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a category</option>
                  <option value="b2b">B2B Software</option>
                  <option value="b2c">Consumer</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="marketplace">Marketplace</option>
                  <option value="ai">AI/ML</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  What problem are you solving?
                </label>
                <textarea
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  How are you solving it?
                </label>
                <textarea
                  name="solution"
                  value={formData.solution}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Who are your target users?
                </label>
                <textarea
                  name="targetMarket"
                  value={formData.targetMarket}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current monthly revenue (if any)
                </label>
                <input
                  type="text"
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="$"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly growth rate
                </label>
                <input
                  type="text"
                  name="growth"
                  value={formData.growth}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="%"
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
            <p className="text-sm text-blue-800">
              Make sure all required fields are filled out correctly before submitting.
            </p>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StartupApplication;