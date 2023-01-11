import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Addusers = () => {
    let [name,setname]=useState("")
    let [age,setage]=useState("")
    let [email,setemail]=useState("")
    let [phno,setphno]=useState("")

    let navigate=useNavigate()

    let handlesubmit=(e)=>{
        e.preventDefault();  //prevents from reloading

        //data to be posted
        let userdata={name,age,email,phno}
        
        //posting to server
        fetch('http://localhost:4000/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userdata)
        })
        alert('User added successfully')
        navigate('/admin/user-list')
    }
    return ( 
        <div className="addusers">
            <h1>Add users</h1>
            <div className="form">
                <form action="" onSubmit={handlesubmit}>
                    <div className="name">
                        <input value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder="name of the user" />
                    </div>
                    <div className="age">
                        <input value={age} onChange={(e)=>setage(e.target.value)} min={10} type="number" placeholder="age of the user" />
                    </div>
                    <div className="useremail">
                        <input value={email} onChange={(e)=>setemail(e.target.value)} type="text" placeholder="email of the user" />
                    </div>
                    <div className="phno">
                        <input value={phno} onChange={(e)=>setphno(e.target.value)} type="tel" placeholder="phone number of the user" min={10} max={10}/>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Addusers;