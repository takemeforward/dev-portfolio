
import React from 'react'

import Layout from '@/components/Layout'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import lightBlub from '../../public/images/svgs/miscellaneous_icons_1.svg'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
const Home = () => {

  
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meat name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className={'pt-0 md:pt-8'}>
          <div className='flex items-center justify-between w-full lg:flex-col'>
              <div className='w-1/2 sm:w-full'>
                <Image src={profilePic} alt="Vishal Kumar" className='h-auto md:inline-block md:w-full lg:w-full' 
                  priority
                  sizes='(max-width: 768px) 100vw,
                          (max-width:1200px) 50vw,
                          50vw' 
                />
              </div>
              <div className='w-1/2 flex-col items-center self-center lg:w-full lg:text-center'>
                <AnimatedText text={'Bridging Ideas And Solutions Through Creativity.'} className='!text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
                <p className='my-4 text-base font-medium md:text-sm'>
                As a seasoned full-stack developer, I aim to transform ideas into exceptional web applications. Explore my latest projects and articles, demonstrating my skills in WebD and modern web technologies.
                </p>
                <div className='flex items-center self-start mt-2 lg:self-center lg:justify-center '>
                  <Link href={'/dummy.pdf'}  target='blank' 
                  className='flex items-center bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border border-solid border-transparent hover:border-dark  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:text-md sm:text-sm md:p-2 md:px-4'
                  download={true}
                  >
                    Resume {' '}
                    <LinkArrow className={'w-6 m-1 lg:w-4'}/>
                  </Link>
                  <Link href={'mailto:vishalkumarkaushik.dev@gmail.com'} target='blank'
                  className='mx-4 text-lg md:text-md sm:text-sm font-medium capitalize text-dark dark:text-light underline pt-2.5 md:text-base'
                  >
                    Contact
                  </Link>

                </div>
             
              </div>
          </div>
          
        <div className='absolute right-8 bottom-4 inline-block w-24 md:hidden'>
          <Image src={lightBlub} alt='Vishal Kumar' className='w-full h-auto'/>
        </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}

export default Home