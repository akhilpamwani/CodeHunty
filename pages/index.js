import HomeComp from '../Components/Home/Home';
import Seo from '../Components/Seo/Seo';
import React from 'react'
import {ButtonBlueComponent  } from "../Components/Button/Link/ButtonBlueComponent";
import { ButtonGradientComponent } from "../Components/Button/Link/ButtonGradientComponent";
import About from '../Components/About.js/About';
import { Contact } from "../Components/Contact/Contact";
import Link from 'next/link'

export default function Home() {
  
  return (
    <>
   
      <Seo SeoTitle={"Home"} />
      <div className=' relative top-52  mb-80'>
      <HomeComp />
        <div className="flex flex-auto mt-5 mb-5 mx-5 m-auto justify-center">
          
          <ButtonBlueComponent ButtonBlue={'Read Blogs'} connect='/blogs' />
          {/* <Link href='/blogs' ><button className=' cursor-pointer bg-gradient-to-r Roboto to-indigo-500 via-fushia-500 hover:contrast-150 from-pink-500 text-white m-auto relative  hover:from-transparent hover:via-transparent hover:border-2 hover:to-transparent hover:text-yellow-700 hover:rounded-xl hover:border-yellow-700 hover:border-solid top-0 right-0  left-0 w-32 h-10 rounded-lg justify-center block mx-2 font-bold ' >Recent Blogs</button> </Link> */}
        
        </div></div>
   <About/>
      
      <Contact/>
     
      
    </>
  )
}
