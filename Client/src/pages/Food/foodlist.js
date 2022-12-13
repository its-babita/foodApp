import React, { useEffect, useState } from 'react'

const FoodList = () => {
  
    const [ foodList, setFoodList ] = useState( [] )
    const fetchData = async() => {
      const response  = await fetch( 'http://localhost:4000/foods/' )
      const data      = await response.json()
      setFoodList( data.details )

    }
  
    useEffect( () => {
      fetchData();
    }, [] )
  
    return (
      <>
        { foodList.length > 0 ? (
          <div className='foodapp-res-card-coll'>
           { foodList.map( ( item ) => {
            return (
              <>
                <div className='food-card'>
                  <div className=''><img alt='' style={{height:"200px",width:"200px"}} src={require(`../../uploads/${item.foodImg}`)} /></div>
                  <div>{ item.foodType }</div>
                  <div>{ item.restaurant }</div>
                  <div>{ item.foodCategory }</div>
                </div>
              </>
              )
          }) }
          </div>
        ) : 'loading...' }
      </>
    )
  
  }
  
  export default FoodList