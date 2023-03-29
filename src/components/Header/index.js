// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="nav">
    <Link className="link" to="/">
      <img
        src="https://res.cloudinary.com/debxyw0pk/image/upload/v1680022288/TLN_logo_1_rpst9l.png"
        alt="website logo"
      />
    </Link>
    <ul className="nav-items">
      <Link className="link" to="/">
        <li className="li">Home</li>
      </Link>
      <Link className="link" to="./about">
        <li className="li">About</li>
      </Link>
    </ul>
  </div>
)

export default Header
