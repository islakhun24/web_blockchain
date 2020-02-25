import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="/">
        <a href="/" className="brand-link">
          {/* <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> */}
          <center>
            <span className="brand-text font-weight-light">Web BlockChain</span>
          </center>
        </a>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
            with font-awesome or any other icon font library */}
            <li className="nav-item">
            <Link to="/about">
              <a href="/about" className="nav-link">
                <i className="nav-icon fas fa-pencil-alt" />
                <p>
                  Input Data
                </p>
              </a>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/about">
              <a href="/about" className="nav-link">
                <i className="nav-icon fas fa-desktop" />
                <p>
                  Add Node
                </p>
              </a>
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/data">
              <a href="/data" className="nav-link">
                <i className="nav-icon fas fa-file" />
                <p>
                  Data
                </p>
              </a>
            </Link>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>

  );
}

export default Menu;




