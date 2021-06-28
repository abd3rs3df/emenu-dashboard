import Classes from '../App.module.css'
import React ,{useState,useEffect} from 'react';
import axios from 'axios';
const Orders =()=>{

    const [posts, setPosts] = useState([]);
    useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_URL}/get_dashbord/get_table`, {
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

        <div className ={Classes.Orders}>
        {posts.map((food)=>(

            <a className = {Classes.Table} href={`/PayOrder/${food.id_table}`} key= {food.id_table} >
             {food.nuberOfTable}
          </a>
         
        ))}
        
        </div>
    )
}
export default Orders