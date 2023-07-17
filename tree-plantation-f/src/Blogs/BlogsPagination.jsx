import React from 'react'

const BlogsPagination = () => {
  return (
    <div>
        <div className="text-center my-4">
    <div className="inline-block">
        <button className="bg-white text-green-700 hover:text-gray-900 font-medium py-2 px-4 rounded-l border-black">
            Previous
        </button>
    </div>
    <div className="inline-block mx-4">
        <button className="bg-gray-300 text-green-800 font-medium py-2 px-4 ">1</button>
        <button className="bg-white text-green-800 font-medium py-2 px-4 ">2</button>
        <button className="bg-white text-green-800 font-medium py-2 px-4 ">3</button>
    </div>
    <div className="inline-block">
        <button className="bg-white text-green-800 hover:text-gray-900 font-medium py-2 px-4 rounded-r">
            Next
        </button>
    </div>
</div>
    </div>
  )
}

export default BlogsPagination