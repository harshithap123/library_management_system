import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import '../styles/booklist.css'
const Booklist = () => {
    let[books,setbooks]=useState([])

    //to fetch the route variable
    let location=useLocation()

    useEffect(()=>{
        let fetchdata=async()=>{
            let response=await fetch('http://localhost:4000/books')
            let data=await response.json()
            setbooks(data)
        }
        fetchdata()
    },[books])

    //delete a book from server
    let handleremove=(id,title)=>{
        fetch(`http://localhost:4000/books/${id}`,{
            method:'Delete'
        })
        alert(`'${title}' will be deleted permanently`)
    }
    let navigate=useNavigate()
    let read=(id)=>{
        if (location.pathname=='/admin/book-list') {
            navigate(`/admin/book-list/${id}`);
        } else {
            navigate(`/user/book-list/${id}`);
        }
    }
    return ( 
        <div className="booklist">
            <h1 style={{"textAlign":"center"}}>Book List</h1>
            <h2 style={{"textAlign":"center"}}>Number of Books: {books.length}</h2>
            <div className="bookssection">
                {books.map(data=>(
                    <div className="bookcard">
                        <div className="img">
                        <img src={data.thumbnailUrl} style={{"height":"215px","width":"150px"}} alt="" />
                        </div>
                        <u><h2 style={{"margin-left": "160px"}}>Title: {data.title}</h2></u>
                        <h4 style={{"margin-left": "160px"}}>Authors: {data.authors}</h4>
                        <h4 style={{"margin-left": "160px"}}>Category: {data.categories}</h4>
                        <h4 style={{"margin-left": "160px"}}>Page Count: {data.pageCount}</h4>
                        <button style={{"margin-left": "160px"}} onClick={()=>read(data.id)}>Read More</button>
                        {location.pathname=='/admin/book-list' && <button onClick={()=>handleremove(data.id,data.title)} style={{"margin-left": "10px"}}>Delete</button>}

                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Booklist;