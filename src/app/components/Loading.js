import React from 'react'

function Loading() {
  return (
    <div className='pageLoading'>
    <div className="card mx-auto loadingSpinner ">
  <div className="card-body text-center">
    <h1 className="card-title">loading......</h1>
    <div className="spinner-border mt-3 w-75 h-75" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>  </div>
</div>
</div>  )
}

export default Loading