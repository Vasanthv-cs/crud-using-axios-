import { useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"



const AddData = () => {
 const [data,Setdata]=useState({
name:"",
email:"",
number:"",
course:""
 }
 
)

 let handledata=(e)=>{
 
  Setdata({...data,[e.target.name]:e.target.value})
 }

 let handlesubmit=(e)=>{
  e.preventDefault();
   axios.post("http://localhost:4000/users",data)
  console.log(data);
 }
  return (
    <div>
        <Navbar/>
        <form onSubmit={handlesubmit} >
        <div>
          <br /><br />
          <label htmlFor="name" >name:</label>
          <input type="text" name="name" value={data.name}  placeholder="enter name" required onChange={handledata}/>
          <br /><br />
           <label htmlFor="email" >email:</label>
          <input type="text" name="email" value={data.email} placeholder="enter email" required onChange={handledata}/>
          <br /><br />
           <label htmlFor="number" >name:number</label>
          <input type="number" name="number" value={data.number} placeholder="enter number" required onChange={handledata}/>
          <br />
          <br />
           <label htmlFor="course" >course:</label>
          <input type="text" name="course"  value={data.course} placeholder="enter course" required onChange={handledata}/>
          <br />
        </div>
        <div>
          <button>sumbit</button>
        </div>
        </form>
    </div>
  )
}

export default AddData