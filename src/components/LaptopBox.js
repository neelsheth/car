import React from 'react'
import logo from './docs/logo.svg'


///displaying Each Index data as individual component
export default function LaptopBox(props) {
  const data = props.data

  return (
    <div className='box' style={{marginRight: '55px'}} >
      <div className='capital text'>{data.bodyType}</div>
      <div className='text'><span style={{marginRight:'10px' }}>{data.modelName}</span>  {data.modelType}</div>
      <img className='mainImage' src={data.imageUrl} height="250px"></img>
      <div className='links'>
      <button className='btn'>LEARN
          <img className='logo' src={logo} height="20px"></img>
          </button>
          <button className='btn'>SHOP
          <img className='logo' src={logo} height="20px"></img>
          </button>
      </div>
    </div>
  )
}
