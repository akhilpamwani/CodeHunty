import React from 'react'

const DarkMode = (props) => {
  return (
      <>
      <div  className="flex cursor-pointer " onClick={props.changeSvg}>
            <svg xmlns="http://www.w3.org/2000/svg"    className="h-6 Menu w-6 m-auto mx-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
     </svg></div>
      </>
  )
}

export default DarkMode