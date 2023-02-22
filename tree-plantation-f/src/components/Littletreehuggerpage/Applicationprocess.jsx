import React from 'react'

const Applicationprocess = () => {
    return (
        <div>
            <div className='pb-10'>
                <div className=' bg-slate-50	pb-14'>
                    <div className='container-fluid'>
                        <div className=' pb-6'>
                            <h1 className='text-4xl font-bold pt-24 pb-14 '>APPLICATION PROCESS</h1>
                        </div>
                        <div className='pb-8'>
                            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-12 mb-6'>
                                <div className='grid place-items-center sm:place-items-center' >
                                    <div className='w-40 mb-6' ><img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src='https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/1yellow-1662068155095.svg?v=1662068156' alt='error' /></div>
                                    <p>Your parent/teacher/adult helper will <span className='font-bold'>submit the initial interest form below.</span> Once that’s submitted, they will receive the full application via email.</p>
                                </div>
                                <div className='grid place-items-center sm:place-items-center'>
                                    <div className='w-40 h-40  mb-6' ><img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src='https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/2yellow-1662068155099.svg?v=1662068161' alt='error' /></div>
                                    <p>With help from your parent/teacher/adult helper, you will <span className='font-bold'>answer all of the questions on the application </span>in as much detail as possible.</p>
                                </div>

                                <div className='grid place-items-center sm:place-items-center'>
                                    <div className='w-40 h-40 mb-6' ><img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src='https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/3yellow-1662068155101.svg?v=1662068166' alt='error' /></div>
                                    <p>We will be evaluating applications on a <span className='font-bold'>bi-weekly, rolling basis </span>throughout the year. This means you can expect to hear back from us <span className='font-bold'>within 2 weeks!</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Applicationprocess