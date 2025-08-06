
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [userJsonUrl, setUserJsonUrl] = useState(null);
  const [verificationData, setVerificationData] = useState(null);
  const [pendingSignup, setPendingSignup] = useState(false);
  const [verifyMode, setVerifyMode] = useState('phone'); // 'phone' or 'email'

  const isBasicInfoFilled = name.trim() !== '' && password.length >= 6;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isBasicInfoFilled) return;

    if (verifyMode === 'phone') {
      const phoneScript = document.createElement('script');
      phoneScript.src = 'https://www.phone.email/sign_in_button_v1.js';
      phoneScript.async = true;
      document.querySelector('.pe_signin_button')?.appendChild(phoneScript);

      window.phoneEmailListener = async function (userObj) {
        try {
          const response = await axios.get(userObj.user_json_url);
          const data = response.data;

          setVerificationData({
            email: data.user_email_id,
            phone: data.user_phone_number,
            countryCode: data.user_country_code,
          });

          setUserJsonUrl(userObj.user_json_url);
          alert(`✅ Phone verified!\nUser details fetched from:\n${userObj.user_json_url}`);
        } catch (err) {
          console.error('Error fetching data:', err.message);
          alert('Verification failed!');
        }
      };
    } else if (verifyMode === 'email') {
      const emailScript = document.createElement('script');
      emailScript.src = 'https://www.phone.email/verify_email_v1.js';
      emailScript.async = true;
      document.querySelector('.pe_verify_email')?.appendChild(emailScript);

      window.phoneEmailReceiver = async function (userObj) {
        try {
          const response = await axios.get(userObj.user_json_url);
          const data = response.data;

          setVerificationData({
            email: data.user_email_id,
            phone: null,
            countryCode: null,
          });

          setUserJsonUrl(userObj.user_json_url);
          alert(`✅ Email verified!\nUser details fetched from:\n${userObj.user_json_url}`);
          console.log(userObj.user_json_url);
          
          await completeSignup(userObj.user_json_url); // Auto-signup for email
        } catch (err) {
          console.error('Error fetching data:', err.message);
          alert('Email verification failed!');
        }
      };
    }

    return () => {
      window.phoneEmailListener = null;
      window.phoneEmailReceiver = null;
    };
  }, [isBasicInfoFilled, verifyMode]);

  useEffect(() => {
    if (pendingSignup && userJsonUrl) {
      completeSignup(userJsonUrl);
    }
  }, [userJsonUrl]);

  const handleSignup = (e) => {
    e.preventDefault();

    if (!(name && password.length >= 6)) {
      alert('Please complete all required fields.');
      return;
    }

    if (!userJsonUrl) {
      alert('Please verify your identity first.');
      setPendingSignup(true);
      return;
    }

    completeSignup(userJsonUrl);
  };

  const completeSignup = async (jsonUrl) => {
    try {
      const response = await axios.post('http://localhost:8000/api/user/signup', {
        name,
        password,
        url: jsonUrl,
      });

      alert('Signup successful!');
      console.log(response.data);
      navigate('/');
    } catch (err) {
      alert('Signup failed!');
      console.error(err.response?.data || err.message);
    } finally {
      setPendingSignup(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSignup}>
        <h2>Sign Up</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br />

        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />

        {isBasicInfoFilled ? (
          <>
            <div style={{ marginBottom: '10px' }}>
              <label>
                <input
                  type="radio"
                  name="verifyMode"
                  value="phone"
                  checked={verifyMode === 'phone'}
                  onChange={() => setVerifyMode('phone')}
                />
                Verify with Phone
              </label>
              &nbsp;&nbsp;
              <label>
                <input
                  type="radio"
                  name="verifyMode"
                  value="email"
                  checked={verifyMode === 'email'}
                  onChange={() => setVerifyMode('email')}
                />
                Verify with Email
              </label>
            </div>

            {verifyMode === 'phone' && (
              <div
                className="pe_signin_button"
                data-client-id="15695407177920574360"
              ></div>
            )}

            {verifyMode === 'email' && (
              <div
                className="pe_verify_email"
                data-client-id="15279946079237047389"
              ></div>
            )}
          </>
        ) : (
          <p style={{ color: 'red' }}>
            ⚠️ Please enter Full Name and Password to proceed with phone/email verification.
          </p>
        )}

        {verifyMode === 'phone' && (
          <button type="submit">Create Account</button>
        )}
      </form>
    </>
  );
}
