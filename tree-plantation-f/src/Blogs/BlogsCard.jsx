import React from 'react'
import BlogsMain from './BlogsMain'
import Blogs from "./Blogs"
import BlogsPagination from './BlogsPagination'
const BlogsCard = ({Card}) => {
  return (
    <>
    
    <div className="container-fluid"> 
    <BlogsMain/>
      <Blogs/>
      <BlogsPagination/>    
    </div>
    </>
  )
}

export default BlogsCard