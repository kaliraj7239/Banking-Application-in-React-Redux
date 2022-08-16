import React, {useState} from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
 
function App() {
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
 
    // function to update state of name with
    // value enter by user in form
    const handleChange =(e)=>{
      setName(e.target.value);
    }
    // function to update state of age with value
    // enter by user in form
    const handleAgeChange =(e)=>{
      setAge(e.target.value);
    }
    // function to update state of email with value
    // enter by user in form
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
      // function to update state of password with
      // value enter by user in form
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }
      // function to update state of confirm password
      // with value enter by user in form
    const handleConfPasswordChange =(e)=>{
      setConfPassword(e.target.value);
    }
    // below function will be called when user
    // click on submit button .
    const handleSubmit=(e)=>{
      if(password!=confPassword)
      {
        // if 'password' and 'confirm password'
        // does not match.
        alert("password Not Match");
      }
      else{
        // display alert box with user
        // 'name' and 'email' details .
        alert('A form was submitted with Name :"' + name +
        '" ,Age :"'+age +'" and Email :"' + email + '"');
      }
      e.preventDefault();
 
    }
  return (
    <div className="App" style={{marginLeft:"500px",marginRight:"500px",marginTop:"200px",borderRadius:'80px'}} >
   <h1 > REGISTER HERE</h1>
    <header className="App-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
     {/*when user submit the form , handleSubmit()
        function will be called .*/}
    
  
    
        <label  >
          Name:
        </label><br/>
        <input type="text" placeholder="Enter Your Name" value={name} required onChange={(e) => {handleChange(e)}} style={{width:"400px",height:'50px',borderRadius:"30px",textAlign:"center"}}/><br/>
          { /*when user write in name input box , handleChange()
              function will be called. */}
        <label >
          Age:
        </label><br/>
        <input type="text"  placeholder="Enter Your Age" value={age} required onChange={(e) => {handleAgeChange(e)}} style={{width:"400px",height:'50px',borderRadius:"40px",textAlign:"center"}} /><br/>
            { /*when user write in age input box , handleAgeChange()
               function will be called. */}

<label >
          Phone:
        </label><br/>
        <input type="text" placeholder="Enter Your Phone" required style={{width:"400px",height:'50px',borderRadius:"40px",textAlign:"center"}} /><br/>
        <label >
          Aadhar no:
        </label><br/>
        <input type="text" placeholder="Enter Your Aadhar" required style={{width:"400px",height:'50px',borderRadius:"40px",textAlign:"center"}} /><br/>
        <label >
          PAN no:
        </label><br/>
        <input type="text" placeholder="Enter Your PAN" required style={{width:"400px",height:'50px',borderRadius:"40px",textAlign:"center"}} /><br/>
        <label>
          Email:
        </label><br/>
        <input type="email"  placeholder="Enter Your Email" value={email} required onChange={(e) => {handleEmailChange(e)}} style={{width:"400px",height:'50px',borderRadius:"40px",textAlign:"center"}}/><br/>
          {/* when user write in email input box , handleEmailChange()
              function will be called.*/}
        <label>
          Password:
        </label><br/>
        <input type="password"  placeholder="Passsword" value={password} required onChange={(e) => {handlePasswordChange(e)}}style={{width:"400px",height:'50px',borderRadius:"40px",textAlign:'center'}} /><br/>
              {/* when user write in password input box ,
                  handlePasswordChange() function will be called.*/}
        <label>
          Confirm Password:
        </label><br/>
        <input type="password" placeholder="Confirm Passsword"  value={confPassword} required onChange={(e) => {handleConfPasswordChange(e)}} style={{width:"400px",height:'50px',borderRadius:"40px",textAlign:'center'}}/><br/>
                {/* when user write in confirm password  input box ,
                    handleConfPasswordChange() function will be called.*/}<br/>
        <input type="submit" value="Register" style={{backgroundColor:"cyan"}}/>
      </form>
    </header>
    </div>
  );
}
 
export default App;