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
          src='https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp'
          className='max-w-sm rounded-lg shadow-2xl'
        />
        <div>
          <h1 className='text-5xl font-bold'>Box Office News!</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
      </div>
    </div>
  )
}