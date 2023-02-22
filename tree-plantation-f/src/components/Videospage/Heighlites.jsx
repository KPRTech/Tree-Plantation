import React from 'react'

const Heighlites = () => {
    return (
        <div>
            <div className='container-fluid'>
                <h1 className='text-2xl mb-6 mt-5'>2021 WAS A BIG YEAR, HERE ARE SOME OF THE HIGHLIGHTS!</h1>
                <div className='heighlits'>
                    <iframe width="550" height="300" src="https://www.youtube.com/embed/-j2qdGWqSv4" title="Planting 23 MILLION Trees: The 
                     2021 Story | One Tree Planted" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                      gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            <div className='Future-project mt-9 mb-9 p-8'>
                <h1 className='text-3xl'>LOOKING FOR MORE GREAT VIDEOS? CHECK OUT OUR <span className='text-red-600'> YOUTUBE CHANNEL</span>!</h1>
            </div>

        </div>
    )
}

export default Heighlites