import React from 'react'

export const Footer = () => {
  let posstyle={
    position:'absolute',
    bottom:'0vh',
    width:'100%'
  }
  return (
    <div className='bg-dark text-light py-3' style={posstyle}>
      <p className="text-center">copyright &copy; MyTodosList.com</p>
    </div>
  )
}
