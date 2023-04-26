import React from 'react'

const Kabzda = () => {
    console.log('kabzda')
  return (
        <div>
            <KabzdaTitle title={'Title 1'} />
            <KabzdaText title={'Text 1'} />
            <KabzdaList />
        </div>
  )
}

const KabzdaTitle = (props) => {
    console.log('kabzdaTitle!')
  return (
 
      <h1>{props.title}</h1>
  
  )
}

const KabzdaText = (props) => {
    console.log('kabzdaText!')
  return (
      <h3>{props.title}</h3>
  )
}

const KabzdaList = (props) => {
  
  return (
  
      <ul>
        <li item = {1}>{props.item}</li>
        <li item = {2}>{props.item}</li>
        <li item = {3}>{props.item}</li>
      </ul>

  )
}

export default Kabzda
