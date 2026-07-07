import { useState } from "react";
import "./App.css";

function App() {

  const [ firstname , setfirstName] = useState ("")
  const [lastname , setlastname] = useState ( "")
  const [usernme , setusername] = useState ( "")
  return (
    <div className="form-wrapper">
      <form className="registration-form">
        <h1>Registration Form</h1>

        {/* First Name & Last Name */}
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="Enter first name"
            value={firstname}
            onChange={ (e) =>  setfirstName ( e.target.value)} />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Enter last name"
            value={lastname}
            onChange={ (e) => setlastname ( e.target.value)} />
          </div>
        </div>

        {/* Username */}
        <div className="form-group">
          <label>Username</label>
          <input type="text" placeholder="Choose a username"
          value={usernme}
          onChange={ (e) => setusername (e.target.value)} />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" placeholder="Enter phone number" />
        </div>

        {/* Password & Confirm Password */}
        <div className="form-row">
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Re-enter password" />
          </div>
        </div>

        {/* Gender - Radio */}
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="gender" value="male" /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" /> Other
            </label>
          </div>
        </div>

        {/* Skills - Checkbox */}
        <div className="form-group">
          <label>Skills</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" value="html" /> HTML
            </label>
            <label>
              <input type="checkbox" value="css" /> CSS
            </label>
            <label>
              <input type="checkbox" value="javascript" /> JavaScript
            </label>
            <label>
              <input type="checkbox" value="react" /> React
            </label>
          </div>
        </div>

        {/* Country - Select */}
        <div className="form-group">
          <label>Country</label>
          <select>
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
          <input type="date" />
        </div>

        {/* Profile Image */}
        <div className="form-group">
          <label>Profile Image</label>
          <input type="file" accept="image/*" />
        </div>

        {/* Address - Textarea */}
        <div className="form-group">
          <label>Address</label>
          <textarea rows="4" placeholder="Enter your address"></textarea>
        </div>

        {/* Register Button */}
        <button type="submit" className="register-btn">
          Register
        </button>
      </form>

      <h3>Live preview</h3>
      <p>First Name: { firstname}</p>



       <h3>Live previe Last Name</h3>
       <p>Last Name: {lastname}</p>



        <h3>USername live preview </h3>
        <p>User name {usernme}</p>
    </div>
  );
}

export default App;




