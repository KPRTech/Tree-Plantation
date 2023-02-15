import React from 'react'

const MillionSix = () => {
  return (
    <>
    <div className='py-16   '>
        <h1 className='mb-8 text-4xl font-bold'>NATIONAL FOREST PROJECT HIGHLIGHTS</h1>
        <div className='flex justify-center flex-wrap gap-x-8 p-2' >
            <div className='w-1/1 md:w-1/3 lg:w-1/3 xl:w-1/3'> 
                <img src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/32-1646663345526.png?v=1646663352" alt="" className='mx-auto'/>
                <h2 className='font-bold py-2'>MONTANA</h2>
                <p>The Custer Gallatin National Forest stretches from south-central Montana to northwestern South Dakota and allows visitors to explore large wilderness landscapes, high peaks, rolling hills and vast stretches of open prairie intermixed with green islands alongside streams, lakes and rivers. Restoring the damage from this fire allows visitors of the park to keep enjoying everything that the Custer Gallatin Park has to offer. </p>
            </div>
            <div className='w-1/1 md:w-1/3 lg:w-1/3 xl:w-1/3'>
                <img src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/31-1646663345520.png?v=1646663347" alt="" className='mx-auto' />
                <h2 className='font-bold py-2'>WISCONSIN</h2>
                <p>This planting will take place in Wisconsin's Chequamegon-Nicolet National Forest. Reforestation here helps to maintain and enhance watershed function and improve wildlife habitat for tourist attraction. Moreover, this region has experienced severe wind events and timber harvest and so, reforesting this National Forest will serve to maintain a healthy and productive National Forest for the present and future.</p>
            </div>
        </div>
        <button className='h-10 w-44 bg-red-600 text-white mt-4'>JOIN THE CHALLENGE</button>
    </div>
    <hr />
    </>
  )
}

export default MillionSix