import React from "react";
import { useState,useContext } from "react";
import EventContext from "../Context/eventContext"


const Eventitem  = (props) =>{

  const contextt = useContext(EventContext);
  const {editevent,deleteevent} = contextt;
  const{event} = props;

  const[eventitem, setevent] = useState({
    name: event.name,
    desc:event.desc,
    date:event.date,
    time:event.time,
    city:event.city,
    Address:event.Address
})

const handleSubmit = (e)=>{
  e.preventDefault(); 
  editevent(eventitem.id,eventitem.name,eventitem.desc,eventitem.date,eventitem.time,eventitem.city,eventitem.Address)
  setevent({name:"",
  desc:"",
  date:"",
  time:"",
  city:"",
  Address:""})
  console.log("added");
}


  

  const handleChangeName = (e) => {
      const { value } = e.target;
      setevent((prevEvent) => ({
        ...prevEvent,
        name: value
      }));
    };

    const handleChangedesc = (e) => {
      const { value } = e.target;
      setevent((prevEvent) => ({
        ...prevEvent,
        desc: value
      }));
    };

    const handleChangedate = (e) => {
      const { value } = e.target;
      setevent((prevEvent) => ({
        ...prevEvent,
        date: value
      }));
    };

    const handleChangetime = (e) => {
      const { value } = e.target;
      setevent((prevEvent) => ({
        ...prevEvent,
        time: value
      }));
    };

    const handleChangecity = (e) => {
      const { value } = e.target;
      setevent((prevEvent) => ({
        ...prevEvent,
        city: value
      }));
    };

    const handleChangeaddress = (e) => {
      const { value } = e.target;
      setevent((prevEvent) => ({
        ...prevEvent,
        Address: value
      }));
    };



  
  
    return(
        <div class="card mx-3" style={{width:"18rem"}}>
  <div class="card-body">
    <h5 class="card-title">{event.name}</h5>
    <p class="card-text">{event.desc}</p>
    <p class="card-text">Date: {event.date}</p>
    <p class="card-text">Time: {event.time}</p>
    <p class="card-text">Address: {event.Address}, {event.city}</p>


    
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
  Edit
</button>

<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Items</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        

      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" value={eventitem.name} onChange={handleChangeName}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

    <label for="exampleInputEmail1" class="form-label">Description</label>
    <input type="text" value={eventitem.desc} onChange={handleChangedesc}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

    <label for="exampleInputEmail1" class="form-label">Date</label>
    <input type="date" value={eventitem.date} onChange={handleChangedate}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

    <label for="exampleInputEmail1" class="form-label">Time</label>
    <input type="time" value={eventitem.time} onChange={handleChangetime} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

    <label for="exampleInputEmail1" class="form-label">City</label>
    <input type="text" value={eventitem.city} onChange={handleChangecity}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <label for="exampleInputEmail1" class="form-label">Address</label>
    <input type="text" value={eventitem.Address} onChange={handleChangeaddress}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  
  
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={handleSubmit} class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>



   
  </div>
</div>
    );
}

export default Eventitem;