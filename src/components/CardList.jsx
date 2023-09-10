// CardList.jsx
import React from 'react'
import Card from './Card'
import { skillCards, projectCards, tokenCards } from '../data/data'

const CardList = ({ cardType }) => {
  const cardDataMap = {
    skills: skillCards,
    projects: projectCards,
    tokens: tokenCards,
  }

  const cards = cardDataMap[cardType]

  return (
    <div className="card-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          icon={card.labelIcon}
          iconColor={card.labelIconColor}
        />
      ))}
    </div>
  )
}

export default CardList
