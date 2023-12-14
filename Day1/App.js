import React from 'react';
import Login from './login';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
const App=()=>
{
  return(
    <div className="App">
      <Router>
         <nav>
            <ul>
                <li>
                      <b>Home</b>
                </li>
                <li>
                      <b>About us</b>
                </li>
                <li>
                      <Link to="/login"><b>Login</b></Link>
                </li>
                
            </ul>
         </nav>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>

    </div>
  );
}
export default App;