import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/userlogin.css'
const Userlogin = () => {
    let[email,setemail]=useState('')
    let[password,setpassword]=useState('')
    let navigate=useNavigate()
    let login=(e)=>{
        e.preventDefault()
        navigate('/user/')
    }
    let backtolandingpage=()=>{
        navigate('/')
    }
    return ( 
        <div className="userlogin">
            <div className="form">
                
                <div className="forminput">
                    <form onSubmit={login}>
                    <h1>Login as User</h1>
                        <div className="up">
                        <div className="email">
                        <label htmlFor="">Email</label>
                        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter email"/>
                        </div>
                        <div className="password">
                        <label htmlFor="">Password</label>
                        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter password"/>
                        </div>
                        </div>
                        <button className="btn-btn-primary">Login</button>
                        <button className="back" type="button" onClick={backtolandingpage}>Back</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Userlogin;