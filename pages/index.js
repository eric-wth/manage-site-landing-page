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
            >
              Get started
            </a>
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

      <section>
        {/* flex container */}
        <div class='container relative mx-auto p-6 flex'>
          {/* text */}
          <div class='mr-16'>
            <h1 class='text-3xl font-bold max-w-prose-10ch'>
              What's different about Manage?
            </h1>
            <p>
              Manage provides all the functionality your team needs,
              without the complexity. Our software is tailor-made for modern
              digital product teams.
            </p>
          </div>

          {/* numbered list */}
          <div>
            {/* list item 1 */}
            <div class='flex mb-10'>
              <h1 class='px-4 py-1 max-h-8 text-white rounded-full bg-brightRed'>01</h1>
              <div class='ml-4'>
                <h1 class='font-bold mb-3'>Track company-wide progress</h1>
                <p>
                  See how your day-to-day tasks fit into the wider vision.
                  Go from tracking progress at the milestone level all the
                  way done to the smallest of details. Never lose sight of the
                  bigger picture again.
                </p>
              </div>
            </div>

            {/* list item 2 */}
            <div class='flex mb-10'>
            <h1 class='px-4 py-1 max-h-8 text-white rounded-full bg-brightRed'>02</h1>
              <div class='ml-4'>
                <h1 class='font-bold mb-3'>Advance built-in reports</h1>
                <p>
                  Set internal delivery estimates and track progress toward
                  company goals. Out customisable dashboard helps you
                  build out the reports you need to keep key stakeholders
                  informed.
                </p>
              </div>
            </div>

            {/* list item 3 */}
            <div class='flex mb-10'>
            <h1 class='px-4 py-1 max-h-8 text-white rounded-full bg-brightRed'>03</h1>
              <div class='ml-4'>
                <h1 class='font-bold mb-3'>Everything you need in one place</h1>
                <p>
                  Stop jumping from one service to another to 
                  communicate, store files, track tasks and share
                  documents. Manage offers an all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section class='mb-16 border-2 border-dashed border-black'>
        <h1 class='text-2xl font-bold text-center'>What they've said</h1>
      </section>

      {/* CTA Section */}
      <section class='border-2 border-dashed border-black'>
        {/* flex container */}
        <div class='flex justify-center py-8'>
          <div class=''>
            <p class='text-3xl mr-96 font-bold'>Simplify how your team works today</p>
          </div>

          <a href='#' class='px-4 py-2 text-white rounded-full bg-brightRed'>
            Get Started
          </a>
        </div>        
      </section>

      {/* footer */}
      <footer class='py-10 px-10'>
        {/* flex container */}
        <div class='flex justify-center space-x-24'>

          {/* logo and socials */}
          <div>
            <Image src={logo} alt='website logo' class='mb-20'/>

            <div>
              <p>social media logos here</p>
            </div>
          </div>

          {/* Nav column 1/2 */}
          <div class='flex flex-col space-y-2'>
            <a href='#'>Home</a>
            <a href='#'>Pricing</a>
            <a href='#'>Products</a>
            <a href='#'>About Us</a>
          </div>

          {/* Nav column 2/2 */}
          <div class='flex flex-col space-y-2'>
            <a href='#'>Careers</a>
            <a href='#'>Community</a>
            <a href='#'>Privacy Policy</a>
          </div>

          {/* search bar */}
          <div class='flex'>
            <form action='' method=''>
              <input type='text' placeholder='Search' class='px-2 py-1 mr-2 border-solid border-2 border-black rounded-full'/>
              <button class='px-4 py-1 mr-auto text-white rounded-full bg-brightRed'>Go</button>
            </form>
          </div>
        </div>
      </footer>
    </div>    
  )
}

export default App;