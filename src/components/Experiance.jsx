import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'


const Details = ({position, company, companyLink, time, address, work})=>{
    const ref = useRef(null);
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>

            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold  text-2xl sm:text-xl xs:text-lg'>{position} {' '} <a href={companyLink} className='text-primary capitalize dark:text-primaryDark' target='blank'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    )

}
const Experiance = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

  return (
    <div className='my-64 md:my-32 xl:my-48'>
        <h2 className='text-center font-bold text-8xl mb-32 w-full lg:mt-32 md:mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl'>Experiance</h2>
    
        <div ref={ref} className='w-[75%] lg:w-[90%] md:w-full mx-auto relative'>
            <motion.div
                style={{
                    scaleY: scrollYProgress
                }}
                 
                className='absolute left-9 md:left-6 sm:left-3 top-0 w-[4px] md:w-[2px] h-full bg-dark origin-top dark:bg-light' 
            />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details position={'Full Stack Web Developer'} company={'InSecSys'} time={'Sept-2023 to Feb-2024'} address={'NIBM -Corinthians Road,Undri, Pune, Maharashtra, India - 411060'} companyLink={'https://www.insecsys.com/'} work={`Collaborated on Organicsattva.com, enhancing functionality with HTML, CSS, JavaScript, PHP, and SQL, implementing key features like user registration and dynamic content loading. Designed and developed the 30+ page responsive InSecSys.com using Laravel's Blade framework, demonstrating full-stack proficiency and attention to detail.`}/>
                
            </ul>
        </div>
    </div>
  )
}

export default Experiance