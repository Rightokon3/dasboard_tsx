import React, { useState, useEffect } from "react";
import axios from "axios";
import "./bootstrap/css/bootstrap.min.css";

const App = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    avatar: "",
  });
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Load saved data from localStorage on initial render
  useEffect(() => {
    const savedData = localStorage.getItem("ticketForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save data to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("ticketForm", JSON.stringify(formData));
  }, [formData]);

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload to Cloudinary
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file)); // Preview image
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "right_upload"); // Replace with your Cloudinary preset

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/diogva6k1/image/upload", // Replace with your Cloudinary cloud name
          formData
        );
        setFormData((prev) => ({ ...prev, avatar: response.data.secure_url }));
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
      }
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.avatar) {
      alert("Please fill out all fields and upload an avatar.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Form Section */}
          {!submitted ? (
            <form
              className="p-4 border rounded shadow fade show"
              onSubmit={handleSubmit}
              style={{ transition: "opacity 0.5s ease-in-out" }}
            >
              <h2 className="text-center mb-4">Ticket Generator</h2>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-control"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  aria-describedby="fullNameHelp"
                  required
                />
                <small id="fullNameHelp" className="form-text text-muted">
                  Enter your full name.
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-describedby="emailHelp"
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  Enter a valid email address.
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="avatar" className="form-label">
                  Upload Avatar
                </label>
                <input
                  type="file"
                  id="avatar"
                  className="form-control"
                  accept="image/*"
                  onChange={handleFileUpload}
                  required
                />
                {avatarPreview && (
                  <div className="mt-3 text-center">
                    <img
                      src={avatarPreview}
                      alt="Avatar Preview"
                      className="img-thumbnail"
                      style={{ maxWidth: "150px" }}
                    />
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Generate Ticket
              </button>
            </form>
          ) : (
            // Ticket Display Section
            <div
              className="p-4 border rounded shadow fade show"
              style={{ transition: "opacity 0.5s ease-in-out" }}
            >
              <h2 className="text-center mb-4">Your Ticket</h2>
              <div className="text-center">
                <img
                  src={formData.avatar}
                  alt="User Avatar"
                  className="img-thumbnail mb-3"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <p>
                <strong>Full Name:</strong> {formData.fullName}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              <button
                className="btn btn-secondary w-100"
                onClick={() => setSubmitted(false)}
              >
                Back to Form
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
