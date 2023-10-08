import React from 'react'
import { NavBar } from '../components/NavBar'
import { ReviewForm } from '../components/ReviewForm'

export const ReviewPage = () => {
  return (
    <div>
        <NavBar/>
        <div className='App-body p-4'>
        <ReviewForm/>
        </div>
    </div>
  )
}
