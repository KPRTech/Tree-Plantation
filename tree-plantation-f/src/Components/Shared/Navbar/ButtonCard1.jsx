import React from "react";
import { BsChevronDown } from 'react-icons/bs';
import { Link } from "react-router-dom";
import Button from "./Button"
import subitem from "./subitem";

function ButtonCard1(props){
    return (
        <div className="">
            <div className="uppercase text-gray-300 font-normal flex items-center h-12 px-2 float-left overflow-hidden group">
                <Link className="flex items-center hover:text-white " to={'/'}>{props.item} <BsChevronDown className="ml-1" /></Link>
                <div className="hidden absolute text-gray-300 top-24 bg-gray-800 opacity-90 w-64 z-10 group-hover:block hover:">
                    <Button link={subitem[0].subLink} subItem={subitem[0].subItem} />
                    <Button link={subitem[1].subLink} subItem={subitem[1].subItem} />
                    <Button link={subitem[2].subLink} subItem={subitem[2].subItem} />
                    <Button link={subitem[3].subLink} subItem={subitem[3].subItem} />
                    <Button link={subitem[4].subLink} subItem={subitem[4].subItem} />
                    <Button link={subitem[5].subLink} subItem={subitem[5].subItem} />
                </div>
            </div>  
        </div>
    );
}

export default ButtonCard1;