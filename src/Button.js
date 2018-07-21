import React from 'react'


const Button = ({
  bgColor='blue', // decides the background color of Button
  children
  })=>{
  return (
    <button style={{background: bgColor}}>{children}</button>
  )
}

export default Button