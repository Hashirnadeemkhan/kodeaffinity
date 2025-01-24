
import Footer from "@/app/components/widgets/Footer"
// import Hero from "@/app/components/widgets/Hero"
import About from "@/app/components/widgets/Journey"
import Navbar from "@/app/components/widgets/Navbar"
import OurApproch from "@/app/components/widgets/OurApproch"
import OurProcess from "@/app/components/widgets/OurProcess"
import React from "react"

const page = () => {
  return (
    <div>
      <Navbar/>
      {/* <Hero/> */}
      <About/>
      <OurApproch/>
      <OurProcess/>
      <Footer/>
      
    </div>
  )
}

export default page
