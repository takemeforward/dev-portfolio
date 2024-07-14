import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import  { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons'
import {motion} from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'
const CustomLink = ({href, title, className=""})=>{
    const router = useRouter();

    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block
             bg-dark absolute left-0 -bottom-0.5
             group-hover:w-full transition-[width] ease duration-300
              ${router.asPath==='/'&&href==='/'?'w-full':router.asPath === ("/"+href) ? 'w-full': 'w-0'}
              dark:bg-light`}
                
            >&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({href, title, className="", toggle})=>{
    const router = useRouter();
    const handleClick = ()=>{
        toggle();
        router.push(href)
    }

    return(
        <button className={`${className} relative group my-2 text-light dark:text-dark text-lg`} onClick={handleClick}>
            {title}
            <span className={`h-[2px] inline-block
             bg-light absolute left-0 -bottom-0.5
             group-hover:w-full transition-[width] ease duration-300
              ${router.asPath==='/'&&href==='/'?'w-full':router.asPath === ("/"+href) ? 'w-full': 'w-0'}
              dark:bg-dark`}
                
            >&nbsp;</span>
        </button>
    )
}

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false)


    const handleClick = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <header 
        className='w-full px-32 py-8 font-medium flex items-center justify-between relative dark:text-light z-10 lg:px-16 md:px-12 sm:px-8'
    >
        <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
            <span className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-xl -translate-y-0.5 ${isOpen? 'rotate-45 translate-y-[5px]': '-translate-y-0.5'}`}></span>
            <span className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-xl my-0.5 ${isOpen ? 'opacity-0':'opacity-100'}`}></span>
            <span className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-xl translate-y-0.5 ${isOpen? '-rotate-45 -translate-y-[2px]': 'translate-y-0.5'}`}></span>
        </button>

        <div className='w-full flex justify-between items-center lg:hidden'>
            <nav>
                <CustomLink href={'/'} title={'Home'} className={'mr-4'}/>
                <CustomLink href={'about'} title={'About'} className={'mx-4'}/>
                <CustomLink href={'projects'}title={'Projects'}  className={'mx-4'}/>
                <CustomLink href={'articles'} title={'Articles'} className={'ml-4'}/>
            </nav>
            <nav className='flex items-center justify-center flex-wrap space-x-3'>
            <motion.a href={'www.twitter.com'} target={'blank'} whileHover={{y:-4}} whileTap={{scale:.9}}>
                    <LinkedInIcon className={' mr-1'} />
            </motion.a>
            
            <motion.a href={'www.twitter.com'} target={'blank'} whileHover={{y:-4}} whileTap={{scale:.9}}>
                <GithubIcon className={' mx-1'} />
            </motion.a>

            <motion.a href={'www.twitter.com'} target={'blank'} whileHover={{y:-4}} whileTap={{scale:.9}}>
                <TwitterIcon className={' mx-1'} />
            </motion.a>


            <button 
                onClick={()=> setMode(mode ==='light'?'dark':'light')}
                className= {`ml-4 flex items-center justify-center rounded-full ${mode==='light'? "bg-dark text-light":"bg-light text-dark"}`}
            >
                {
                    mode==="dark"?<MoonIcon className={'fill-dark'}/>: <SunIcon className={'fill-dark'} />
                }
            </button>
        </nav>
        </div>

        {
            isOpen ? 

            <motion.div className='min-w-[80vw] flex-col gap-4 justify-between items-center fixed top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark dark:bg-light/75  rounded-lg backdrop-blur-md py-24 hidden lg:flex shadow-lg '
                initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
                animate={{scale:1, opacity:1}}
                transition={{duration:0.5}}            
            >
                <nav className='flex flex-col justify-center items-center'>
                    <CustomMobileLink href={'/'} title={'Home'} className={''} toggle={handleClick}/>
                    <CustomMobileLink href={'about'} title={'About'} className={''} toggle={handleClick}/>
                    <CustomMobileLink href={'projects'}title={'Projects'}  className={''} toggle={handleClick}/>
                    <CustomMobileLink href={'articles'} title={'Articles'} className={''} toggle={handleClick}/>
                </nav>
                <nav className='flex items-center justify-center flex-wrap my-2'>
                <motion.a href={'www.twitter.com'} target={'blank'} whileHover={{y:-4}} whileTap={{scale:.9}}>
                        <LinkedInIcon className={'md:w-6 mx-3'} />
                </motion.a>
                
                <motion.a href={'www.twitter.com'} target={'blank'} whileHover={{y:-4}} whileTap={{scale:.9}}>
                    <GithubIcon className={'md:w-6 mx-3 text-light dark:text-dark'} />
                </motion.a>

                <motion.a href={'www.twitter.com'} target={'blank'} whileHover={{y:-4}} whileTap={{scale:.9}}>
                    <TwitterIcon className={'md:w-6 mx-3'} />
                </motion.a>


                <button 
                    onClick={()=> setMode(mode ==='light'?'dark':'light')}
                    className= {`ml-4 flex items-center justify-center rounded-full ${mode==='light'? "bg-dark text-light":"bg-light text-dark"}`}
                >
                    {
                        mode==="dark"? <MoonIcon className={'fill-dark'}/>: <SunIcon className={'fill-dark'} />
                    }
                </button>
            </nav>
        </motion.div>
            
            : null
        }
        
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
        </div>
    </header>
  )
}

export default NavBar