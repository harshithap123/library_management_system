import { NavLink } from 'react-router-dom';
import '../styles/usernavbar.css'
const Usernavbar = () => {
    return ( 
         <div className="umainnav">
            <div className="usernav">
            <h1>USER PORTAL</h1>
           <div className="unavele">
            <NavLink activeClassName="active" to='/user/' className='links'>DASHBOARD</NavLink>
            <NavLink activeClassName="active" to='/user/book-list' className='links'>BOOK LIST</NavLink>
            <NavLink activeClassName="active" to='/' className='links'>LOGOUT</NavLink>
           </div>
           </div>
        </div>
     );
}
 
export default Usernavbar;