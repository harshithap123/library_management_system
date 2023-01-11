import '../styles/adminnavbar.css'
import { NavLink } from 'react-router-dom';
const Adminnavbar = () => {
    return ( 
        <div className="mainnav">
            <div className="adminnav">
            <h1>ADMIN PORTAL</h1>
           <div className="navele">
            <NavLink activeClassName="active" to='/admin/' className='links'>DASHBOARD</NavLink>
            <NavLink activeClassName="active" to='/admin/add-books' className='links'>ADD BOOKS</NavLink>
            <NavLink activeClassName="active" to='/admin/add-users' className='links'>ADD USERS</NavLink>
            <NavLink activeClassName="active" to='/admin/book-list' className='links'>BOOK LIST</NavLink>
            <NavLink activeClassName="active" to='/admin/user-list' className='links'>USER LIST</NavLink>
            <NavLink activeClassName="active" to='/' className='links'>LOGOUT</NavLink>
           </div>
        </div>
        </div>
        
     );
}
 
export default Adminnavbar;