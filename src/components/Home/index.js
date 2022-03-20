import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import './style.scss'
import boy from '../../assets/images/boy.jpg';
import client from '../../assets/images/client.png';
import cup from '../../assets/images/cup.jpg';
import bulleh6 from '../../assets/images/bulleh6.jpg';
const Home = () => {
    const [item1, setItem1]= useState("");
    const [item2, setItem2]= useState("");
    const [item3, setItem3]= useState("");
    const [item4, setItem4]= useState("");

    const [itemOne, setItemOne]= useState("");
    const [itemTwo, setItemTwo]= useState("");
    const [itemThree, setItemThree]= useState("");
    const [itemFour, setItemFour]= useState("");

    const Boy = () =>{
        
        setItem1(boy);
        
        
    }
    const Client =() =>{
       
            setItem2(client);
        
    }
    const Cup =()=>{
       
            setItem3(cup);

    }
    const Bulleh = () =>{
        
            setItem4(bulleh6);
        
    }
    // ================== 
    const Boyy = () =>{
       
        setItem1("");
        }
    const CLIENT =() =>{
        
            setItem2("");
           
    }
    const CUP =()=>{
       
            setItem3("");   

    }
    const BULLEH = () =>{
       
            setItem4("");
        
    }
  return (


    <div className='d-flex gap-4'>
    
        <nav className="nav nav-pills shadow flex-column col-lg-1">
        <h5 className='heading'>Dust Analysis</h5>
                    <a onClick={Boy} onDoubleClick={Boyy} id="1" className="BOX nav-a " href="#item-1">Boy</a>
                    <a onClick={Client} onDoubleClick={CLIENT}  id="2" className="BOX nav-a " href="#item-1">Client</a>
                    <a onClick={Cup} onDoubleClick={CUP}  id="3" className="BOX nav-a " href="#item-1">Cup</a>
                    <a onClick={Bulleh} onDoubleClick={BULLEH}  id="4" className="BOX nav-a " href="#item-2">Bulleh</a>
                   
        </nav>
        <div className='container'>
        <img src={item1} alt="" srcset="" />
        <img style={{width:"300px", height:"300px"}} src={item2} alt="" srcset="" />
        <img style={{width:"300px", height:"300px"}} src={item3} alt="" srcset="" />
        <img style={{width:"300px", height:"300px"}} src={item4} alt="" srcset="" />
    </div>

    </div>
  )
}

export default Home