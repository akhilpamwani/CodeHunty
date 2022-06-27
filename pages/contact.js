import React from 'react'
import { Contact } from '../Components/Contact/Contact'
import Seo from '../Components/Seo/Seo';

const contact = () => {
  
  // running
  
  return (
    <>
      <Seo SeoTitle={ "Contact"}/> 
      <Contact/>
      </>
  )
}
export default contact