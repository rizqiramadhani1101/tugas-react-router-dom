
import './App.css';
import {Link, Outlet} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <br />
      <nav>
        <Link to="/home"  className='link'>Home</Link>
        <Link to="/About" className='link'>About</Link>
        <Link to="/Galery"  className='link'>Galery</Link>
        <Link to="/Footer"  className='link'>Footer</Link>
      </nav>
      <Outlet />
      <h1>Belajar Bikin Router</h1>
    </div>
  );
}

export default App;
