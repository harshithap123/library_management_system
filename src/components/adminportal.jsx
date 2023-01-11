import Adminnavbar from "./adminnavbar";
import {Routes,Route} from 'react-router-dom'
import Admindashboard from "./admindashboard";
import Booklist from "./booklist";
import Userlist from "./userlist";
import Readbook from "./readbook";
import Addusers from "./addusers";
import Addbooks from "./addbooks";
const Adminportal = () => {
    return ( 
        <div className="adminportal">
            <Adminnavbar/>
            <Routes>
                <Route path="/" element={<Admindashboard/>}/>
                <Route path="/book-list" element={<Booklist/>}/>
                <Route path="/book-list/:id" element={<Readbook/>}/>
                <Route path="/user-list" element={<Userlist/>}/>
                <Route path="/add-users" element={<Addusers/>}/>
                <Route path="/add-books" element={<Addbooks/>}/>
            </Routes>
            
        </div>
     );
}
 
export default Adminportal;