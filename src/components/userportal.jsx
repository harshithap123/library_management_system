import { Routes,Route } from "react-router-dom";
import Booklist from "./booklist";
import Usernavbar from "./usernavbar";
import Userdashboard from "./userdashboard";
import Readbook from "./readbook";
const Userportal = () => {
    return ( 
        <div className="userportal">
            <Usernavbar/>
            <Routes>
                <Route path="/" element={<Userdashboard/>}/>
                <Route path="/book-list" element={<Booklist/>}/>
                <Route path="/book-list/:id" element={<Readbook/>}/>
            </Routes>
        </div>
     );
}
 
export default Userportal;