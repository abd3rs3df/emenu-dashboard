import Nav from "./nav"
import Home from "./home"
import Classes from '../App.module.css'
import { BrowserRouter as Roter ,Route} from "react-router-dom";
import Table from './table'
import  Orders from './orders'
import PayOrder from "./payOrder";
import axios from 'axios'
import React ,{useState,useEffect} from "react";
const Section = ()=>{

    return (
        <>
        <Roter> 
        <section className={Classes.main}>
         <Nav/>
         
        <Route path="/" component={Home} exact  />
        <Route path="/orders" component={Orders}/>
        <Route path="/table" component={Table} />
        <Route path="/PayOrder/:id" component={PayOrder} />


        
        </section></Roter>
        
        </>
    )
}
export default Section