import React from 'react';
import '../layout.css'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

const Education = () => {
  return (
    <>
    <div className='educationdiv' style={{ height: "100vh", width: "100%", backgroundColor: "#9e9b9b29" }}>
                <div style={{ height: "80px", width: "40px", backgroundColor: "transparent", marginLeft: "40vw" }}><SchoolOutlinedIcon className='Schoolicon' style={{ height: "150px", width: "75px", color: "#2857a4",marginTop:"50px",marginLeft:"-20px" }} /></div>
                <div className='Education' style={{ fontSize: "50px", color: "#2857a4", marginTop: "10px", marginLeft: "70px" }}>Education</div>
                <div id='timeline-divider1'>
                    <div className='timeline-traveller'>
                        <div id='i'>
                            <AirplanemodeActiveIcon className='Airplaneicon2' style={{ fontSize: "50", marginLeft: "-1.7vw" }} />
                        </div>
                    </div>
                </div>
            <div className='clg' style={{ height: "50px", width: "400px", backgroundColor: "tarnsparent", fontSize: "25px", fontWeight: "bold", marginLeft: "230px", marginTop: "120px", color: "#2857a4", textAlign: "left" }}>Govt PG College Ambala Cantt<h3 className='degree' style={{ fontSize: "25px", fontWeight: "bold", marginTop: "5px", color: "#FF4500", textAlign: "left" }}>B.Sc(Computer Science)</h3></div>
                <div style={{ height: "200px", width: "450px", color: "black", backgroundColor: "transparent", textAlign: "left", marginLeft: "230px", marginTop: "20px" }}><h3 className='passyr' style={{ fontSize: "25px", color: "grey" }}>July 2019-Present</h3></div>
                <div className='twelve' style={{ height: "50px", width: "500px", backgroundColor: "transparent", textAlign: "left", fontSize: "25px", fontWeight: "bold", marginLeft: "800px", color: "#2857a4", marginTop: "-100px" }}>Govt Sr Sec School Shahabad Markanda<h3 className='Twelvecls' style={{ fontSize: "25px", fontWeight: "bold", marginTop: "-5px", color: "#FF4500", backgroundColor: "transparent" }}>+2(Senior Secondary Education)</h3></div>
                <div  style={{ height: "200px", width: "450px", color: "black", backgroundColor: "transparent", textAlign: "left", marginLeft: "800px", marginTop: "20px" }}><h3 className='Two018' style={{ fontSize: "25px", color: "grey", textAlign: "left", marginLeft: "5px", marginTop: "-5px" }}>2018-2019</h3></div>
                <div className='Scl' style={{ height: "50px", width: "500px", backgroundColor: "transparent", textAlign: "left", fontSize: "25px", fontWeight: "bold", marginLeft: "230px", color: "#2857a4", marginTop: "-100px" }}>Bhartiya Sen Sec School Nalvi<h3 className='matric' style={{ fontSize: "25px", fontWeight: "bold", marginTop: "-5px", color: "#FF4500", backgroundColor: "transparent" }}>Matriculate</h3></div>
                <div style={{ height: "200px", width: "450px", color: "black", backgroundColor: "transparent", textAlign: "left", marginLeft: "800px", marginTop: "20px" }}><h3 className='two017' style={{ fontSize: "25px", color: "grey", textAlign: "left", marginLeft: "-570px", marginTop: "-5px" }}>2017-2018</h3></div>
            </div>
    </>
  )
}

export default Education