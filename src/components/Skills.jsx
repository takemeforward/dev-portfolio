import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y})=>{
    return(
        <motion.div 
        className='cursor-pointer flex items-center 
        justify-center rounded-full 
        font-semibold bg-dark text-light 
        py-3 px-6 shadow-dark
        absolute dark:bg-light dark:text-dark dark:shadow-light
        lg:py-2 lg:px-4 md:my-1  sm:px-2 md:text-sm md:py-1.5 md:px-3 sm:text-xs xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
        
        '
            whileHover={{scale:1.05}}
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y, transition:{duration:1.5}}}
            viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}
const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center lg:mt-32 md:mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl'>Skills</h2>
    <div className='w-full h-screen
     relative flex items-center 
     justify-center rounded-full bg-circularLight
      dark:bg-circularDark lg:bg-circularLightLg 
      md:bg-circularLightMd sm:bg-circularLightSm 
      dark:lg:bg-circularDarkLg dark:md:bg-circularDarkMd 
      dark:sm:bg-circularDarkSm
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      '>

<motion.div 
        className='cursor-pointer flex items-center 
          justify-center rounded-full 
          font-semibold bg-dark text-light 
          py-3 px-6 shadow-dark
          absolute dark:bg-light dark:text-dark dark:shadow-light
          lg:py-2 lg:px-4 md:my-1  sm:px-2 md:text-sm md:py-1.5 md:px-3 sm:text-xs xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
          
          '
              whileHover={{scale:1.05}}
          >
              Web
        </motion.div>
  
        <Skill name="ExpressJs" x={'-25vw'} y={'2vw'}/>
        <Skill name="css" x={'-8vw'} y={'-10vw'}/>
        <Skill name="tailwind" x={'25vw'} y={'5vw'}/>
        <Skill name="JavaScript" x={'0vw'} y={'12vw'}/>
        <Skill name="ReactJs" x={'-20vw'} y={'-15vw'}/>
        <Skill name="NextJs" x={'20vw'} y={'-20vh'}/>
        <Skill name="NodeJs" x={'32vw'} y={'-5vh'}/>
        <Skill name="Html" x={'0vw'} y={'-25vh'} />
        <Skill name="MongoDb" x={'-25vw'} y={'18vh'}/>
        <Skill name="MySql" x={'18vw'} y={'20vh'} />
    </div>
    
    </>
  )
}

export default Skills
