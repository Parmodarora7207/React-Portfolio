import React from 'react';
import '../layout.css';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';


const Experience = () => {
  return (
   <>
   <div className='Work' style={{ height: "100vh", width: "100%", backgroundColor: "white" }}>
                {/* timeline divider */}
                <div id='timeline-divider'>
                    <div className='timeline-traveller'>
                        <div id='i'>
                            <AirplanemodeActiveIcon className='Airplane1' style={{ fontSize: "50", marginLeft: "-1.7vw" }} />
                        </div>
                    </div>
                </div>
                <div style={{ height: "80px", width: "40px", backgroundColor: "transparent", marginLeft: "40vw" }}><HomeRepairServiceOutlinedIcon className='workicon' style={{ height: "150px", width: "75px", color: "#2857a4",marginTop:"50px",marginLeft:"-130px" }} /></div>
                <div className='WorkExp' style={{ fontSize: "50px", color: "#2857a4", marginTop: "10px", marginLeft: "90px" }}>Work Experience</div>
                <div className='Reactjs' style={{ height: "50px", width: "300px", backgroundColor: "transparent", fontSize: "25px", fontWeight: "bold", marginLeft: "190px", marginTop: "120px", color: "#2857a4" }}>React Js Developer<h3 style={{ fontSize: "25px", fontWeight: "bold", marginTop: "-5px", color: "#FF4500" }}>Omninos Solutions</h3></div>
                <div className='reactabt' style={{ height: "200px", width: "450px", color: "black", backgroundColor: "transparent", textAlign: "left", marginLeft: "230px", marginTop: "20px" }}>During my React.js internship, I'll work on some projects and learn how to build interactive user interfaces using React. I'll learn how to create reusable components, manage state and props,use React hooks and libraries, and debug my code. I'll also collaborate with other developers,participate in code reviews, and use modern development tools and practices.I'll also have gained practical experience and a solid understanding of React.js development.</div>
                <div className='Nodejs' style={{ height: "50px", width: "300px", backgroundColor: "transparent", fontSize: "25px", fontWeight: "bold", marginLeft: "760px", color: "#2857a4",marginTop:"-70px" }}>Node Js Developer<h3 style={{ fontSize: "25px", fontWeight: "bold", marginTop: "-5px", color: "#FF4500" }}>Omninos Solutions</h3></div>
                <div className='Nodejsabt' style={{ height: "200px", width: "450px", color: "black", backgroundColor: "transparent", textAlign: "left", marginLeft: "800px", marginTop: "20px" }}>During my Node.js internship, I'll work on some projects and learn how to build interactive user interfaces using Node Js. I'll learn how to create reusable components, manage state and props,use React hooks and libraries, and debug my code. I'll also collaborate with other developers,participate in code reviews, and use modern development tools and practices.I'll also have gained practical experience and a solid understanding of Node.js development.</div>
            </div>
   </>
  )
}

export default Experience