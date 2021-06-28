import Classes from '../App.module.css'
import axios from 'axios';
import React ,{useState,useEffect} from 'react';
const Table =()=>{
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_URL}/get_dashbord/get_table_empty`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          mode: "no-cors",
        })
        .then((res) => {
          setPosts(res.data);
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

   
    return (

        <div className ={Classes.Orders}>
           {posts.map((food)=>(
            <a className = {Classes.Table} key={food.id_table}  >
               {food.nuberOfTable}
          </a>
           ))}


         
          </div>
    )
}

export default Table 