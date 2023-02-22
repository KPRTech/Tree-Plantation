import React from 'react'

const Reforestation = () => {
    return (
        <div>
            <h1 className='text-4xl mt-5 mb-6'>REFORESTATION STORIES</h1>
            <div className='container-fluid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-1 ' >
                <div className='w-full lg:max-w-full overflow-x-hidden'>
                    <iframe width="550" height="300" src="https://www.youtube.com/embed/_BIMrbY2SeA"
                        title="Restoring Legacy Mined Lands in Appalachia | One Tree Planted" frameBorder="0" allow="accelerometer; 
                         autoplay; 
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3 className='mb-4'>CHIPPEWA NATIONAL FOREST | MINNESOTA</h3>

                </div>
                <div className='w-full lg:max-w-full overflow-x-hidden'>
                    <iframe width="550" height="300" src="https://www.youtube.com/embed/_BIMrbY2SeA"
                        title="Restoring Legacy Mined Lands in Appalachia | One Tree Planted" frameBorder="0" allow="accelerometer; 
                         autoplay; 
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    {/* <h1 className='text-3xl font-bold mb-4'>GUATEMALA</h1> */}
                    <h3 className='mb-4'>PLANTING 1 MILLION TREES | BRITISH COLUMBIA</h3>

                </div>
            </div>
        </div>
    )
}

export default Reforestation