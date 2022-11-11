import React from 'react'

export default function PopUp(props) {
    const data = props.data
  return (
    <div>

         <div className='popup'>
                <div className='popup-inner'>
                    <div className='Image'>
                        <img className='image' src={data.imageUrl} width='220px'></img>                     
                    </div>
                        
                    <div className='info'>
                    <span>{data.modelName}</span>
                        <div>Body Type :- {data.bodyType}</div> 
                        <div>Model :-  {data.modelType}</div>
                        <div>Top Speed :- </div>
                        <div>Seating Capacity :- </div>
                        <div>Price :- </div>
                        <button className='btnpop' onClick={props.popUpClose}>X</button>
                        </div>
                    </div>
                </div>
      
    </div>
  )
}
