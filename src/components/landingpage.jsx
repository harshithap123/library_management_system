import { Link } from "react-router-dom";
import '../styles/landingpage.css'
const Landingpage = () => {
    return(
        <div className="landingpage">
            <div className="main">
                <h1>Library Management System</h1>
                <div className="admin">
                    
                    <img src="images/adminimg.png" height='80px' width='70px' alt="" /><br /><br />
                    <Link to='/admin-login' className="adminlink">Admin Login</Link>
                </div>
                <div className="user">
                    
                    <img src="images/userimg.png" height='80px' width='70px' alt="" /><br /><br />
                    <Link to='/user-login' className="userlink">User Login</Link>

                </div>
            </div>
        </div>
    );
}
export default Landingpage;
