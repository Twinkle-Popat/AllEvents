import EventContext from "./eventContext";
import { useState } from "react";



const EventState = (props) => {
  const[count,setcount] = useState(1);
  const eventsinitail=[{
    id:count,
    name:"Nukad Natak",
    desc:"Natak performed on Streets",
    date:"2023-10-7",
    time:"19:00",
    city:"Ahmedabad",
    Address:"Navrangpura"

}]
  const [events, setevents] = useState(eventsinitail);
 
   
    
      


       //Add a event
       const addevent = (name,desc,date,time,city,address)=>{

        
       const event={
          "id":count,
          "name":name,
          "desc":desc,
          "date":date,
          "time":time,
          "city":city,
          "Address":address

        }
        setevents(events.concat(event));
        console.log(events);
        
  
      }

      //Edit a note



    
    const editevent =  (id,name,desc,date,time,city,address)=>{


       
  
     let newevents = JSON.parse(JSON.stringify(events))
        for(let i=0;i<newevents.length;i++){
          if(newevents[i].id===id){
            newevents[i].name=name;
            newevents[i].desc=desc;
            newevents[i].date=date;
            newevents[i].time=time;
            newevents[i].city=city;
            newevents[i].address=address;
            
            break;
          }
        }
        console.log(newevents);
        setevents(newevents)
      }



      //Delete a note
    const deleteevent = (id)=>{
       
        
        const filteredevents = events.filter((item) => item.id !== id);
        setevents(filteredevents);
        console.log("deleted");
  
  
      }
  
return(
        <EventContext.Provider value={{events,setevents,addevent,editevent,deleteevent}}>
            {props.children}
        </EventContext.Provider> 
    )
}

export default EventState;