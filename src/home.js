import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import oip from './OIP.jpg';
import "./style3.css";
import { Grid,Box } from "@mui/material";
import App from "./App";
function App4() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (

    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required  style={{width:"300px",height:'40px'}}/>
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required  style={{width:"300px",height:'40px'}}/>
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <p>Haven't an Account?</p>
        <div className="button-container">
          <input type="submit" value="Reg" />
        
        </div>
      </form>
    </div>
  );

  return (
 <Box>
    <div id="jj" >

    <center><p >WELCOME TO OUR BANK</p></center>
    <div id="app">
        
      <div className="login-form">
        <div className="title">Sign In</div>

        
        {isSubmitted ? <div><App/></div> : renderForm}
      </div>
    </div>
    </div>
    </Box>
  );
}

export default App4;