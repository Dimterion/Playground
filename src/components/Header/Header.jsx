import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import "./header.css";

export default function Header() {
  return (
    <Link to="/" aria-label="Back to home page" className="header-link">
      <FaBackward />
    </Link>

    // <header className="header-menu__wrapper">
    //   <div className="header-menu__bar">
    //     <Link to="/" className="header-logo">
    //       PG
    //     </Link>
    //     <nav>
    //       <ul className="header-navigation header-hide">
    //         <li>
    //           <button>Menu</button>
    //           <div className="header-dropdown__wrapper">
    //             <div className="header-dropdown">
    //               <ul className="header-ul">
    //                 <li>
    //                   <div className="header-item-title">
    //                     <h3>Item</h3>
    //                     <p>Item description</p>
    //                   </div>
    //                 </li>
    //                 <li>
    //                   <div className="header-item-title">
    //                     <h3>Item</h3>
    //                     <p>Item description</p>
    //                   </div>
    //                 </li>
    //                 <li>
    //                   <div className="header-item-title">
    //                     <h3>Item</h3>
    //                     <p>Item description</p>
    //                   </div>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </li>
    //         <li>
    //           <button>Menu</button>
    //           <div className="header-dropdown__wrapper">
    //             <div className="header-dropdown">
    //               <ul className="header-ul">
    //                 <li>
    //                   <div className="header-item-title">
    //                     <h3>Item</h3>
    //                     <p>Item description</p>
    //                   </div>
    //                 </li>
    //                 <li>
    //                   <div className="header-item-title">
    //                     <h3>Item</h3>
    //                     <p>Item description</p>
    //                   </div>
    //                 </li>
    //                 <li>
    //                   <div className="header-item-title">
    //                     <h3>Item</h3>
    //                     <p>Item description</p>
    //                   </div>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </li>
    //         <li>
    //           <button>Menu</button>
    //           <div className="header-dropdown__wrapper">
    //             <div className="header-dropdown">
    //               <ul className="header-ul">
    //                 <li>
    //                   <div className="header-item-title">
    //                     <h3>Item</h3>
    //                     <p>Item description</p>
    //                   </div>
    //                 </li>
    //                 <li>
    //                   <div className="header-item-title">
    //                     <h3>Item</h3>
    //                     <p>Item description</p>
    //                   </div>
    //                 </li>
    //                 <li>
    //                   <div className="header-item-title">
    //                     <h3>Item</h3>
    //                     <p>Item description</p>
    //                   </div>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    //   <div className="header-action-buttons header-hide">
    //     <Link to="/" className="header-secondary-btn">
    //       Home
    //     </Link>
    //     <Link to="/" className="header-primary-btn">
    //       Home
    //     </Link>
    //   </div>
    //   <button
    //     aria-label="Open menu"
    //     className="header-menu__btn"
    //     type="button"
    //   >Menu</button>
    // </header>
  );
}
