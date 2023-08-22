import React from 'react'
import MenuItem from './MenuItem'

type Props = {}

const MainMenu = (props: Props) => {
  return (
    <ul className='flex flex-1 justify-around h-16 items-center'>
      <MenuItem label='HOME'/>
      <MenuItem label='PROJECTS'/>
      <MenuItem label='ABOUT'/>
      <MenuItem label='CONTACT'/>
    </ul>
  )
}

export default MainMenu
