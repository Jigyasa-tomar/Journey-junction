import React from 'react';
import Card from './Card';

const Tours = ({tours, removeTour, interestedTour}) => {

  return (
       
        <div className='flex flex-wrap items-center justify-center mt-24 mb-12 gap-5'>
            {
                tours.map( (tour) => {
                    return <Card key={tour.id} {...tour} interestedTour={interestedTour} removeTour={removeTour}/>
                })
            }
        </div>
  )
}

export default Tours;
