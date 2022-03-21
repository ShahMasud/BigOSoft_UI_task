import React from 'react'
import '../Navbar/style.scss'
import { Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <ul class="nav justify-content-end" style={{backgroundColor:"#4d4c4e", padding:"10px"}}>
    <li class="nav-item">
        <a class="nav-link active text-white" aria-current="page" href="#">ADD NOTATION</a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-white" href="#">RETAKE SCAN</a>
    </li>
    </ul>
  )
}

export default Navbar
