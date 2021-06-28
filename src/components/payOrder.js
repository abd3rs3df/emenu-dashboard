import Classes from "../App.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import TotalCountPrice from "../util/AllPrice";
const PayOrder = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/get_dashbord/get_table/get_orders/${id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        mode: "no-cors",
      })
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submit = async (id_table) => {
    try {
      const respone = await fetch(
        `${process.env.REACT_APP_URL}/get_dashbord/delete_order/${id_table}`,
        {
          method: "PATCH",
          // headers: {
          //   "Content-Type": "application/json",
          //   "Access-Control-Allow-Origin": "*",
          // },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={Classes.PayOrder}>
        <ul className={Classes.AllSection}>
          {posts.map((food) => (
            <li key={food.id}>
              <ul className={Classes.home}>
                <li>{food.name_food}</li>
                <li> العدد : {food.quantity}</li>

                <li>السعر للواحد :{food.price}</li>
                <li>السعر الكلي : {food.price * food.quantity}</li>
              </ul>
            </li>
          ))}
        </ul>

        <h1 className={Classes.AllPrice}>
          {" "}
          المبلغ الكلي : {TotalCountPrice(posts)}
        </h1>
        <button
          onClick={() => {
            submit(id);
          }}
          className={Classes.pay}
        >
          Pay
        </button>
      </div>
    </>
  );
};
export default PayOrder;
