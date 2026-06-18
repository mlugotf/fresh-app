/**
 * Purpose: Display the hero card component to give a rundown of me
 * 
 * Author: Michael Lugo
 */

export function HeroCard() {
  return(
    <div className='hero bg-transparent w-full'>
      <div className='hero-content flex-col lg:flex-row w-full'>
        <img
          src='https://images.unsplash.com/photo-1776722091903-097d6dab0455?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='max-w-sm rounded-lg shadow-2xl'
        />
        <div>
          <h1 className='text-5xl font-bold'>Welcome!</h1>
          <p className='py-6'>
            Thank you for taking the time to explore this application!
          </p>
        </div>
      </div>
    </div>
  )
}