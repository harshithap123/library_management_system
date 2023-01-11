import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addbooks.css'
const Addbooks = () => {
    let [title,settitle]=useState("")
    let [categories,setcategory]=useState("")
    let [authors,setauthor]=useState("")
    let [pageCount,setpage]=useState("")
    let [shortDescription,setshort]=useState("")
    let [longDescription,setlong]=useState("")
    let [thumbnailUrl,seturl]=useState("")

    let navigate=useNavigate()

    let handlesubmit=(e)=>{
        e.preventDefault();  //prevents from reloading

        //data to be posted
        let bookdata={title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl}
        
        //posting to server
        fetch('http://localhost:4000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookdata)
        })
        alert('Book added successfully')
        navigate('/admin/book-list')
    }
    return ( 
        <div className="addbooks">
            <h1>Adding books</h1>
            <div className="form">
                <form action="" onSubmit={handlesubmit}>
                    <div className="title">
                        <input value={title} onChange={(e)=>settitle(e.target.value)} type="text" required placeholder="title of the book" />
                    </div>
                    <div className="authors">
                        <input value={authors} onChange={(e)=>setauthor(e.target.value)} type="text" required placeholder="author of the book" />
                    </div>
                    <div className="categories">
                        <input value={categories} onChange={(e)=>setcategory(e.target.value)} type="text" required placeholder="category of the book" />
                    </div>
                    <div className="pageCount">
                        <input value={pageCount} onChange={(e)=>setpage(e.target.value)} type="number" min={0} required placeholder="page count" />
                    </div>
                    <div className="shortDescription">
                        <textarea cols={39} value={shortDescription} onChange={(e)=>setshort(e.target.value)} placeholder="short description of the book"></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea cols={39} value={longDescription} onChange={(e)=>setlong(e.target.value)} placeholder="long description of the book"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input value={thumbnailUrl} onChange={(e)=>seturl(e.target.value)} type="text" placeholder="thumbnail" />
                    </div>
                    <button>Add Book</button>
                </form>
            </div>
        </div>
     );
}
 
export default Addbooks;