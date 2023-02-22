import React from 'react'

const Treehugger = () => {
    return (
        <div>
            <hr />
            <div className=' pt-20 pb-9 '>
                <h1 className='text-4xl font-bold mb-8'>PERKS OF BEING A LITTLE TREE HUGGER</h1>
            </div>
            <div className='Treehugger container-fluid grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 pb-24'>
                <div className='relative w-full'>
                    <img className='w-full h-auto' src='https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/childrenplantingtreesapling-1662070054056.jpg?v=1662070056' alt='error'></img>
                    <img className='absolute w-[85px] h-auto md:w-[200px] md:h-auto md:-top-10 md:-right-14 -top-3 -right-4' src='https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/littletreehuggersticker-1662069353099.png?v=1662069355' alt='error'></img>
                </div>
                <div>
                    <div>
                        <h1 className='text-2xl text-grey-500 text-left pb-4  font-bold'>$500 IN GRANT FUNDING
                        </h1>
                        <p className='text-justify pl-14 pb-8'>If your project is selected, you will <span className='font-bold'>receive up to $500 in grant funding</span> from One Tree Planted to help cover the costs of your program. This funding <span className='font-bold'>can be used to purchase materials</span> (like seedlings, gloves, shovels, etc) <span className='font-bold'>or to cover registration fees</span> (like permits, paperwork, etc). You can use it however you need to, we’ll just need to see your receipts!</p>
                    </div>
                    <div>
                        <h1 className='text-2xl text-grey-500 text-left pb-4  font-bold'>T-SHIRT, STICKER, & COLORING BOOK</h1>
                        <p className='text-justify pl-14 pb-8'>When your project is selected, you will receive a special <span className='font-bold'>Little Tree Hugger t-shirt and sticker</span> to help you show off your super cool project. You will also <span className='font-bold'>get a coloring book just for signing up!</span></p>
                    </div>
                    <div>
                        <h1 className='text-2xl text-grey-500 text-left pb-4  font-bold'>FORESTFEST2023</h1>
                        <p className='text-justify pl-14 pb-8'>The grantee who demonstrates the most initiative will be <span className='font-bold'>invited to speak at One Tree Planted’s ForestFest TreeTalks, located in Boulder, Colorado during Earth Week 2023.</span> This is a TED Talk style event where hundreds of industry leaders in business and forestry convene to share insights and collaborate!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Treehugger