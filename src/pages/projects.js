import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { GithubIcon } from '@/components/Icons'
import Head from 'next/head'
import {motion} from 'framer-motion'
import project1 from '../../public/images/projects/cryptoInsights.png'
import project2 from '../../public/images/projects/mimicMeet.png'
import insecBanner from '../../public/images/projects/insecBanner.png'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedProject = ({type, title, summery, img, link, github=""})=>{
    return(
            <article className='w-full flex items-center 
            justify-between rounded-br-2xl 
            rounded-3xl border border-solid
            border-dark bg-light p-12 
            shadow-2xl relative dark:border-light
            dark:bg-dark
            lg:flex-col lg:p-8 xs:rounded-br-3xl xs:p-4'>
            
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
                 
                <Link href={link} target='blank' 
                 className='w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg'
                >
                    
                    <FramerImage src={img} alt={title} className='w-full h-auto object-cover'
                        whileHover={{scale:1.05}}
                        transition={{duration:0.2}}
                        priority
                        sizes='(max-width: 768px) 100vw,
                                (max-width:1200px) 50vw,
                                50vw' 
                    />
                </Link>
                <div className='w-1/2 lg:w-full  flex flex-col items-start justify-between pl-6 lg:pl-0 lg:pt-6'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl sx:text-base'>
                        {type}
                    </span>

                    <Link href={link} target='blank' className='hover: underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-4xl font-bold hover:underline  dark:text-light sm:text-sm'>
                            {title}
                        </h2>
                    </Link>

                    <p className='my-2 font-medium text-dark padding-12 dark:text-light sm:text-sm'>
                        {summery}
                    </p>

                    <div className='mt-2 flex items-center'>
                        <Link href={github} target='blank' className='w-10 sm:w-9'>
                            {
                                github?<GithubIcon />: null
                            }
                        </Link>
                        <Link href={link} target='blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-sm'>
                            Visit Projects
                        </Link>
                    </div>
                </div>
            </article>
    )
}

const Project = ({title, type, img, link, github})=>{
    return(
        <>
            <article className='w-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light relative p-6 flex-col dark:border-light dark:bg-dark xs:p-4'>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
                <Link href={link} target='blank' 
                 className='w-full cursor-pointer overflow-hidden rounded-lg'
                >
                    <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}

                    priority
                    sizes='(max-width: 768px) 100vw,
                            (max-width:1200px) 50vw,
                            50vw' 
                    />
                </Link>
                <div className='w-full flex flex-col items-start justify-between pt-4'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base '>
                        {type}
                    </span>

                    <Link href={link} target='blank' className='hover: underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-3xl font-bold hover:underline dark:text-light lg:text-2xl'>
                            {title}
                        </h2>
                    </Link>


                    <div className='w-full mt-2 flex items-center justify-between'>
                        <Link href={link} target='blank' className='underline px-6 text-lg font-semibold dark:text-light md:text-base'>
                                Visit 
                        </Link>
                        <Link href={github} target='blank' className='w-8 md:w-6'>
                            <GithubIcon />
                        </Link>
                    </div>
                </div>
            </article>
        </>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>takemeforward | Projects page</title>
            {/* <meat name="description" content="any description" /> */}
        </Head>

        <TransitionEffect />
        <main className='justify-center w-full mb-16 flex flex-col items-center dark:text-light'>
            <Layout className={'pt-16'}>
                <AnimatedText text={'Ingenuity Bests Experience!'} className='mb-16 sm:mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl' />

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                    <FeaturedProject 
                                title={"InSecSys website's Landing page"}
                                summery={`Landing page for a startup with over 35+ beautifully designed, eye-catching, and fully responsive pages. 
                                    Features include regular updates related to the company through automatically updating blogs, and PDF 
                                    downloads available via email. Fully designed and developed using Laravel and Blade templates, with raw 
                                    CSS used for styling and responsiveness.`}
                                link={'https://www.insecsys.com/'}
                                type={'Internship Project'}
                                img={insecBanner}

                            />

                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                                title={'Crypto Screener Application'}
                                link={'/'}
                                type={'Featured Project'}
                                img={project1}
                                github={'www.github.com'}
                            
                            
                            />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                                title={'Crypto Screener Application'}
                                link={'/'}
                                type={'Featured Project'}
                                img={project1}
                                github={'www.github.com'}
                            
                            
                            />
                    </div>
                    <div className='col-span-12'>
                    <FeaturedProject 
                            title={'Video Confrencing Application'}
                            summery={`A robust video conferencing app built with React, Tailwind CSS, Context API, React Router, and Recharts.
                                        It provides detailed stats on each session. Easily customize the UI to fit your brand.`}
                            link={'/'}
                            type={'MimicMeet'}
                            img={project2}
                            github={'www.github.com'}
                        
                        
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                                    title={'Crypto Screener Application'}
                                    link={'/'}
                                    type={'Featured Project'}
                                    img={project1}
                                    github={'www.github.com'}
                                
                                
                                />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                                    title={'Crypto Screener Application'}
                                    link={'/'}
                                    type={'Featured Project'}
                                    img={project1}
                                    github={'www.github.com'}
                                
                                
                                />
                    </div>

                </div>
            </Layout>
        </main>
    
    </>
  )
}

export default projects