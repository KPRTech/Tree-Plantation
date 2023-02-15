import React from 'react'
import { Link } from 'react-router-dom'

const data=[
    {
        id:1,
        imgUrl:"https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/pf-54749035--facebooklogopreviewpng1526334753913png1539807485010.png?v=1625594796",
       
    },
    {
        id:2,
        imgUrl:"https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/pf-35d5b7f2--pf39afe15ea5e74c74a3b61e9a801fe2b2newTwistedXlogo400x3000.png?v=1625594810",
       
    },
    
    {
        id:3,
        imgUrl:"https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/pf-369f5474--acornslogopng1517250337358.png?v=1625594785",
        
    },
]

const MillionSeven = () => {
  return (
    <div className='py-16   '>
     <h1 className='mb-8 text-4xl font-bold'>JOIN THE MILLION TREE CHALLENGE NETWORK</h1>
    <div className="flex flex-wrap justify-center M-4 space-x-4 items-centerpx-8 md:px-16 xl:px-32  py-4 place-items-center">
            {data.map((card) => (
            <div className="w-1/1 md:w-1/4 lg:w-1/4 justify-between items-center text-center" key={data.id}>
                <img src={card.imgUrl} alt="" className="w-80 h-60 flex ml-12 mx-auto rounded-full" />
                
            </div>
        ))}</div>
        <a href="" className='text-teal-700 font-bold hover:text-black'>SEE ALL COMPANIES</a>
    </div>
  )
}

export default MillionSeven