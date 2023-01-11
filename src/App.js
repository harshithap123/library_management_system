import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Landingpage from './components/landingpage';
import Adminlogin from './components/adminlogin';
import Userlogin from './components/userlogin';

import Adminportal from './components/adminportal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/admin-login' element={<Adminlogin/>}/>
      <Route path='/user-login' element={<Userlogin/>}/>
      <Route path='/admin/*' element={<Adminportal/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
