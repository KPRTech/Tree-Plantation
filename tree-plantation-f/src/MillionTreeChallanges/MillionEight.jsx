import React from 'react';


const MillionEight = () => {

  return (
    <div className="flex flex-col lg:flex-row responsive-background1">
      <div className="lg:w-1/2 hidden lg:block"></div>
      <div className="lg:w-1/2  xl:px-32 lg:px-16  xl:justify-left">
      
      <h1 className='mb-8 text-4xl font-bold'>GET IN TOUCH</h1>
      <p>Fill out the form to get in touch with a member of our team to discuss the different ways businesses can get involved!</p>
      <div className=" flex flex-wrap  px-2    mt-2">

                <div className="w-1/2 pr-2">
                 <label for="inputEmail4" className="form-label float-left font-bold">First Name</label>
                 <input type="email" className="form-control h-12" id="inputEmail4" required placeholder='Type your first name'/>
                </div>
                <div className="w-1/2">
                 <label for="inputEmail4" className="form-label float-left font-bold">Last Name</label>
                 <input type="email" className="form-control h-12" id="inputEmail4" required placeholder='Type your last name'/>
                </div>
                <div className="w-1/2 pr-2">
                 <label for="inputEmail4" className="form-label float-left font-bold">Email</label>
                 <input type="email" className="form-control h-12 " id="inputEmail4" required placeholder='Type your Email'/>
                </div>
                <div className="w-1/2">
                 <label for="inputEmail4" className="form-label float-left font-bold">Company Name</label>
                 <input type="email" className="form-control h-12" id="inputEmail4" required placeholder='Type your company name'/>
                </div>
                <div className="w-1/2 pr-2">
                 <label for="inputEmail4" className="form-label float-left font-bold">Company Website</label>
                 <input type="email" className="form-control h-12 " id="inputEmail4" required placeholder='Type your website url'/>
                </div>
                <div className="w-1/2">
                 <label for="inputEmail4" className="form-label float-left font-bold">Phone No</label>
                 <input type="email" className="form-control h-12" id="inputEmail4" required placeholder='Type your phone no'/>
                </div>
                <button class="bg-red-500 h-12 w-full rounded-md text-white hover:text-xl mt-3">Submit</button>
                </div>
      
      
      
      </div>
    </div>
  );
};

export default MillionEight;