import React from 'react'
import './Cards.css'
import {cardsData} from '../../Data/Data'
import Card from '../Card/Card'

const Cards = () => {
  return (
    // cards
    <div className="flex gap-[10px] xl:flex-col md:w-[90%]">
      {cardsData.map((card,id) =>{
         return (
          // parentcontainer
          <div className="w-[100%] xl:h-[9rem]">
            <Card
            
            title = {card.title}
            color = {card.color}
            barValue ={card.barValue}
            value = {card.value}
            png = {card.png}
            series = {card.series}
            
            />
          </div>
         )
      })}
    </div>
  )
}

export default Cards
