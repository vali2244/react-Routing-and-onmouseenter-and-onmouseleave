

import { useState } from "react"
import  "./login.css"

const Login = () => {

  const [email,Setemail]=useState(``)
  const [password,Setpassword]=useState(``)
  const mybutton=()=>{
    
    if(email==="vali@gmail.com"&& password==="12345"){
      console.log(email,password)
      alert("succes")
    }
    else{
      alert("worang email && password")
    }
  }
  

  return (
    <div className="mylogin">
        <div className="form">
            <input onChange={(e)=>Setemail(e.target.value)} type="email" placeholder="Enter email" className="em1" />
            <input onChange={(p)=>Setpassword(p.target.value)} type="password" placeholder="password"  className="ps1"/>  
            <button className="b1"onClick={mybutton} >Submit</button>
        </div>
    </div>
  )
}

export default Login