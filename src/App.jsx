import React,{ useState } from "react";
import "./App.css";

function App() {
  let [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    file:"",
    url:"",
    choice:"",
  });
  function preventSubmitForm(e) {
    e.preventDefault();
  }
  function formHandler(e) {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data,
      [e.target.name]: value,
    });
    console.log(data);
  }
 

  return (
    <>

          <p>Name:{data.name}</p>
            <p>Email:{data.email}</p>
            <p>Number:{data.number}</p>
            <p>File:{data.file}</p>
            <p>Url:{data.url}</p>
            <p>Choice:{data.choice}</p>
         
      
      <div className="form-box">

        
        <form onSubmit={preventSubmitForm}>
          <h1>Form In React</h1>
          <label htmlFor="firstName">First Name</label>
          <br />
          <input
            name="name"
            defaultValue={data.name}
            id="firstName"
            type="text"
            placeholder="Enter your Name"
            onChange={formHandler}
          />
          
          <br />
          <label htmlFor="email">Enter your email</label>
          <br />
          <input
            onChange={formHandler}
            id="email"
            name="email"
            type="email"
            defaultValue={data.email}
            placeholder="Enter your email"
          />
          <br />
          <label htmlFor="number">Number</label>
          <br />
          <input
            onChange={formHandler}
            id="number"
            name="number"
            type="number"
            placeholder="Enter your contact number"
            defaultValue={data.number}
          />
          <br />
          <span>Gender</span>
          <div>
            <input
              onChange={formHandler}
              type="radio"
              name="gender"
              id="male"
            />
            <label htmlFor="male">Male</label>
            <input
              onChange={formHandler}
              defaultValue="male"
              type="radio"
              name="gender"
              id="fmale"
            />
            <label htmlFor="fmale">Female</label>
            <input
              onChange={formHandler}
              defaultValue="female"
              type="radio"
              name="gender"              
              id="others"
            />
            <label htmlFor="others">Others</label>
          </div>
          <span>Your Best Subject</span>
          <div>
            <input defaultValue={"ICT"} type="checkbox" name="subject" id="ict" />
            <label htmlFor="ict">ICT</label>
            <input type="checkbox" name="subject" id="english" />
            <label htmlFor="english">English</label>
            <input type="checkbox" name="subject" id="maths" />
            <label htmlFor="maths">Maths</label>
          </div>
          <label htmlFor="resume">Upload Resume</label>
          <div>
            <input
              onChange={formHandler}
              type="file"
              name="file"
              accept="pdf"
              id="resume"
              defaultValue={data.file}
            />
          </div>
          <label htmlFor="url">Url</label>
          <br />
          <input
            onChange={formHandler}
            placeholder="Enter web url"
            type="url"
            defaultValue={data.url}
            name="url"
            id="url"
          />
          <br /> <br />
          <label htmlFor="choice">Select Your Choice</label>
          <br />
          <select onChange={formHandler} defaultValue={data.choice} name="choice" id="choice">
            <option defaultValue="development">Development</option>
            <option defaultValue="Coding">Coding</option>
          </select>
          <br />
          <br />
          <p className="sub">Submit or Reset</p>
          <br />
          <div className="buttons">
            <button onClick={()=>alert(data)} type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
