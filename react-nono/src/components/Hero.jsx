import React from 'react';
import Typed from 'react-typed';

const Hero = () => {

  return (
    <div id='Home' className='text-white bg-hero-image bg-cover h-full'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='md:text-[1.2rem] sm:text-[1.1rem] text-[1rem] text-[#00df9a] font-bold p-2'>Explore the world of programming, push your limits, reach new heights!</p>
        <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'>Programming: Code Your <br />Limitless Future!</h1>

        <div>
          <p>
            <p className='md:text-2xl sm:text-xl text-[1.1rem] font-bold py-4'>Master the power of programming with languages like</p>
            
            <Typed
              className='text-gray-400 md:text-2xl sm:text-xl text-[1.1rem] font-bold py-3 pl-2'
              strings={["JAVA", "JS", "C++", "HTML", "C", "CSS", "REACT.JS", "PYTHON"]}
              typeSpeed={90}
              backSpeed={50}
              loop
            />
          </p>
        </div>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-4 text-black transition-all ease-linear duration-[450ms] hover:rounded-xl hover:bg-[#6effd1]'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;