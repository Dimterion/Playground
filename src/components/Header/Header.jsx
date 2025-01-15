import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header-menu__wrapper">
      <div className="header-menu__bar">
        <Link to="/" className="header-logo">
          PG
        </Link>
        <nav>
          <ul className="header-navigation header-hide">
            <li>
              <button>Menu</button>
              <div className="header-dropdown__wrapper">
                <div className="header-dropdown">
                  <ul className="header-ul">
                    <li>
                      <div className="header-item-title">
                        <h3>Item</h3>
                        <p>Item description</p>
                      </div>
                    </li>
                    <li>
                      <div className="header-item-title">
                        <h3>Item</h3>
                        <p>Item description</p>
                      </div>
                    </li>
                    <li>
                      <div className="header-item-title">
                        <h3>Item</h3>
                        <p>Item description</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
