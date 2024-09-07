import { Link ,withRouter} from "react-router-dom";
import './index.css'

const Header = props =>{
  const loginPageDirection = () =>{
    const {history} = props
    history.replace('/login')
    
  }
  return (
  <div className="main-header-container">
    <img src="https://mvg-innovations.com/wp-content/uploads/2024/08/cropped-MVG-INNOVATIONS_20240724_174603_0000-1.png" className="logo" alt="logo" />
     <ul className="nav-menu">
       <li className="list-element">
         <Link className="nav-link" to="/">Home</Link>
       </li>
       <li  className="list-element">
         <a className="nav-link" href="#about">About</a>
       </li>
       <li  className="list-element">
         <a className="nav-link" href="#contact">Contact</a>
       </li>
     </ul>
     <Link to="/login"  className="nav-link">
     <button type="button" className="login-button" onClick={loginPageDirection}>Login</button>
     </Link>
     </div>
)
}

export default withRouter(Header) 