import React from 'react'

const Whatcan = (props) => {
    return (
        <div className='whatcan container-fluid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10'>
            <div className='self-center md:mt-[-1%]'>
                <h1 className='text-4xl Title text-left pb-2 '>{props.title}</h1>
                <p className='text-justify pl-24 pr-16 pb-16'>{props.details}</p>
            </div>
            <img src={props.img} alt="avatr" />
        </div>
    )
}

export default Whatcan