import React, { useState, useContext } from 'react';
import EventContext from "../Context/eventContext"




const Navbar = () => {

  const context = useContext(EventContext);
  const {addevent} = context;

  
  const[event, setevent] = useState({
    name:"",
    desc:"",
    date:"",
    time:"",
    city:"",
    Address:""
})

  const handleSubmit = (e)=>{
    e.preventDefault(); 
    addevent(event.name,event.desc,event.date,event.time,event.city,event.Address)
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

      

    

  
  
  

  
    return (

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">AllEvents</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">

            
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Event
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        

      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" onChange={handleChangeName} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

    <label for="exampleInputEmail1" class="form-label">Description</label>
    <input type="text" onChange={handleChangedesc} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

    <label for="exampleInputEmail1" class="form-label">Date</label>
    <input type="date" onChange={handleChangedate} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

    <label for="exampleInputEmail1" class="form-label">Time</label>
    <input type="time" onChange={handleChangetime} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

    <label for="exampleInputEmail1" class="form-label">City</label>
    <input type="text" onChange={handleChangecity} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <label for="exampleInputEmail1" class="form-label">Address</label>
    <input type="text" onChange={handleChangeaddress} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  
  
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button  onClick={handleSubmit} type="button" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
             






              </li>
              
              
              
            </ul>
            
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>

            <button class="btn btn-primary mx-2" type="submit">Log in</button>
            <button class="btn btn-primary " type="submit">Sign up</button>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;