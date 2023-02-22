import React from 'react'

const Getapplication = () => {
    return (
        <div>
            <div className='container-fluid pb-14'>
                <div className=' '>
                    <h1 className='text-4xl font-bold pt-14 pb-10 '>GET THE APPLICATION
                    </h1>
                    <p className='pb-14 text-xl'>Fill out the form to get access to the application, as well as a guide for you, a guide for your Little Tree Hugger, and other resources to help you along the way. Have questions? Reach out Lauren, our Community Cultivator, for one-on-one support. </p>
                </div>
                <div className="flex flex-wrap ">
                    <div className="xl:w-2/3 lg:w-1/2 w-full pt-14">
                        <div>
                            <div className="text-left w-auto flex pb-2">
                                <div className="w-1/2 px-3 ">
                                    <label htmlFor="first_name" className=" mb-2 font-medium text-gray-900 ">Adult's First Name</label>
                                    <input type="text" id="first_name" className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Type your first name" required />
                                </div>
                                <div className="w-1/2 px-3">
                                    <label htmlFor="first_name" className=" mb-2 font-medium text-gray-900 ">Adult's Last Name</label>
                                    <input type="text" id="first_name" className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Type your last name" required />
                                </div>
                            </div>
                            <div className="text-left w-auto flex">
                                <div className="w-1/2 px-3">
                                    <label htmlFor="first_name" className=" mb-2 font-medium text-gray-900 ">Little Tree Hugger's Name</label>
                                    <input type="text" id="first_name" className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Type their name" required />
                                </div>
                                <div className="w-1/2 px-3">
                                    <label htmlFor="first_name" className=" mb-2 font-medium text-gray-900 ">Adult's Email</label>
                                    <input type="text" id="first_name" className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Type your email" required />
                                </div>
                            </div>
                        </div>
                        <div className="text-left w-full">
                            <div className="form-check pt-4">
                                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                                    The Little Tree Hugger is between the ages 5-12.
                                </label>
                            </div>
                            <div className="form-check pt-4 pb-4">
                                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                                    The Little Tree Hugger is between the ages 5-12.
                                </label>
                            </div>
                            <button className="bg-red-500 hover:bg-red-400 text-white font-bold my-4 py-3 rounded w-full  ">
                                Button
                            </button>
                        </div>
                    </div>
                    <div className='xl:w-1/3 lg:w-1/2 w-full'>
                        <div className='imgeeee'>
                            <div className='grid place-items-center sm:place-items-center'><img className="shadow-lg rounded-full w-56 h-42  border-none" src='https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/laurendalmatoff-1635264831227.png?v=1635264832' alt="error" /></div>
                        </div>
                        <div className='title text-xl p-2'> <h1>LAUREN DALMATOFF</h1></div>
                        <div><p className='pb-2'>Community Cultivator </p></div>
                        {/* <div className='message'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsUlEQVR4nO2YS2hTQRSGx/pWsIiioqhIQV3oQgUpaDLnpqlULFKEOSd9YBdCty5dScWVW5cuRBBBEEHcFDRNz7mtVbEVEUQXii4UxQe+31oj00xKSF9o87gJ94OBkDu5M/+d/OdxlQoJCQkJKQcglK6GoapOiKpQoGqFeCmqUxWGl6K6cUI04wfN2KIqhKjQXmB8O7HZmf5oxhMq3V2jgkpazQKhI5pxZEKza6aj2Yua8XI8aWpVwIgnTa3dm9vjiN3zhGbPO66HmnGLCgheymwCxvv5Npg0asUHzDoQHHLff9JCpuwiJLFfC713Iu7mBqYpw6/mzgUgeCYnEJzaMdw1t9QCzAUz23rWetft5XzjlY7F/5xHPKEuYPw5KkZIYr2JlaUS0ZBsWQaMV93+flmDzyghRoUiIPQiMw+fxnyzs6gKlF0zsQ2YHrs1X0MfNRQks8d6zRoQuuFO5jv4dKgoCpRS4GO7ZvriIultL9W2vqAlSlNP03zNeDLXN+aemVcoAZr1nFE/jOUGPFt/3SwsWq3lCR4Epq9OzGD8WmL1TEU0DnasAEHOnrj1ZkmKxpiP20HwiasGXkUFvf9SYDfSh7uA8bkT8Uwz1pe0+tXcuhyEktNFlamwT14z/cg8EOzXbFaVpYzPj/Oa6VzzcPOi6X5n85RmOl2IPAWF7Ec0Y0ILfnb3uhPxzYbJ5kZ8WgtMt5yhv4FvOgPVWGlu3QyCD9x//Y3n057xcwg048vMHHwUFbM1kB1i0832JSB0yYn5rZmOjbYEmdL7sPOS9UPP7oG2pcFuddPdNSB4fMw3QhftyPY79loh+x0ods8OfYl9IPQup2n76AkdqMiXDw39tDHTEuCQ/VyMNaBq36KoCgVCIQEDwhMJGBCeSMCAqj0RqPChqkZISEhISIgqA38BmCZ0WdwM14UAAAAASUVORK5CYII=" /></div> */}
                        <div><button className="bg-teal-800 hover:bg-teal-600 text-white font-bold py-3 px-5 rounded w-42">
                            SET UP A ZOOM CALL
                        </button></div>
                    </div>
                </div>
            </div>
            <div className='bg-amber-50 p-8'><span className='text-xl font-bold '>LOOKING FOR FUNDING FOR YOUR REFORESTATION PROJECT? HEAD OVER <a className='underline decoration-solid' href='https://onetreeplanted.org/pages/planting-partners'>HERE</a>.
            </span></div>
        </div>
    )
}

export default Getapplication