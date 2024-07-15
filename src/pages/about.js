import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile/profile.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experiance from '@/components/Experiance'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value})=>{
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once:true});

    useEffect(()=>{
        if(isInView){
            motionValue.set(value);
        }
    },[isInView, value, motionValue])

    useEffect(()=>{
        springValue.on("change", (latest)=>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])
    return <span ref={ref}></span>
}
    


const about = () => {
  return (
    <div>
      <Head>
        <title>takemeforward | About Page</title>
        {/* <meta name="description" content="any description" /> */}
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className={'pt-16'}>
            <AnimatedText className='mb-16 sm:mb-8 lg:!text-10xl sm:!text-6xl xs:!text-4xl' text={'Enthusiasm Powers Goals!'} />
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 md:order-2 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8'>
                    <h2 className='uppercase text-lg md:text-sm font-bold text-dark/75 dark:text-light/75'>About me.</h2>

                    <p className='font-medium md:text-sm'>
                        Hello, I'm Vishal, a seasoned full-stack developer passionate about building beautiful, 
                        functional, and user-centered digital experiences. With 2y years in the field, 
                        I'm always on the lookout for innovative methods to bring visions to life.
                    </p>
                
                    <p className='my-4 font-medium md:text-sm'>
                        To me, development is more than just coding – it's about solving problems and delivering 
                        intuitive, enjoyable user experiences.
                    </p>

                    <p className='font-medium md:text-sm'>
                        Whether developing a website, I bring my dedication 
                        to development excellence and user-focused thinking to every project. 
                        I eagerly anticipate the chance to apply my skills and passion to your next endeavor.
                    </p>

                </div>
                <div className='col-span-3 xl:col-span-4 md:col-span-8 md:order-1 relative h-max rounded-lg border-2 border-solid border-dark bg-light p-4 dark:border-light dark:bg-dark'>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                        <Image src={profilePic} alt='Profile picture' 
                            priority
                            sizes='(max-width: 768px) 100vw,
                                    (max-width:1200px) 50vw,
                                    33vw' 
                            className='w-full h-auto rounded-2xl ' />
                </div>
                <div className='col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3 flex flex-col items-end justify-between'>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold'>
                            <AnimatedNumbers value={2} />+
                        </span>
                        <h2 className='text-xl xl:text-center md:text-lg sm:text-base xs:text-sm font-medium capitalize text-dark/75 dark:text-light/75'>Years of Experiance </h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value={6} />+
                        </span>
                        <h2 className='text-xl xl:text-center md:text-lg sm:text-base xs:text-sm lg:text-center font-medium capitalize text-dark/75 dark:text-light/75'>Mini Projects </h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value={3} />+
                        </span>
                        <h2 className='text-xl xl:text-center md:text-lg sm:text-base xs:text-sm lg:text-center font-medium capitalize text-dark/75 dark:text-light/75'>Mega Projects</h2>
                    </div>
                </div>
            </div>
            <Skills />
            <Experiance />
            <Education />
        </Layout>
      </main>
    </div>
  )
}

export default about
