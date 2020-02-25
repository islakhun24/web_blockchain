import React from 'react';
import { Link } from 'react-router-dom';
function Header() {

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="fake_url"><i className="fas fa-bars" /></a>
        </li>
      </ul>
    </nav>

  );
}

export default Header;




// import React from 'react';
// import './App.css';
// import { Link } from 'react-router-dom';

// function Nav() {
//   const navStyle = {
//     color:'white',
//   };

//   return (
//     <nav>
//         <h3>Logo</h3>
//         <ul className="nav-links">
//             <Link style={navStyle} to="/about">
//               <li>Abouts</li>
//             </Link>
//             <Link style={navStyle} to="/shop">
//               <li>Shop</li>
//             </Link>
//         </ul>
//     </nav>
//   );
// }

// export default Nav;
