import React from "react";
import { BsChevronDown } from 'react-icons/bs';
import Button from "./Button"
import subitem from "./subitem";

function ButtonCard1(props){
    return (
        <div className="">
            <div className="uppercase text-gray-300 font-normal flex items-center h-12 px-2 float-left overflow-hidden group">
                <a className="flex items-center hover:text-white " href="">{props.item} <BsChevronDown className="ml-1" /></a>
                <div className="hidden absolute text-gray-300 top-24 bg-gray-800 opacity-90 w-64 z-10 group-hover:block hover:">
                    <Button link={subitem[18].subLink} subItem={subitem[18].subItem} />
                    <Button link={subitem[19].subLink} subItem={subitem[19].subItem} />
                    <Button link={subitem[20].subLink} subItem={subitem[20].subItem} />
                </div>
            </div>  
        </div>
    );
}

export default ButtonCard1;