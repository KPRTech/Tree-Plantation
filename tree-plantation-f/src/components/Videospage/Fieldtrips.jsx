import React from 'react'

const Fieldtrips = () => {
    return (
        <div className='Future-project '>
            <div className='pb-6 '>
                <h1 className='text-4xl mb-6 pt-6'>FIELD TRIPS & PROJECT UPDATES</h1>
                <div className="container-fluid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1 mb-6 ">

                    <div className="w-full sm:max-w-fit lg:max-w-full  space-x-2 overflow-x-hidden">
                        <div>
                            <iframe width="350" height="200" src="https://www.youtube.com/embed/gvJ-Zlri3Ao" title="Reforestation in Brazil | Field Trips | One Tree Planted" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3 className='mt-2'>BRAZIL</h3>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-full overflow-x-hidden	 ">
                        <div>
                            <iframe width="350" height="200" src="https://www.youtube.com/embed/cVAAIfzCbGM" title="Denmark Reforestation: SKOVDYRKERNE | One Tree Planted" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3 className='mt-2'>DENMARK</h3>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-full overflow-x-hidden	">
                        <div>
                            <iframe width="350" height="200" src="https://www.youtube.com/embed/1NmN3pE0I2s" title="Andes Reforestation: 
                             Queuña Raymi | One Tree Planted" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted- 
                              media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3 className='mt-2'>ANDES</h3>
                        </div>
                    </div>
                </div>

                {/* secound column */}

                <div className="container-fluid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1 mb-5">

                    <div className="w-full lg:max-w-full  overflow-x-hidden	 ">
                        <div>
                            <iframe width="350" height="200" src="https://www.youtube.com/embed/pvx24_R5Hno" title="January 2022 | 
                             Reforestation Updates | One Tree Planted" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
                              encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3 className='mt-2'>JANUARY 2022</h3>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-full overflow-x-hidden	 ">
                        <div>
                            <iframe width="350" height="200" src="https://www.youtube.com/embed/kEbnfxGa6ss" title="December 2021 | 
                            Reforestation Updates | One Tree Planted" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
                             encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3 className='mt-2'>DECEMBER 2021</h3>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-full overflow-x-hidden	 ">
                        <div>
                            <iframe width="350" height="200" src="https://www.youtube.com/embed/HwzS_JMyDTc" title="November 2021 | 
                             Reforestation Updates | One Tree Planted" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
                              encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div>
                            <h3 className='mt-2'>NOVEMBER 2021</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fieldtrips