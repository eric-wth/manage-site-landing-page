import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg';
import illustration from '../public/illustration-intro.svg';
import avatarAnisha from '../public/avatar-anisha.png';
import avatarAli from '../public/avatar-ali.png';
import avatarRichard from '../public/avatar-richard.png';
import facebookIcon from '../public/icon-facebook.svg';
import instagramIcon from '../public/icon-instagram.svg';
import pinterestIcon from '../public/icon-pinterest.svg';
import twitterIcon from '../public/icon-twitter.svg';
import youtubeIcon from '../public/icon-youtube.svg';

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
      <section class='mb-16'>
        <h1 class='text-4xl font-bold text-center mb-16'>What they've said</h1>
        
        {/* testimonial container */}
        <div class='flex flex-row p-6 space-x-6'>

          {/* testimonial 1 */}
          <div class='flex flex-col items-center rounded-lg bg-veryLightGray'>
            <Image src={avatarAnisha} alt='' class='w-16 -mt-14' />
            <h5 class='text-lg font-bold text-center'>Anisha Li</h5>
            <p class='text-sm text-center text-darkGrayishBlue'>
              "Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated."
            </p>
          </div>

          {/* testimonial 2 */}
          <div class='flex flex-col items-center rounded-lg bg-veryLightGray'>
            <Image src={avatarAli} alt='' class='w-16 -mt-14' />
            <h5 class='text-lg font-bold'>Ali Bravo</h5>
            <p class='text-sm text-darkGrayishBlue'>
              "We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and everyone is
              much more focused."
            </p>
          </div>

          {/* testimonial 3 */}
          <div class='flex flex-col items-center rounded-lg bg-veryLightGray'>
            <Image src={avatarRichard} alt='' class='w-16 -mt-14' />
            <h5 class='text-lg font-bold'>Richard Watts</h5>
            <p class='text-sm text-darkGrayishBlue'>
              "Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated."
            </p>
          </div>
        </div>

        <div class='flex justify-center mt-6'>
          <a href='#' class='px-4 py-2 text-white rounded-full bg-brightRed'>
              Get Started
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section class='bg-brightRed'>
        {/* flex container */}
        <div class='flex items-center justify-center py-8'>
          <div>
            <p class='text-4xl mr-96 font-bold leading-tight text-white max-w-xl'>Simplify how your team works today</p>
          </div>

          <a href='#' class='max-h-10 px-4 py-2 text-brightRed rounded-full bg-white shadow-2xl baseline'>
            Get Started
          </a>
        </div>        
      </section>

      {/* footer */}
      <footer class='py-10 px-10 bg-veryDarkBlue text-white'>
        {/* flex container */}
        <div class='flex justify-center space-x-24'>
          {/* logo and socials */}
          <div>
            <Image src={logo} alt='website logo' class='mb-20'/>

            <div class='flex justify-between'>
              <a href='#'>
                <Image src={facebookIcon} />
              </a>
              <a href='#'>
                <Image src={youtubeIcon} />
              </a>
              <a href='#'>
                <Image src={twitterIcon} />
              </a>
              <a href='#'>
                <Image src={pinterestIcon} />
              </a>
              <a href='#'>
                <Image src={instagramIcon} />
              </a>
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