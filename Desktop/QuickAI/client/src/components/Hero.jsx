import React from 'react'

const Hero = () => {
  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>
      
      <div className='text-center mb-6'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-0-[1.2] mb-2'>Create amazing content <br/> with <span className='text-blue-700'>AI tools</span></h1>
        <p>Transform your content creation with our suite of premium AI tools.
            Write articles,<br/> generate images, and enhance your workflow.
        </p>
      </div>
      <div>
        <button>Start creating now</button>
        <button>Watch demo</button>
      </div>
    </div>
  )
}

export default Hero
