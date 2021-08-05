import { Link } from "react-router-dom";
import classes from './Header.module.css'

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src="\images\Chicken republic_logo.svg" alt="logo" />
      </div>
      <nav className="nav-bar">
        <ul className="look">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart"> Cart</Link>
          </li>
          <li>
            <Link>
              <button classname={classes.headerbtn}>Signup</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
