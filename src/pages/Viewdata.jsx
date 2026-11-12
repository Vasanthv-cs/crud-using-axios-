
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"

const Viewdata = () => {
  let [data,setData]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:4000/users")
    .then((x)=>setData(x.data))
  },[])

  console.log(data);
  return (
    <div>
        <Navbar/>
        <div>{data.map((e)=>{
          return (
            <div key={e.id}> 
              <h1>{e.name}</h1>
              <h1>{e.email}</h1>
              <h3>{e.course}</h3>
            </div>
       ) })}</div>
    </div>
  )
}

export default Viewdata