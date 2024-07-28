import React, { useState } from 'react';
import Tours from './components/Tours';
import data from './data';

const App = () => {

    const [tours, setTours] = useState(data);

    // to select tours
    function interestedTour(id){
        const newTours = tours.filter(tour => tour.id === id);
        setTours(newTours);
    }

    // to remove Tours
    function removeTour(id){
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    }



    if(tours.length === 0){
        return(
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <h2 className='text-xl font-bold'>OOPS! No Tours Left</h2>
                <button onClick={() => setTours(data)}
                    className='w-36 bg-slate-200 p-1 rounded-md hover:bg-slate-100 hover:text-black mt-5'>
                    Refresh
                </button>
            </div>
        ); 
    }


    return(
        <div className='min-h-screen h-full w-full bg-blue-200 flex flex-row items-center justify-center'>

                <h2 className='w-full text-4xl font-bold text-center gap-5 bg-blue-700 text-white p-3 fixed top-0'>
                Journey Junction
                </h2>

            <div> 
                <Tours tours={tours} removeTour={removeTour} interestedTour={interestedTour}/>
            </div>
        </div>
        
    );
}

export default App;