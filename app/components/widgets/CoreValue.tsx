import React from 'react'
import Wrapper from '../shared/Wrapper'


const CoreValue = () => {
  return (
    <div className='bg-[#4a4c4f] pt-10 pb-10'>
    <Wrapper>
    <div className='text-center space-y-10'>
      <h3 className='text-purple-500 font-bold '>CORE VALUE</h3>
      <h2 className='text-white text-4xl'>Unveiling our <span className='text-[#574ecb]'>core values </span> <br />
      for lasting impact.</h2>
      <div className='flex justify-center items-center text-white gap-x-10'>
        {/* boxex */}
        <div className='shadow-xl bg-[#333333] p-10 space-y-5 rounded-xl'>
           <div>icon</div> 
           <p className='text-2xl'>People</p>
           <p className='text-gray-400'>Our clients and users are at the core of everything we do. We are committed to understanding their needs and delivering beyond expectations.</p>
        </div>
        <div className='shadow-xl bg-[#574ecb] p-10 space-y-5 rounded-xl'>
           <div>icon</div> 
           <p className='text-2xl'>Innovation</p>
           <p className='text-gray-400'>Our clients and users are at the core of everything we do. We are committed to understanding their needs and delivering beyond expectations.</p>
        </div>
        <div className='shadow-xl p-10 space-y-5 bg-[#333333] rounded-xl'>
           <div>icon</div> 
           <p className='text-2xl'>Mission</p>
           <p className='text-gray-400'>Our clients and users are at the core of everything we do. We are committed to understanding their needs and delivering beyond expectations.</p>
        </div>
       
      </div>
    </div>
    </Wrapper>
    </div>
  )
}

export default CoreValue
