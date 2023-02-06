import React from 'react'

const IndividualSeventh = () => {
  return (
    <>
        <div className="container py-16 md:px-10  px-8 md:px-16 xl:px-36 ">
        <h1 className="font-bold sm:text-2xl md:text-3xl lg:text-4xl mb-8 px-16">GET THE RESOURCES</h1>
        <h2 className='font-bold    mb-8 text-xl' >Fill out the form to get access to the program!</h2>
            <div className="row">
                <div className="col-md-8 col-sm-12 flex flex-wrap ">

                <div className="col-md-6 pr-2">
                 <label for="inputEmail4" className="form-label float-left font-bold">First Name</label>
                 <input type="email" className="form-control h-12" id="inputEmail4" required placeholder='Type your first name'/>
                </div>
                <div className="col-md-6">
                 <label for="inputEmail4" className="form-label float-left font-bold">Last Name</label>
                 <input type="email" className="form-control h-12" id="inputEmail4" required placeholder='Type your last name'/>
                </div>
                <div className="col-md-6 pr-2">
                 <label for="inputEmail4" className="form-label float-left font-bold">School Name   </label>
                 <input type="email" className="form-control h-12 " id="inputEmail4" required placeholder='Type your school name'/>
                </div>
                <div className="col-md-6">
                 <label for="inputEmail4" className="form-label float-left font-bold">Email</label>
                 <input type="email" className="form-control h-12" id="inputEmail4" required placeholder='Type your email'/>
                </div>

                


                <div className="form-check">
                 <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label text-left text-base" for="flexCheckDefault">
                I wish to receive future communications about the school program including additional resources, activities and exciting opportunities!
                 </label>
                </div><br />
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                <label className="form-check-label text-base text-left mb-4" for="flexCheckChecked">
                Sign me up to receive exciting news, fun facts, and positive environmental stories!
                 </label>
                </div>
                <button class="bg-red-500 h-12 w-full rounded-md text-white hover:text-xl ">SignUp</button>
                </div>
                <div className="col-md-4 col-sm-12 xl:-mt-20">
                    <img src="https://cdn.shopify.com/s/files/1/0326/7189/t/65/assets/laurendalmatoff-1635264831227.png?v=1635264832" alt="" className='rounded-full img-fluid h-64 mx-auto mt-1' />
                    <h1 className='text-2xl font-bold my-2 '>LAUREN <button><i className="bi bi-envelope text-teal-700"></i></button></h1>
                    <p><i>LAUREN</i></p>
                    <button className='bg-teal-700 text-white mt-3 h-12 w-52 rounded-md'>SET UP A ZOOM CALL</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default IndividualSeventh