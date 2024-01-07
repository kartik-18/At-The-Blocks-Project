import React from 'react'
import Cards from '../Cards/Cards'
import './MainDash.css'
import Table from '../Table/Table'

const MainDash = () => {
  return (
    <div className="flex flex-col justify-evenly xl:justify-start xl:mt-[2rem] md:items-center">
        <h1 className='text-[2em] font-bold mt-4 ml-2 xl:p-4 md:m-4'>Dashboard</h1>
        <Cards/>
        
        <Table/>
    </div>
  )
}


export default MainDash
