import React from 'react'
import BlogsMain from './BlogsMain'
import Blogs from "./Blogs"
const BlogsCard = ({Card}) => {
  return (
    <>
    
    <div className="container"> 
    <BlogsMain/>
      <Blogs/>
    </div>
    </>
  )
}

export default BlogsCard