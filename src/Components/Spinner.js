import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
  return (
    <div>
      <div className='text-center'>
        <img src={loading} alt="loading" style={{height: "60px"}}/>
      </div>
    </div>
  )
}

export default Spinner

