import { useEffect, useState } from "react";
import '../styles/userlist.css'
const Userlist = () => {
    let[users,setusers]=useState([])

    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await fetch('http://localhost:4000/users')
            let data=await response.json()
            setusers(data)
        }
        fetchdata()
    },[])
    let handleremove=(id)=>{
        setusers(users.filter(x=>x.id!=id))
        alert(`User ${id} will be deleted`)
    }
    return ( 
        <div className="userlist">
            <h1 style={{"textAlign":"center"}}>User List</h1>
            <div className="usersection">
                {users.map(data=>(
                    <div className="usercard">
                        <h2>Name: {data.name}</h2>
                        <h4>Age: {data.age}</h4>
                        <h4>Email: {data.email}</h4>
                        <h4>Phone Number: {data.phno}</h4>
                        <button onClick={()=>handleremove(data.id,data.name)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Userlist;