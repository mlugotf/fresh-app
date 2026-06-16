/**
 * Purpose: Create the navbar to help our user navigate
 * 
 * Author: Michael Lugo
 */
export function NavBar() {

  return(
   <div id='navBarHighestDiv' className='max-lg:collapse bg-transparent text-white lg:mb-10 shadow-sm w-full 
    rounded-md color:orange'>
    <input id='navbar-1-toggle' className='peer hidden' type='checkbox' />
    <label htmlFor='navbar-1-toggle' className='fixed inset-0 hidden max-lg:peer-checked:block'></label>
    <div className='collapse-title navbar'>
      <div className='navbar-start'>
        <label htmlFor='navbar-1-toggle' className='btn btn-ghost lg:hidden'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' 
            stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 
              12h8m-8 6h16' /></svg>
        </label>
        <a href='./'><button type='submit' className='btn btn-ghost text-xl'>Michael Lugo</button></a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li><a href='/projects'><button type='submit'>Projects</button></a></li>
          {/* <li>  hiding because I don't need a dropdown but It's nice to keep an example
            <details>
              <summary>Parent</summary>
              <ul className='p-2 bg-orange-400 text-base-100 w-40 z-1'>
                <li><button type='submit'>Submenu 1</button></li>
                <li><button type='submit'>Submenu 2</button></li>
              </ul>
            </details>
          </li> */}
          <li><a href='/workhistory'><button type='submit'>Work History</button></a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}