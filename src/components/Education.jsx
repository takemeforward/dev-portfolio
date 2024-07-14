import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'


const Details = ({type, time, place, info})=>{
    const ref = useRef(null);
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>

            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold  text-2xl sm:text-xl xs:text-lg'>{type}</h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    )

}
const Education = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

  return (
    <div className='my-64 xl:my-48'>
        <h2 className='text-center font-bold text-8xl mb-32 w-full lg:mb-20 sm:mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl'>Education</h2>
    
        <div ref={ref} className='w-[75%] md:w-[100%] mx-auto relative'>
            <motion.div
                style={{
                    scaleY: scrollYProgress
                }}
                 
                className='absolute left-9 md:left-6 sm:left-3 top-0 w-[4px] md:w-[2px] h-full bg-dark origin-top dark:bg-light' 
            />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details type={'Master Of Computer Application(MCA)'} time={'Aug-2022 to Present'} place={"NIT Agartala, Tripura 799046"} info={'Pursuing a Master of Computer Applications, encompassing all fundamental computer science courses alongside modern CS subjects. This program provides a comprehensive foundation in both traditional and contemporary aspects of computer science.'}/>
                <Details type={'Bachelore Of Computer Application(BCA)'} time={'Aug-2017 to 2020'} place={"Hajipur, Bihar 844101"} info={'Completed a Bachelor of Computer Applications, covering essential computer fundamentals, multimedia, data structures, and computer networking. This program provided a robust understanding of key technical concepts and practical skills. The curriculum balanced foundational knowledge with hands-on experience in various computing domains.'}/>
            </ul>
        </div>
    </div>
  )
}

export default Education