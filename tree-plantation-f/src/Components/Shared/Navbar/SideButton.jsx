import React from "react";
import { BsChevronRight } from 'react-icons/bs';
import Button from "./Button"
import subitem from "./subitem";
import './navbar.css'
import { Link } from "react-router-dom";

function SideButton(props){
    return (
        <div className="uppercase flex items-center sidebar">
            <Link className="flex items-center justify-between hover:text-white w-full px-5 py-3" to={props.link}>{props.subItem} <BsChevronRight className="ml-1" /></Link>
            <div className="hidden absolute text-gray-300 inset-x-64 top-0 bg-gray-800 opacity-90 w-64 z-30">
                <Button link={subitem[24].subLink} subItem={subitem[24].subItem} />
                <Button link={subitem[25].subLink} subItem={subitem[25].subItem} />
            </div>
        </div> 
    );
}

export default SideButton;