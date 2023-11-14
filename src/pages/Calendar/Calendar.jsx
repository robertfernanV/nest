import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Menu from '../../components/Menu/Menu'

const Calendar = () => {
  window.scrollTo(0, 0);

  return (
    <>
    <NavBar menuTitle={"CALENDARIO"} backgroundProp={'white'}/>
    <Menu/>
    </>
  )
}

export default Calendar