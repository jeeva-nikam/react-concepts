// import { useState } from "react";
import { useEffect, useState } from "react"
import { Link } from "react-router";



const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="res-logo">
                <img alt="res-logo" width="150px"  src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-Download-scaled.jpg"></img>
            </div>
            <div className="menu-list">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/items">Items</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button onClick={()=>{
                       setBtnName(btnName == "Login"? "Log out" : "Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;