import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../layout.css'
import img1 from '../BACKGROUND.jpg';
import img2 from '../mypic.jpg';
import 'bootstrap/dist/css/bootstrap.css';
const Layout = () => {
    return (
        <>
            <div id='header' style={{ backgroundImage: `url(${img1})`, height: "67vh", width: "100%", justifyContent: "center", alignItems: "center", backgroundPosition: "center", backgroundSize: "cover", backgroundAttachment: "fixed", paddingTop: "1.2rem", opacity: "0.8" }}>
                <nav id='nav' style={{ textAlign: "center" }}>
                    <ul className='first' style={{ display: "flex", backgroundColor: "transparent", justifyContent: "center", alignItems: "center" }}>
                        <li className='li' style={{ listStyle: "none", padding: "15px", margin: "10px" }}>
                            <Link to={"/"} style={{ color: "white", textDecoration: 'none' }}>Home</Link>
                        </li>
                        <li className='li' style={{ listStyle: "none", padding: "15px", margin: "10px" }}>
                            <Link to={"/about"} style={{ color: "white", textDecoration: 'none' }}>About</Link>
                        </li>
                        <li className='li' style={{ listStyle: "none", padding: "15px", margin: "10px" }}>
                            <Link to={"/skill"} style={{ color: "white", textDecoration: 'none' }}>Skills</Link>
                        </li>
                        <li className='li' style={{ listStyle: "none", padding: "15px", margin: "10px" }}>
                            <Link to={"/experience"} style={{ color: "white", textDecoration: 'none' }}>Experience</Link>
                        </li>
                        <li className='li' id='Secondli' style={{ listStyle: "none", padding: "15px", margin: "10px" }}>
                            <Link to={"/Education"} style={{ color: "white", textDecoration: 'none' }}>Education</Link>
                        </li>
                        <li className='li' id='Secondli' style={{ listStyle: "none", padding: "15px", margin: "10px" }}>
                            <Link to={"/Projects"} style={{ color: "white", textDecoration: 'none' }}>Projects</Link>
                        </li>
                        <li className='li' id='Secondli' style={{ listStyle: "none", padding: "15px", margin: "10px" }}>
                            <Link to={"/Contact"} style={{ color: "white", textDecoration: 'none' }}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div style={{ backgroundColor: "transparent", color: "white", fontSize: "50px", marginTop: "10rem", fontWeight: "bold" }} className="nameheading">Parmod Kumar</div>
                <div className='myimg' style={{ backgroundImage: `url(${img2})`, height: "26vh", width: "13vw", backgroundPosition: "center", backgroundSize: "cover", alignItems: "center", justifyContent: "center", marginLeft: "42vw", marginTop: "8vh", borderRadius: "150px", border: "2px solid white" }}></div>
            </div>
            <Outlet />
        </>
    )
}

export default Layout