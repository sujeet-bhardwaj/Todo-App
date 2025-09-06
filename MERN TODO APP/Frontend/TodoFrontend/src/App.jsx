
import "./App.css"
import { Link, Outlet } from 'react-router-dom';
function App() { 
  return (
    <>
     <div className="container">
      <nav className="navbar">
        <Link to="/" > <button className="home">Home </button></Link>
        <Link to="/add" ><button className="add">Add </button></Link>
        <Link to="/edit" ><button className="edit">Edit </button></Link>
        
      </nav>
      <Outlet/>
      </div>
    </>
  )
}
export default App
