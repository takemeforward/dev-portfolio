import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import {motion, useMotionValue} from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
const FramerImage = motion(Image)

import { request, gql } from 'graphql-request';
import showdown from 'showdown';
import { htmlToText } from 'html-to-text'
import Loader from '@/components/Loader'

const calculateReadTime = (text) => {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s+/).length;
  const minutes = Math.ceil(noOfWords / wordsPerMinute);
  return minutes;
};

const POSTS_QUERY = gql`
  query PostsByPublications {
    publication1: publication(host: "vishalkaushik.hashnode.dev") {
      id
      posts(first: 10) {
        edges {
          node {
            id
            title
            content {
              markdown
            }
            coverImage {
              url
            }
            publishedAt
            slug
          }
        }
      }
    }
  }
`;

const MovingImg = ({title, img, link}) =>{
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    const handleMouseMove = (event)=>{
        imgRef.current.style.display = 'inline-block'
        x.set(event.pageX)
        y.set('-10px');
    }
    const handleMouseLeave = (event)=>{
        imgRef.current.style.display = 'none'
        x.set(0)
        y.set(0);
    }

    return(
        <Link href={link} target='blank'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
                <h2
                    className='capitalize text-xl lg:text-lg md:text-sm font-semobold hover:underline'
                >
                    {title}
                </h2>
                <FramerImage src={img} alt={title} className='w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden'
                    
                    layout="responsive"
                    ref={imgRef}
                    style={{x:x, y:y}}
                    initial = {{opacity:0}}
                    whileInView={{opacity:1, transition:{duration:0.2}}}
                    priority
                    sizes='(max-width: 768px) 100vw,
                            (max-width:1200px) 50vw,
                            50vw' 
                />
        </Link>
    )
}

const Article = ({img, title, date, link})=>{
    return(
        <motion.li 
            viewport={{once:true}}
            initial={{y:200}}
            whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        className='relative w-full p-4 py-6 my-6 flex rounded-xl intms-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light sm:flex-col'>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 md:text-sm xs:self-start sm:pl-0 sm:pt-4'>{date}</span>
        </motion.li>
    )
}
const FeaturedArticle = ({img, title, time, summery, link})=>{
    return(
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link href={link} target='blank' 
                 className='w-full inline-block cursor-pointer overflow-hidden rounded-lg max-h-[200px]'
                >
                    <FramerImage src={img} alt={title} className='w-full h-auto object cover' width={40} height={40}
                        whileHover={{scale:1.05}}
                        transition={{duration:0.2}}
                    />
            </Link>
            <Link href={link} target='blank'>
            <h2 className='capitalize text-2xl font-bold my-4 hover:underline md:text-xl xs:text-lg'> {title}</h2>       
            </Link>
            <p className='text-base  mb-2'>{summery}</p>
            <div className='flex justify-between'>
            <span className='text-primary dark:text-primaryDark font-semibold md:text-sm'>{time}</span>
            <Link href={link} target='_blank' className='text-primary dark:text-primaryDark font-semibold md:text-sm'>Read more...</Link>
            </div>
        </li>
    )
}
const articles = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request('https://gql.hashnode.com/', POSTS_QUERY);
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader/>
  if (error) return <div>Error: {error.message}</div>;

  const converter = new showdown.Converter();
  return (
    <>
        <Head>
            <title>takemeforward | Articles Page</title>
            {/* <meat name="description" content="any description" /> */}
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col justify-center items-center overflow-hidden dark:text-light'>
            <Layout className={'pt-16'}>
                <AnimatedText text={'Words Can Change The World!'} className='mb-16 sm:mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl'/>
                <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'>
                {data.publication1.posts.edges.map(({ node }) => (
                    
                    <FeaturedArticle key={node.id} title={`${node.title.slice(0,50)}...`} summery={htmlToText(converter.makeHtml(node.content.markdown), { wordwrap: 130 }).slice(0,200)} time={`${calculateReadTime(htmlToText(converter.makeHtml(node.content.markdown), { wordwrap: 130 }))} mins`} link={`https://vishalkaushik.hashnode.dev/${node.slug}`} img={node.coverImage.url}/>
                    ))
                }
                
                
                
                    
                </ul>
            </Layout>
            
        </main>
    </>
  )
}

export default articles