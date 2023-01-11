import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
const Readbook = () => {
    let [books,setbook]=useState([])
    let params=useParams()

    //to get route parameter
    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await fetch(`http://localhost:4000/books/${params.id}`)
            let data=await response.json()
            setbook(data)
        }
        fetchdata()
    },[])
    return ( 
        <div className="readbook">
           <div className="card">
            <h2>{books.title}</h2>
            <div className="cardfooter">
                <p>{books.shortDescription}</p>
                <p>{books.longDescription}</p>
            </div>
           </div>
        </div>
     );
}
 
export default Readbook;