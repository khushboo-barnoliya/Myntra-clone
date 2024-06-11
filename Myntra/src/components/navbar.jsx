import logo from '../assets/img/myntra1.png'
import { MdOutlineSearch } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { LuHeart } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import "./css/App.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-xl bg-white p-0 px-5" id='header'>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} width={50} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse w-75 navbar-collapse justify-content-between ms-3" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex justify-content-start align-items-center">
                        <li className="nav-item navItem px-3" id='navItem1'>
                            <Link to="/men" className="nav-link fw-bold text-uppercase fw-bolder p-0 py-4" >men</Link>
                        </li>
                        <li className="nav-item navItem px-3" id='navItem2'>
                            <a className="nav-link fw-bold text-uppercase fw-bolder p-0 py-4" href="#">women</a>
                        </li>
                        <li className="nav-item navItem px-3" id='navItem3'>
                            <a className="nav-link fw-bold text-uppercase fw-bolder p-0 py-4" href="#">kids</a>
                        </li>
                        <li className="nav-item navItem px-3" id='navItem4'>
                            <a className="nav-link fw-bold text-uppercase fw-bolder p-0 py-4" href="#">home & living</a>
                        </li>
                        <li className="nav-item navItem px-3" id='navItem5'>
                            <a className="nav-link fw-bold text-uppercase fw-bolder p-0 py-4" href="#">beauty</a>
                        </li>
                        <li className="nav-item navItem px-3" id='navItem6'>
                            <a className="nav-link fw-bold text-uppercase fw-bolder p-0 py-4" href="#">studio</a>
                        </li>
                    </ul>

                    <form className="d-flex bg-secondary-subtle bg-opacity-75 rounded-2" id="searchMain" role="search">
                        <span className="d-flex justify-content-center align-items-center ps-3"><MdOutlineSearch className="fs-4" /></span>
                        <input className="form-control border-0 bg-transparent" id="inputSearch" type="search" placeholder="Search for products, brands and more" />
                    </form>

                    <div className="profile d-flex justify-content-center align-items-center gap-4">
                        <span className="d-flex flex-column align-items-center"><span><BiUser className="fs-5" /></span><span className="fw-bold text-capitalize icons">profile</span></span>

                        <span className="d-flex flex-column align-items-center"><span><LuHeart className="fs-5" /></span><span className="fw-bold text-capitalize icons">wishlist</span></span>

                        <Link to="/bag" className="d-flex flex-column align-items-center text-decoration-none text-black"><span><HiOutlineShoppingBag className="fs-5" /></span><span className="fw-bold text-capitalize icons">bag</span></Link>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar