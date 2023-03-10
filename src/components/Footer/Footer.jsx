import React from 'react'
import {BsWhatsapp,BsGithub, BsInstagram} from "react-icons/bs"
import {GrLinkedinOption} from "react-icons/gr"
import "./footerStyle.scss"



const Footer = () => {
  return (
    <div id='contato' className='footer__container'>
        <div className='footer__icons'>
            <a href="https://wa.me/+5579998459078"><BsWhatsapp/></a>
            <a href="https://github.com/Deny-santos"><BsGithub/></a>
            <a href="https://www.linkedin.com/in/denisson-santos-019956214"><GrLinkedinOption/></a>
            <a href="https://www.instagram.com/denysantoz/"><BsInstagram/></a>
        </div>
        <div className='footer__information'>
            <p>@copyright 2023</p>
            <p>Deny Santos</p>
        </div>
    </div>
  )
}

export default Footer