import Classes from '../App.module.css'

import axios from 'axios'

import React ,{useState,useEffect} from "react";
  const Home =()=>{
const [posts, setPosts] = useState([]);
useEffect(() => {
  axios
    .get(`${process.env.REACT_APP_URL}/get_dashbord`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      mode: "no-cors",
    })
    .then((res) => {
      setPosts(res.data);
    })  
    .catch((err) => {
      console.log(err);
    });
}, []);
return(

    
 
  <ul className={Classes.AllSection}>
   {posts.map((food)=>(

   
      <li key ={food.id} >
       <ul className={Classes.home}>
    <li>{food.name_food}</li>
    <li> {food.quantity}</li>
    <li>{food.nuberOfTable}</li>
 </ul>
   </li>
  ))}
  </ul>
    
 
)

}
export default Home