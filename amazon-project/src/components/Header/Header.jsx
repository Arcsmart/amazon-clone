import React, { useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import Lowerheader from './Lowerheader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/Dataprovider';
const Header = () => {
  const [state]=useContext(DataContext)
    const basket = state.basket;

  return (
    
      <section className={classes.fixed}>
        <div className={classes.header_container}>
          {/* logo */}
          <div className={classes.logo_container}>
            <Link to="#">
              <img src="https://pngimg.com/d/amazon_PNG11.png" alt="" />
            </Link>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search section*/}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" id="" placeholder="Sarch product" />
            <FaSearch size={25} />
          </div>
          {/* right side link */}
          <div className={classes.order_container}>
            <Link to="" className={classes.language}>
              <img
                src="https://img.freepik.com/free-photo/united-states-america-flag-background_23-2148157263.jpg?t=st=1738157917~exp=1738161517~hmac=4c4032e97196db72710ecbb092e1d31639a7b9c2f3dcfb7c55cc6d1d54690899&w=900"
                alt="flag of usa"
              />
              <select>
                <option value="">EN</option>
              </select>
            </Link>
            {/* three components */}
            <Link to="">
              <div>
                <p>Hello,sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{basket.length}</span>
            </Link>
          </div>
        </div>
        <Lowerheader />
      </section>
    
  );
}

export default Header