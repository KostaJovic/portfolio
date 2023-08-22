import React from 'react'

type Props = {
    label: string
}

const MenuItem = ({label}: Props) => {
  return (
    <li className='relative before:left-[50%] hover:before:left-0 before:transition-all before:duration-500 before:bg-cyan-300 before:h-2 before:w-0 hover:before:w-[100%] before:rounded-md before:absolute before:-top-2 hover:before:-top-1 a flex h-full items-center'> 
        <p>{label}</p>
      </li>
  )
}

export default MenuItem