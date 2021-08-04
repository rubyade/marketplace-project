import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="nav-bar">
      <div className="logo-img">
        <img src="\images\Chicken republic_logo.svg" alt="logo" />
      </div>
      <ul className="look">
        <li>
          <Link className='Link-tag' to='/cart'>Cart</Link>
        </li>
        <li>Login</li>
        <li>
          <button className='btn--alt'>Signup</button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
