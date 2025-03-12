import React from 'react'
import logoImage from '../assets/catBoardLogo.png'

const Navbar = () => {
  return (
    <>
    <nav className='flex w-screen justify-between items-center text-white font-semibold text-2xl'  style={{
        padding: "2rem 2rem",
    }} >
        <div className='logo  flex  items-center '>
            <img src={logoImage} className='h-[4vh]  md:h-[8vh] ' alt="logoImage" />
            <div>
                CatBoard
            </div>
        </div>
        <div className="profile">
            <h1>
                Profile
            </h1>
        </div>
    </nav>
    </>
  )
}

export default Navbar

