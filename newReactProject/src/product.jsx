import './index.css' 
import { useState } from 'react';
 /*function Product({title,model,price,newprice}){
   return (
        <>
       <h1>{title}</h1> 
       <p>{model}</p>
       <span>{price}</span>
       <span>{newprice}</span>
      
        </>
    )
}
    */
   function Product(){
    let [counter,setCounter]=useState({blue:0,green:15,red:0,yellow:15})
    function updateblue(){
        if( counter.blue <15)
        setCounter({...counter,blue: counter.blue+1});
       }
       function updategreen(){
        if( counter.green >0)
        setCounter({...counter,green: counter.green-1});
       }
       function updatered(){
        if( counter.red <15)
        setCounter({...counter,red: counter.red+1});
       }
       function updateyellow(){
        if( counter.yellow >0)
        setCounter({...counter,yellow: counter.yellow-1});
       }
    return (

        <>
        
        <h1>Counter Game</h1>
        <div style={{border:"2px solid orange"}}>
        <p>Blue:{counter.blue}</p>
        <button style={{backgroundColor: "blue ",color:"white"}} onClick={updateblue}>+1</button>
        <p>Green:{counter.green}</p>
        <button style={{backgroundColor: "green" }} onClick={updategreen}>+1</button>
        <p>Red:{counter.red}</p>
        <button style={{backgroundColor: "red"}} onClick={updatered}>+1</button>
        <p>Yellow:{counter.yellow}</p>
        <button style={{backgroundColor: "yellow" }} onClick={updateyellow}>+1</button>
        </div>
         
        </>
    )
   };
export default Product;