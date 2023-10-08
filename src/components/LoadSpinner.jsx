import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export const LoadSpinner = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
    <Spinner animation='border' variant='primary' size='xl'/>
    </div>
  )
}
