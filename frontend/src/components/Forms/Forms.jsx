import React from 'react'
import  "./index.css";
import CreateRoomForm from './CreateRoomForm/CreateRoomForm';
import JoinRoomForm from './JoinRoomForm/JoinRoomForm';
function Forms() {
  return (
   <div className='row h-100 pt-5'>
       <div className="col-md-4 mt-5 border form-box  p-5 border-primary rounded-2 mx-auto d-flex flex-column align-items-center">
           <h1 className='text-primary font-bold '>Create Room</h1>
           <CreateRoomForm></CreateRoomForm>
       </div>
       <div className="col-md-4 mt-5 border form-box border-primary p-5 rounded-2 mx-auto d-flex flex-column align-items-center">
           <h1 className='text-primary font-bold '>Join Room </h1>
           <JoinRoomForm></JoinRoomForm>
       </div>
   </div>
  )
}

export default Forms