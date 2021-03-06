import React from 'react';
import './Navbar.scss';
import {Link} from 'gatsby';
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";


import Logo from './Logo';
import SideNavbar from './sidenavbar/SideNavbar';

const Navbar=() =>{
    return (
        <>
                    <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <Logo/>
                <button className="navbar-toggler d-none  d-xl-none d-md-none  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
                </button>
                <SideNavbar />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto  mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link px-2 Navspace__1 " aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle Navspace__1 " to="/Project" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Projects
                       <FaAngleDown className="anglebtn__1"/>
                    </Link>
                    <ul className="dropdown-menu droph__2" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item py-2 ms-2" href="#">Commercial Building</a></li>
                        <li><a className="dropdown-item ms-2" href="#">Cultural Lifestyle</a></li>
                        
                        <li><a className="dropdown-item" href="#">
                        <li className="nav-item dropdown subdrop__1">
                    <li className="nav-link dropdown-toggle  "  id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className=" dropword__1" >  Dropdown 
                        </span>< FaAngleRight className="anglebtn__2"/>
                    </li>
                    <ul className="dropdown-menu droph__1" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item pb-2" href="#"> Sub Menu one</a></li>
                        <li><a className="dropdown-item pb-2" href="#"> Sub Menu two</a></li>
                        
                        <li><a className="dropdown-item" href="#"> Sub Menu three</a></li>
                    </ul>
                    </li>
                            
                        </a></li>
                    </ul>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link Navspace__1 " to="/Services">Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link Navspace__1 " to="/About">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link Navspace__1 " to="/Contact">Contact us</Link>
                    </li>
                    
                </ul>
                <div className="d-flex justify-content-end">
                    <Link className=" text-white text-decoration-none Navspace__1 Navsicon__2  "> <FaPhoneAlt /> + 2 292 4392 327</Link>
                </div>
                </div>
            </div>
            </nav> 
        </>
    )
}

export default Navbar;
