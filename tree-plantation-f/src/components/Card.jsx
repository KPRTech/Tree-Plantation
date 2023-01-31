import React from 'react'


const Card = () => {
    return (
        <div>
            <div className="container-fluid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1 mb-5">

                <div className="w-full sm:max-w-full lg:max-w-full overflow-x-hidden">
                    <div >
                        <iframe width="350" height="200" src="https://www.youtube.com/embed/KOqv0g1xdPQ" title="Reforestation in the Amazon 
                     One 
                  Tree Planted + World Resources Institute" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- 
                   media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div>
                        <h3 className='mt-2'>REFORESTATION IN THE AMAZON | PERU</h3>
                    </div>
                </div>
                <div className="w-full lg:max-w-full  overflow-x-hidden">
                    <div>
                        <iframe width="350" height="200" src="https://www.youtube.com/embed/-pVShx6BXIU" title="Reforestation in Michigan 
                         with the U.S. Forest Service | One Tree Planted" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
                          encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div>
                        <h3 className='mt-2'>PLANTING WITH THE USFS | MICHIGAN</h3>
                    </div>
                </div>
                <div className="w-full lg:max-w-full overflow-x-hidden ">
                    <div>
                        <iframe width="350" height="200" src="https://www.youtube.com/embed/YbeAuapYIQY" title="Planting Trees in Australia 
                         - Bushfire Recovery Nurseries | One Tree Planted" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
                          encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div>
                        <h3 className='mt-2'>BUSHFIRE RECOVERY | AUSTRALIA</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Card