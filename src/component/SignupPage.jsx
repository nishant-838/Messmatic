import { useState } from 'react';

export default function SignupPage() {
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const sendOTP = () => {
    if (!mobile || mobile.length !== 10) {
      alert("Enter a valid 10-digit mobile number.");
      return;
    }
    alert("OTP sent to " + mobile + " (simulated)");
  };

   const handleSignup = () => {
    onSignup(); // sets isSignedUp to true
    setMessage("✅ Signed up successfully!");
  };

  

  return (
    <div className="page-container">
      <h2>Sign Up</h2>
      {message && <p className="form-msg">{message}</p>}
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input type="email" placeholder="Gmail" />
      <input type="text" placeholder="Roll Number" />
      <input
        type="tel"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button onClick={sendOTP}>Send OTP</button>
      <input type="text" placeholder="Enter OTP" />
      <select defaultValue="">
        <option value="" disabled>Select Mess Hall</option>
        <option>GDB</option>
        <option>MSS</option>
        <option>SD</option>
        <option>CVR</option>
        <option>KMS</option>
        <option>HB</option>
        <option>Veg Mess</option>
        <option>VS</option>
        <option>BF</option>
        <option>DBA</option>
      </select>
      <button className="btn" onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
