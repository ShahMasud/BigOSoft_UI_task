import React, { useState } from 'react'
import { FaGreaterThan } from "react-icons/fa";
import {Offcanvas, Button } from 'react-bootstrap';
import './style.scss'
import boy from '../../assets/images/boy.jpg';
import client from '../../assets/images/client.png';
import cup from '../../assets/images/cup.jpg';
import bulleh6 from '../../assets/images/bulleh6.jpg';
const Home = () => {
    const [image, setImage]= useState(null);
    

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

const handel=(img)=>{
  if(image==null || image!=img){
    setImage(img)

  }else{
    setImage(null)
  }
}
  return (

<>

      <Button style={{marginTop:"-95px", backgroundColor:"transparent", border:"none"}}  onClick={handleShow}>
       <FaGreaterThan/>
      </Button>

      <Offcanvas style={{backgroundColor:"#313033", color:"white"}} className="offcanva" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>DUST Analysis</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         
          <a onClick={()=>handel(boy)}  id="1" className="BOX nav-a " href="#item-1">Boy</a>
          <a onClick={()=>handel(client)}  id="2" className="BOX nav-a " href="#item-1">Client</a>
          <a onClick={()=>handel(cup)}  id="3" className="BOX nav-a " href="#item-1">Cup</a>
          <a onClick={()=>handel(bulleh6)}  id="4" className="BOX nav-a " href="#item-2">Bulleh</a>
        </Offcanvas.Body>
      </Offcanvas>

      <div className='mainContainer'>
       {(image!=null)? <img style={{width:"650px", height:"500px"}} src={image} alt="" srcset="" />:null}
      </div>
        
</>

    
  )
}

export default Home

//     <div className=''>
    
        {/* <nav className="nav nav-pills shadow flex-column col-lg-1">
        <h5 className='heading'>Dust Analysis</h5>
                    <a onClick={Boy} onDoubleClick={Boyy} id="1" className="BOX nav-a " href="#item-1">Boy</a>
                    <a onClick={Client} onDoubleClick={CLIENT}  id="2" className="BOX nav-a " href="#item-1">Client</a>
                    <a onClick={Cup} onDoubleClick={CUP}  id="3" className="BOX nav-a " href="#item-1">Cup</a>
                    <a onClick={Bulleh} onDoubleClick={BULLEH}  id="4" className="BOX nav-a " href="#item-2">Bulleh</a>
                   
        </nav> */}
        

//     </div>