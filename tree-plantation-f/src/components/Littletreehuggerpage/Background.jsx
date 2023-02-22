import React from 'react'

const Background = () => {
    return (
        <div>
            <div className='relative background'>
                <img src='https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/littletreehuggerhero-1662070523398.jpg?v=1662070525' alt='error' />
                <h1 className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> <span className='text-6xl font-bold font-system-ui'>LITTLE TREE HUGGERS</span>
                    <span><h3 className='text-base font-bold mb-14 mt-6'>GRANT FUNDING FOR THE WORLD’S MOST PROMISING ENVIRONMENTALISTS: 5-12 YEAR OLDS</h3></span> <span><a href='https://onetreeplanted.org/pages/meet-the-team' className="bg-red-500 hover:bg-red-400 text-white font-bold px-12 py-3 rounded w-full">APPLY NOW</a> </span>
                </h1>
            </div>
        </div>
    )
}

export default Background