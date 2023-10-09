import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import "./Auth.css";
import {signup, login} from "../../actions/auth";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rollno, setRollNo] = useState(""); // Updated to "rollno"
  const [passoutyear, setPassoutYear] = useState(""); // Updated to "passoutyear"

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Enter email and password");
      return; // Return early to prevent further execution
    }
    if (isSignup && (!name || !rollno || !passoutyear)) {
      alert("Please fill in all required fields");
      return; // Return early to prevent further execution
    }

    if (isSignup) {
      dispatch(
        signup(
          {
            name,
            email,
            password,
            rollno, // Updated to "rollno"
            passoutyear, // Updated to "passoutyear"
          },
          () =>{
            setIsSignup(false)
          }
        )
      );
    } else {
      dispatch(login({email, password}, navigate));
    }
  };

  return (
    <section className='auth-section'>
      <div className='auth-container-2'>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor='name'>
              <h4>Display Name</h4>
              <input
                style={{
                  backgroundColor: " hsl(280, 9%,70%)", // Light purple background color for the textarea
                  color: "#fff", // Text color
                  border: "1px solid #ccc", // Border color
                  padding: "10px", // Padding for content inside the textarea
                  borderRadius: "10px",
                }}
                type='text'
                id='name'
                name='name'
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          <label htmlFor='email'>
            <h4>Email</h4>
            <input
              style={{
                backgroundColor: " hsl(280, 9%,70%)", // Light purple background color for the textarea
                color: "#fff", // Text color
                border: "1px solid #ccc", // Border color
                padding: "10px", // Padding for content inside the textarea
                borderRadius: "10px",
              }}
              type='email'
              name='email'
              id='email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor='password'>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}>
              <h4>Password</h4>
              {!isSignup && (
                <p style={{color: "#007ac6", fontSize: "13px"}}>
                  forgot password?
                </p>
              )}
            </div>
            <input
              style={{
                backgroundColor: " hsl(280, 9%,70%)", // Light purple background color for the textarea
                color: "#fff", // Text color
                border: "1px solid #ccc", // Border color
                padding: "10px", // Padding for content inside the textarea
                borderRadius: "10px",
              }}
              type='password'
              name='password'
              id='password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {isSignup && (
              <p style={{color: "#666767", fontSize: "13px"}}>
                Passwords must contain at least eight
                <br />
                characters, including at least 1 letter and 1 <br /> number.
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor='rollno'>
              {" "}
              {/* Updated to "rollno" */}
              <h4>Roll Number</h4>
              <input
                style={{
                  backgroundColor: " hsl(280, 9%,70%)", // Light purple background color for the textarea
                  color: "#fff", // Text color
                  border: "1px solid #ccc", // Border color
                  padding: "10px", // Padding for content inside the textarea
                  borderRadius: "10px",
                }}
                type='text'
                id='rollno'
                name='rollno'
                onChange={(e) => {
                  setRollNo(e.target.value); // Updated to "setRollNo"
                }}
              />
            </label>
          )}
          {isSignup && (
            <label htmlFor='passoutyear'>
              {" "}
              {/* Updated to "passoutyear" */}
              <h4>Passout Year</h4>
              <input
                style={{
                  backgroundColor: " hsl(280, 9%,70%)", // Light purple background color for the textarea
                  color: "#fff", // Text color
                  border: "1px solid #ccc", // Border color
                  padding: "10px", // Padding for content inside the textarea
                  borderRadius: "10px",
                }}
                type='text'
                id='passoutyear'
                name='passoutyear'
                onChange={(e) => {
                  setPassoutYear(e.target.value); // Updated to "setPassoutYear"
                }}
              />
            </label>
          )}
          {/* Other form fields */}
          <button type='submit' className='auth-btn'>
            {isSignup ? "Sign up" : "Log in"}
          </button>
        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button
            type='button'
            className='handle-switch-btn'
            onClick={handleSwitch}>
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
