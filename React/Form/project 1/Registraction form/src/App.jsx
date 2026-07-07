import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    skills: [],
    country: "",
    dob: "",
    profileImage: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const skills = checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value);

        return { ...prev, skills };
      });
      return;
    }

    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: e.target.files[0] ? e.target.files[0].name : "",
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration submitted successfully!");
  };

  return (
    <div className="page-shell">
      <div className="form-card">
        <div className="form-header">
          <h1>Create Account</h1>
          <p>Join our community with a few simple details.</p>
        </div>

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Skills</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" name="skills" value="html" onChange={handleChange} /> HTML
              </label>
              <label>
                <input type="checkbox" name="skills" value="css" onChange={handleChange} /> CSS
              </label>
              <label>
                <input type="checkbox" name="skills" value="javascript" onChange={handleChange} /> JavaScript
              </label>
              <label>
                <input type="checkbox" name="skills" value="react" onChange={handleChange} /> React
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Country</label>
            <select name="country" value={formData.country} onChange={handleChange}>
              <option value="">-- Select Country --</option>
              <option value="pakistan">Pakistan</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Profile Image</label>
            <input type="file" name="profileImage" accept="image/*" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              rows="4"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>

      <aside className="preview-card">
        <h2>Live Preview</h2>
        <div className="preview-grid">
          <div>
            <span>First Name</span>
            <strong>{formData.firstName || "—"}</strong>
          </div>
          <div>
            <span>Last Name</span>
            <strong>{formData.lastName || "—"}</strong>
          </div>
          <div>
            <span>Username</span>
            <strong>{formData.username || "—"}</strong>
          </div>
          <div>
            <span>Email</span>
            <strong>{formData.email || "—"}</strong>
          </div>
          <div>
            <span>Phone</span>
            <strong>{formData.phone || "—"}</strong>
          </div>
          <div>
            <span>Gender</span>
            <strong>{formData.gender || "—"}</strong>
          </div>
          <div>
            <span>Country</span>
            <strong>{formData.country || "—"}</strong>
          </div>
          <div>
            <span>Skills</span>
            <strong>{formData.skills.length ? formData.skills.join(", ") : "—"}</strong>
          </div>
          <div>
            <span>Address</span>
            <strong>{formData.address || "—"}</strong>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;

