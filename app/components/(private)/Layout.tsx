import React from 'react'
import Navbar from '../widgets/Navbar'
import Hero from '../widgets/Hero'
import '../../globals.css'; 


const HomeLayout = () => {
  return (
            <div className="bg-cover bg-center min-h-screen " style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8)),url("/mainbg.png")', // Background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed', // Keep background fixed
                
              }}>
     <div className="pt-6"> 
        <Navbar />
      </div>
      <Hero/>
     
    </div>
  )
}

export default HomeLayout
