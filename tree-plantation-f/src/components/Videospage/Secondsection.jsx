import React from 'react'

const Secondsection = () => {
    return (
        <div>
            <div className='container-fluid'>
                <p className='mb-6'>One Tree Planted is all about stories; those of the forests, individuals, and communities we build.
                    With these short videos, we want to <br />spread a hopeful message that inspires individuals and businesses to take
                    action
                    and make an impact.<br /><br />
                    Our videos highlight our projects and demonstrate how <span className='text-green-500'> <a
                        href='https://onetreeplanted.org/products/plant-trees'> planting trees</a> </span> is more than just restoring
                    forests
                    after wildfires or
                    clear-cutting. <br />For even more great video stories, check out our <span className='text-green-500'> <a
                        href='https://www.youtube.com/c/OnetreeplantedOrg501c3/featured'> Youtube Channel.</a> </span>
                </p>
                <div className="vid w-full lg:max-w-full overflow-x-hidden">
                    <iframe src="https://www.youtube.com/embed/M89aQfIg4WA" title="To Build a Home | 
                     One Tree Planted" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                      picture-in-picture; 
                    web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Secondsection