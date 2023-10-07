import React, { useContext } from "react";
import Eventitem from "./Eventitem";
import EventContext from "../Context/eventContext"


const Events = () =>{
    const context = useContext(EventContext);
  const {events,editnote} = context;

    return(
        <div className="container my-3">
             <div className='container row my-3'>
    
      <div className="container">
        {events.length===0 && 'No Notes to Display'}
      </div>
      {events.map((event)=>{
  return <Eventitem key={event.id}   event={event}/>
})}
    </div>
        </div>
    );

}

export default Events;