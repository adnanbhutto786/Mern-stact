// import { useState } from "react";
// import "./App.css";

// function App() {
//   return (
//     <div className="form-wrapper">
//       <form className="registration-form">
//         <h1>Registration Form</h1>

//         {/* First Name & Last Name */}
//         <div className="form-row">
//           <div className="form-group">
//             <label>First Name</label>
//             <input type="text" placeholder="Enter first name" />
//           </div>

//           <div className="form-group">
//             <label>Last Name</label>
//             <input type="text" placeholder="Enter last name" />
//           </div>
//         </div>

//         {/* Username */}
//         <div className="form-group">
//           <label>Username</label>
//           <input type="text" placeholder="Choose a username" />
//         </div>

//         {/* Email */}
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email" placeholder="Enter email" />
//         </div>

//         {/* Phone */}
//         <div className="form-group">
//           <label>Phone</label>
//           <input type="tel" placeholder="Enter phone number" />
//         </div>

//         {/* Password & Confirm Password */}
//         <div className="form-row">
//           <div className="form-group">
//             <label>Password</label>
//             <input type="password" placeholder="Enter password" />
//           </div>

//           <div className="form-group">
//             <label>Confirm Password</label>
//             <input type="password" placeholder="Re-enter password" />
//           </div>
//         </div>

//         {/* Gender - Radio */}
//         <div className="form-group">
//           <label>Gender</label>
//           <div className="radio-group">
//             <label>
//               <input type="radio" name="gender" value="male" /> Male
//             </label>
//             <label>
//               <input type="radio" name="gender" value="female" /> Female
//             </label>
//             <label>
//               <input type="radio" name="gender" value="other" /> Other
//             </label>
//           </div>
//         </div>

//         {/* Skills - Checkbox */}
//         <div className="form-group">
//           <label>Skills</label>
//           <div className="checkbox-group">
//             <label>
//               <input type="checkbox" value="html" /> HTML
//             </label>
//             <label>
//               <input type="checkbox" value="css" /> CSS
//             </label>
//             <label>
//               <input type="checkbox" value="javascript" /> JavaScript
//             </label>
//             <label>
//               <input type="checkbox" value="react" /> React
//             </label>
//           </div>
//         </div>

//         {/* Country - Select */}
//         <div className="form-group">
//           <label>Country</label>
//           <select>
//             <option value="">-- Select Country --</option>
//             <option value="pakistan">Pakistan</option>
//             <option value="india">India</option>
//             <option value="usa">USA</option>
//             <option value="uk">UK</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         {/* Date of Birth */}
//         <div className="form-group">
//           <label>Date of Birth</label>
//           <input type="date" />
//         </div>

//         {/* Profile Image */}
//         <div className="form-group">
//           <label>Profile Image</label>
//           <input type="file" accept="image/*" />
//         </div>

//         {/* Address - Textarea */}
//         <div className="form-group">
//           <label>Address</label>
//           <textarea rows="4" placeholder="Enter your address"></textarea>
//         </div>

//         {/* Register Button */}
//         <button type="submit" className="register-btn">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;




import { useState } from 'react';
import './App.css';

function App() {
  // Har field ka apna alag state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const [country, setCountry] = useState("");
  const [dob, setDob] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [address, setAddress] = useState("");

  // Checkbox ke liye alag handler (array hai isliye)
  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  // File input handler
  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Gender:", gender);
    console.log("Skills:", skills);
    console.log("Country:", country);
    console.log("DOB:", dob);
    console.log("Profile Image:", profileImage);
    console.log("Address:", address);
    alert("Form submitted! Console check karo (F12)");
  };

  return (
    <div className="form-wrapper">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h1>Registration Form</h1>

        {/* First Name & Last Name */}
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
            />
          </div>
        </div>

        {/* Username */}
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Choose a username"
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
          />
        </div>

        {/* Password & Confirm Password */}
        <div className="form-row">
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter password"
            />
          </div>
        </div>

        {/* Gender - Radio */}
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              /> Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={gender === "other"}
                onChange={(e) => setGender(e.target.value)}
              /> Other
            </label>
          </div>
        </div>

        {/* Skills - Checkbox */}
        <div className="form-group">
          <label>Skills</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" value="html" checked={skills.includes("html")} onChange={handleSkillChange} /> HTML
            </label>
            <label>
              <input type="checkbox" value="css" checked={skills.includes("css")} onChange={handleSkillChange} /> CSS
            </label>
            <label>
              <input type="checkbox" value="javascript" checked={skills.includes("javascript")} onChange={handleSkillChange} /> JavaScript
            </label>
            <label>
              <input type="checkbox" value="react" checked={skills.includes("react")} onChange={handleSkillChange} /> React
            </label>
          </div>
        </div>

        {/* Country - Select */}
        <div className="form-group">
          <label>Country</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">-- Select Country --</option>
            <option value="pakistan">Pakistan</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Date of Birth */}
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        {/* Profile Image */}
        <div className="form-group">
          <label>Profile Image</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {profileImage && <p className="file-name">Selected: {profileImage.name}</p>}
        </div>

        {/* Address - Textarea */}
        <div className="form-group">
          <label>Address</label>
          <textarea
            rows="4"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          ></textarea>
        </div>

        {/* Register Button */}
        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
