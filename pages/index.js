import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg';
import illustration from '../public/illustration-intro.svg';

const App = () => {

  return (
    <div>
      {/* Navbar */}
      <nav class='relative container mx-auto p-6'>

        {/* flex container */}
        <div class='flex items-center justify-between'>
          {/* div that holds the logo */}
          <div class='pt-2'>
            <Image src={logo} alt='website logo' />
          </div>

          {/* Menu items */}
          <div class='pt- 2 space-x-6'>
            <a href='#'>Pricing</a>
            <a href='#'>Product</a>
            <a href='#'>About Us</a>
            <a href='#'>Careers</a>
            <a href='#'>Community</a>
          </div>

          {/* Button */}
          <div>          
            <a href='#'
              class='p-3 px-6 pt-2 text-white bg-brightRed rounded-full items-baseline hover:bg-brightRedLight'
            >Get started</a>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <section class='relative container mx-auto p-6 flex'>
        {/* text items */}
        <div class=''>
          <h1 class='text-3xl pb-6'>
            Bring everyone together to build better products
          </h1>

          <p class='pb-6'>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>

          <a href='#'
            class='p-3 px-6 pt-2 text-white bg-brightRed rounded-full items-baseline hover:bg-brightRedLight'>
            Get started
          </a>
        </div>

        {/* image */}
        <div>
          <Image src={illustration} alt='' />
        </div>
      </section>


    </div>
    
  )
}

export default App;