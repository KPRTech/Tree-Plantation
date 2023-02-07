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
                    <Button link={subitem[13].subLink} subItem={subitem[13].subItem} />
                    <Button link={subitem[14].subLink} subItem={subitem[14].subItem} />
                    <Button link={subitem[15].subLink} subItem={subitem[15].subItem} />
                    <Button link={subitem[16].subLink} subItem={subitem[16].subItem} />
                    <Button link={subitem[17].subLink} subItem={subitem[17].subItem} />
                </div>
            </div>  
        </div>
    );
}

export default ButtonCard1;