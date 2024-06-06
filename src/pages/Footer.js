import React from 'react'
import '../layout.css'

const Footer = () => {
  return (
   <>
    <div className='footer py-4'  style={{ backgroundColor: "black", display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                <section id='footer' style={{ backgroundColor: "black" }}>
                    <h1 className='credit' style={{ color: "white", fontWeight: "normal" ,fontSize:"25px"}}>Created By @
                        <span style={{ color: "yellow", fontWeight: "normal",fontSize:"25px" }}>Parmod Kumar</span>| All Rights Reserved!</h1>
                </section>
            </div>
   </>
  )
}

export default Footer