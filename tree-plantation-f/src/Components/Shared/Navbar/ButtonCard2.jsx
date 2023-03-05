import React from "react";
import { BsChevronDown } from 'react-icons/bs';
import { Link } from "react-router-dom";
import Button from "./Button";
import SideButton from "./SideButton";
import subitem from "./subitem";

function ButtonCard1(props){
    return (
        <div className="">
            <div className="uppercase text-gray-300 font-normal flex items-center h-12 px-2 float-left overflow-hidden group">
                <Link className="flex items-center hover:text-white" to={'/'}>{props.item} <BsChevronDown className="ml-1" /></Link>
                <div className="hidden absolute text-gray-300 top-24 bg-gray-800 opacity-90 w-64 z-10 group-hover:block">
                    <SideButton link={subitem[6].subLink} subItem={subitem[6].subItem} /> 
                    <Button link={subitem[7].subLink} subItem={subitem[7].subItem} />
                    <Button link={subitem[8].subLink} subItem={subitem[8].subItem} />
                    <Button link={subitem[9].subLink} subItem={subitem[9].subItem} />
                    <Button link={subitem[10].subLink} subItem={subitem[10].subItem} />
                    <Button link={subitem[11].subLink} subItem={subitem[11].subItem} />
                    <Button link={subitem[12].subLink} subItem={subitem[12].subItem} />
                </div>
            </div>  
        </div>
    );
}

export default ButtonCard1;