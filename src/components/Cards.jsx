// ProjectAndSkillComponents.jsx
import React from 'react'
import CardList from './CardList'
import '../index.scss'

export const Skills = () => {
  return (
    <div className="max-sm:mt-10 mt-56">
      <h2
        className="mt-4 font-semibold text-gray-100 sm:text-2xl text-center"
        style={{ fontSize: '5rem', marginBottom: '2.5rem' }}
      >
        Skills
      </h2>
      <CardList cardType="skills" />
    </div>
  )
}

export const TokenManagement = () => {
  return (
    <div className="">
      <h2
        className="lg:mt-40 max-sm:mt-24 sm:mt-24 font-semibold text-gray-100 max-sm:text-4xl sm:text-6xl text-center mb-24"
        id="tokens"
      >
        Token Management System
      </h2>
      <CardList cardType="tokens" />
    </div>
  )
}
