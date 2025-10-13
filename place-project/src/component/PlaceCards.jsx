import React from 'react'
import PlaceCard from './PlaceCard'
import { data } from "../data"
import { useSelector } from 'react-redux'

function PlaceCards() {
    const places = useSelector(state => state.places)
  return (
    <div className="lg:grid-cols-3 md:grid-cols-3 grid gap-4 pt-2">
        {
            places.map((place, index) => {
                return( 
                    <React.Fragment key={index}>
                        <PlaceCard place={place}></PlaceCard>
                    </React.Fragment>
                )
            })
        }
    </div>
  )
}

export default PlaceCards