import React from 'react'



function Eligible(props) {
    return (
        <div className='Eligible container-fluid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10'>
            <img src={props.img} alt="avatr" />
            <div className='self-center pl-24 md:mt-[-30%]'>
                <h1 className='text-4xl Title text-left pb-2 '>{props.title}</h1>
                <p className='text-justify pl-14'>{props.details}</p>
            </div>
        </div>
    )
}

export default Eligible;