import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base '>
        <Layout className={'py-8 flex items-center justify-between lg:flex-col lg:space-y-3 lg:py-6'}>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
            Build with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span> by &nbsp;<Link href={'https://www.linkedin.com/in/in-vishal-kumar/'} target='blank' className='hover:underline underline-offset-2'>Vishal Kumar</Link>
            </div>
            
            <Link target='_blank' href={`https://www.linkedin.com/in/in-vishal-kumar/`} >Say hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer