import React from "react";
import { BsChevronDown } from 'react-icons/bs';
import { Link } from "react-router-dom";
import Button from "./Button";
import subitem from "./subitem";

function ButtonCard1(props){
    return (
        <div className="">
            <div className="uppercase text-gray-300 font-normal flex items-center h-12 px-2 float-left overflow-hidden group">
                <Link className="flex items-center hover:text-white roboto text-sm" to={'/'}>{props.item} <BsChevronDown className="ml-1" /></Link>
                <div className="hidden absolute text-gray-300 top-24 bg-gray-800 opacity-90 w-64 z-10 group-hover:block">
                    <Button link={subitem[21].subLink} subItem={subitem[21].subItem} />
                    <Button link={subitem[22].subLink} subItem={subitem[22].subItem} />
                    <Button link={subitem[23].subLink} subItem={subitem[23].subItem} />
                </div>
            </div>  
        </div>
    );
}

export default ButtonCard1;