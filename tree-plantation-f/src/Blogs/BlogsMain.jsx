import React from 'react'




const backgroundImage = {
    backgroundImage: `url('https://cdn.shopify.com/s/files/1/0326/7189/files/2_trillion_trees_1_2000x.progressive.jpg?v=1614322671')`,
    height:"100vh",
     
  };
const BlogsMain = () => {
  return (
    <div>
        <div className="bg-cover bg-center bg-sm:bg-left bg-md:bg-center bg-lg:bg-right" style={backgroundImage}>
        <div className=''>
        <h1 className=' align-middle pt-52 text-5xl text-white font-bold '>STORIES</h1>
        <p className='text-lg text-white font-normal hover:font-bold'>STORIES FROM THE FIELD, TREE FACTS, AND A HEALTHY DOSE OF NATURE</p>
        </div>
        </div>
        
    </div>
  )
}

export default BlogsMain