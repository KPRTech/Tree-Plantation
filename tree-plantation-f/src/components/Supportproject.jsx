import React from 'react'

const Supportproject = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold mb-2'>SUPPORT A PROJECT</h1>
            <p className='mb-6'>We work with reforestation organizations to make their tree planting projects happen. <br />
                Choose a region and donate to a project you're passionate about. Every dollar plants one tree!</p>
            <div className='container-fluid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 mb-8 '>
                <div className='transition duration-500 hover:scale-110'>
                    <img src="https://cdn.shopify.com/s/files/1/0326/7189/files/North_America_header.jpg?6091816391036549589" alt='error' />
                </div>
                <div className='transition duration-500 hover:scale-110'>
                    <img src="https://cdn.shopify.com/s/files/1/0326/7189/files/Latin_America_header.jpg?6091816391036549589" alt='error' />
                </div>
                <div className='transition duration-500 hover:scale-110'>
                    <img src="https://cdn.shopify.com/s/files/1/0326/7189/files/Africa_header.jpg?6091816391036549589" alt='error' />
                </div>
                <div className='transition duration-500 hover:scale-110'>
                    <img src="https://cdn.shopify.com/s/files/1/0326/7189/files/Asia_header.jpg?6091816391036549589" alt='error' />
                </div>
            </div>

        </div>
    )
}

export default Supportproject