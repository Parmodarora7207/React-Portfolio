import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import img1 from '../BACKGROUND.jpg';
import img2 from '../mypic.jpg';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import '../layout.css'
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined'; import '../App.css';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import img3 from '../Rove India.jpg';
import img4 from '../2nd pic.png';
import img5 from '../Imdb movie.png';
import img6 from '../Screenshot (66).png';
import img7 from '../Screenshot (67).png';
import img8 from '../Screenshot (68).png';
import img9 from '../Screenshot (69).png';
const layout = () => {
    return (
        <>
            <div id='header' style={{ backgroundImage: `url(${img1})`, height: "67vh", width: "100%", justifyContent: "center", alignItems: "center", backgroundPosition: "center", backgroundSize: "cover", backgroundAttachment: "fixed", paddingTop: "1.2rem", opacity: "0.8" }}>
                <nav id='nav' style={{ textAlign: "center" }}>
                    <ul className='1st' style={{ display: "flex", backgroundColor: "transparent", justifyContent: "center", alignItems: "center" }}>
                        <li className='li' style={{ listStyle: "none", padding: "15px", margin: "10px" }}>
                            <Link to="Home" style={{ color: "white", textDecoration: 'none' }}>Home</Link>
                        </li>
                        <li className='li' style={{ listStyle: "none", padding: "15px", margin: "10px" }}>
                            <Link to="/About" style={{ color: "white", textDecoration: 'none' }}>About</Link>
                        </li>
                        <li className='li' style={{ listStyle: "none", padding: "15px", margin: "10px" }}>
                            <Link to="/Skills" style={{ color: "white", textDecoration: 'none' }}>Skills</Link>
                        </li>
                        <li className='li' style={{ listStyle: "none", padding: "15px", margin: "10px" }}>
                            <Link to="/Experience" style={{ color: "white", textDecoration: 'none' }}>About</Link>
                        </li>
                        <li className='li' style={{ listStyle: "none", padding: "15px", margin: "10px" }}>
                            <Link to="/Education" style={{ color: "white", textDecoration: 'none' }}>Education</Link>
                        </li>
                        <li className='li' style={{ listStyle: "none", padding: "15px", margin: "10px" }}>
                            <Link to="/Projects" style={{ color: "white", textDecoration: 'none' }}>Projects</Link>
                        </li>
                        <li className='li' style={{ listStyle: "none", padding: "15px", margin: "10px" }}>
                            <Link to="/Contact" style={{ color: "white", textDecoration: 'none' }}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div style={{ backgroundColor: "transparent", color: "white", fontSize: "50px", marginTop: "10rem", fontWeight: "bold" }} className="nameheading">Parmod Kumar</div>
                <div className='myimg' style={{ backgroundImage: `url(${img2})`, height: "26vh", width: "13vw", backgroundPosition: "center", backgroundSize: "cover", alignItems: "center", justifyContent: "center", marginLeft: "42vw", marginTop: "8vh", borderRadius: "150px", border: "2px solid white" }}></div>
            </div>
            <div className='abt' style={{ height: "35vh", width: "100%", backgroundColor: "white", display: "flex" }}>
                <div className='second' style={{ height: "20vh", width: "80%", backgroundColor: "transparent", fontSize: "20px", color: "grey", marginLeft: "12vw", marginTop: "13vh" }}>I believe that I can be a good team player with the ability to work under minimum guidance especially when carrying out challenging assignment. I consider myself as a very ambitious, motivated, career oriented person, willing to accept challenges, energetic and results oriented, with excellent leadership abilities,and an active and hardworking person who is patient and diligent, with great adaptability to changing working conditions.</div>
            </div>
            {/* Skills div start */}
            <div className='skilldiv' style={{ height: "70vh", width: "100%", backgroundColor: "#9e9b9b29" }}>
                <div style={{ height: "80px", width: "40px", backgroundColor: "transparent", marginLeft: "40vw" }}><ContactMailOutlinedIcon className='icon1' style={{ height: "150px", width: "75px", color: "#2857a4" }} /></div>
                <div id='skills' style={{ fontSize: "50px", color: "#2857a4", marginTop: "-32px", marginLeft: "70px" }}>SKILLS</div>
                <div className='mySkills1' style={{ height: "35px", width: "190px", backgroundColor: "silver", borderRadius: "20px", display: "flex", marginLeft: "230px", marginTop: "80px" }}><div style={{ height: "35px", width: "170px", backgroundColor: "#2857a4", borderTopLeftRadius: '20px', borderBottomLeftRadius: "20px" }}><h5 style={{ marginTop: "3px", marginLeft: "-100px", color: "white", fontSize: "20px", fontWeight: "normal" }}>HTML</h5></div></div>
                <div className='mySkills2'style={{ height: "35px", width: "190px", backgroundColor: "silver", borderRadius: "20px", display: "flex", marginLeft: "500px", marginTop: "-36px" }}><div style={{ height: "35px", width: "170px", backgroundColor: "#FF4500", borderTopLeftRadius: '20px', borderBottomLeftRadius: "20px" }}><h5 style={{ marginTop: "3px", marginLeft: "-100px", color: "white", fontSize: "20px", fontWeight: "normal" }}>CSS</h5></div></div>
                <div className='mySkills3' style={{ height: "35px", width: "190px", backgroundColor: "silver", borderRadius: "20px", display: "flex", marginLeft: "800px", marginTop: "-36px" }}><div style={{ height: "35px", width: "170px", backgroundColor: "#795F80", borderTopLeftRadius: '20px', borderBottomLeftRadius: "20px" }}><h5 style={{ marginTop: "3px", marginLeft: "-70px", color: "white", fontSize: "20px", fontWeight: "normal" }}>Bootstrap</h5></div></div>
                <div className='mySkills4' style={{ height: "35px", width: "190px", backgroundColor: "silver", borderRadius: "20px", display: "flex", marginLeft: "1100px", marginTop: "-36px" }}><div style={{ height: "35px", width: "170px", backgroundColor: "#2857a4", borderTopLeftRadius: '20px', borderBottomLeftRadius: "20px" }}><h5 style={{ marginTop: "3px", marginLeft: "-60px", color: "white", fontSize: "20px", fontWeight: "normal" }}>Javascript</h5></div></div>
                <div className='mySkills5'style={{ height: "35px", width: "190px", backgroundColor: "silver", borderRadius: "20px", display: "flex", marginLeft: "230px", marginTop: "80px" }}><div style={{ height: "35px", width: "170px", backgroundColor: "#7CB68E", borderTopLeftRadius: '20px', borderBottomLeftRadius: "20px" }}><h5 style={{ marginTop: "3px", marginLeft: "-100px", color: "white", fontSize: "20px", fontWeight: "normal" }}>DOM</h5></div></div>
                <div className='mySkills6' style={{ height: "35px", width: "190px", backgroundColor: "silver", borderRadius: "20px", display: "flex", marginLeft: "500px", marginTop: "-36px" }}><div style={{ height: "35px", width: "170px", backgroundColor: "#2857a4", borderTopLeftRadius: '20px', borderBottomLeftRadius: "20px" }}><h5 style={{ marginTop: "3px", marginLeft: "-100px", color: "white", fontSize: "20px", fontWeight: "normal" }}>React</h5></div></div>
                <div className='mySkills7' style={{ height: "35px", width: "190px", backgroundColor: "silver", borderRadius: "20px", display: "flex", marginLeft: "800px", marginTop: "-36px" }}><div style={{ height: "35px", width: "170px", backgroundColor: "#795F80", borderTopLeftRadius: '20px', borderBottomLeftRadius: "20px" }}><h5 style={{ marginTop: "3px", marginLeft: "-100px", color: "white", fontSize: "20px", fontWeight: "normal" }}>Redux</h5></div></div>
                <div className='mySkills8'style={{ height: "35px", width: "190px", backgroundColor: "silver", borderRadius: "20px", display: "flex", marginLeft: "1100px", marginTop: "-36px" }}><div style={{ height: "35px", width: "170px", backgroundColor: "#7CB68E", borderTopLeftRadius: '20px', borderBottomLeftRadius: "20px" }}><h5 style={{ marginTop: "3px", marginLeft: "-60px", color: "white", fontSize: "20px", fontWeight: "normal" }}>Restful API</h5></div></div>
                <div className='mySkills9'style={{ height: "35px", width: "190px", backgroundColor: "silver", borderRadius: "20px", display: "flex", marginLeft: "400px", marginTop: "80px" }}><div style={{ height: "35px", width: "170px", backgroundColor: "#795F80", borderTopLeftRadius: '20px', borderBottomLeftRadius: "20px" }}><h5 style={{ marginTop: "3px", marginLeft: "-80px", color: "white", fontSize: "20px", fontWeight: "normal" }}>Node Js</h5></div></div>
                <div className='mySkills10'style={{ height: "35px", width: "190px", backgroundColor: "silver", borderRadius: "20px", display: "flex", marginLeft: "900px", marginTop: "-36px" }}><div style={{ height: "35px", width: "170px", backgroundColor: "#FF4500", borderTopLeftRadius: '20px', borderBottomLeftRadius: "20px" }}><h5 style={{ marginTop: "3px", marginLeft: "-60px", color: "white", fontSize: "20px", fontWeight: "normal" }}>MongoDB</h5></div></div>
            </div>
            {/* Work experience div start */}
            <div className='Work' style={{ height: "100vh", width: "100%", backgroundColor: "white" }}>
                {/* timeline divider */}
                <div id='timeline-divider'>
                    <div className='timeline-traveller'>
                        <div id='i'>
                            <AirplanemodeActiveIcon className='Airplane1' style={{ fontSize: "50", marginLeft: "-1.7vw" }} />
                        </div>
                    </div>
                </div>
                <div style={{ height: "80px", width: "40px", backgroundColor: "transparent", marginLeft: "40vw" }}><HomeRepairServiceOutlinedIcon className='workicon' style={{ height: "150px", width: "75px", color: "#2857a4" }} /></div>
                <div className='WorkExp' style={{ fontSize: "50px", color: "#2857a4", marginTop: "-32px", marginLeft: "270px" }}>Work Experience</div>
                <div className='Reactjs' style={{ height: "50px", width: "300px", backgroundColor: "transparent", fontSize: "25px", fontWeight: "bold", marginLeft: "190px", marginTop: "120px", color: "#2857a4" }}>React Js Developer<h3 style={{ fontSize: "25px", fontWeight: "bold", marginTop: "-5px", color: "#FF4500" }}>Omninos Solutions</h3></div>
                <div className='reactabt' style={{ height: "200px", width: "450px", color: "black", backgroundColor: "transparent", textAlign: "left", marginLeft: "230px", marginTop: "20px" }}>During my React.js internship, I'll work on some projects and learn how to build interactive user interfaces using React. I'll learn how to create reusable components, manage state and props,use React hooks and libraries, and debug my code. I'll also collaborate with other developers,participate in code reviews, and use modern development tools and practices.I'll also have gained practical experience and a solid understanding of React.js development.</div>
                <div className='Nodejs' style={{ height: "50px", width: "300px", backgroundColor: "transparent", fontSize: "25px", fontWeight: "bold", marginLeft: "760px", color: "#2857a4" }}>Node Js Developer<h3 style={{ fontSize: "25px", fontWeight: "bold", marginTop: "-5px", color: "#FF4500" }}>Omninos Solutions</h3></div>
                <div className='Nodejsabt' style={{ height: "200px", width: "450px", color: "black", backgroundColor: "transparent", textAlign: "left", marginLeft: "800px", marginTop: "20px" }}>During my Node.js internship, I'll work on some projects and learn how to build interactive user interfaces using Node Js. I'll learn how to create reusable components, manage state and props,use React hooks and libraries, and debug my code. I'll also collaborate with other developers,participate in code reviews, and use modern development tools and practices.I'll also have gained practical experience and a solid understanding of Node.js development.</div>
            </div>

            {/* Education div start */}
            <div className='educationdiv' style={{ height: "100vh", width: "100%", backgroundColor: "#9e9b9b29" }}>
                <div style={{ height: "80px", width: "40px", backgroundColor: "transparent", marginLeft: "40vw" }}><SchoolOutlinedIcon className='Schoolicon' style={{ height: "150px", width: "75px", color: "#2857a4" }} /></div>
                <div className='Education' style={{ fontSize: "50px", color: "#2857a4", marginTop: "-32px", marginLeft: "150px" }}>Education</div>
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
            {/* Projects Div start */}
            <div className='projectsdiv' style={{ height: "60vh", width: "100%", backgroundColor: "white" }}>
                <div style={{ height: "80px", width: "40px", backgroundColor: "transparent", marginLeft: "40vw" }}><StorageOutlinedIcon className='projIcon' style={{ height: "150px", width: "75px", color: "#2857a4" }} /></div>
                <div className='Projects' style={{ fontSize: "50px", color: "#2857a4", marginTop: "-40px", marginLeft: "680px", display: "flex" }}>Projects</div>
                {/* pics start */}
                <div id='portfolio-container'>
                    {/* rove india */}
                    <div id="portfolio-image-container">
                        <img src={img3}/>
                        <div id="portfolio-details">
                            <p>
                                <h6>Rove India</h6>
                                It is Trave-Website in this there is booking section , contact section ,and also some packages .
                            </p>
                        </div>
                    </div>
                    {/* Movie app */}
                    <div id="portfolio-image-container">
                        <img src={img4} />
                        <div id="portfolio-details">
                            <p>
                                <h6>MOVIE-APP</h6>
                                It is a Movie App Website You can search movie and add to favourite list and can also store it  unfavourite.
                            </p>
                        </div>
                    </div>
                    {/* imdb project */}
                    <div id="portfolio-image-container">
                        <img src={img5} />
                        <div id="portfolio-details">
                            <p>
                                <h6>IMDB Rating</h6>
                                In this you can search any movie and see all the detail of movies like release date , star cast , imbd rating and also add in favourite list.
                            </p>
                        </div>
                    </div>
                    {/* to do list */}
                    <div id="portfolio-image-container">
                        <img src={img6} />
                        <div id="portfolio-details">
                            <p>
                                <h6>TO-DO List</h6>
                                In this you can add any task , mark it as a complete , delete the task , edit the task.
                            </p>
                        </div>
                    </div>
                    {/*habit tracker  */}
                    <div id="portfolio-image-container">
                        <img src={img7} />
                        <div id="portfolio-details">
                            <p>
                                <h6>Habit-Tracker</h6>
                                In this you can add any habit like exercise and track it all the week as the day pass you can mark it done, in progress, or not done.
                            </p>
                        </div>
                    </div>
                    {/* album list */}
                    <a href="https://albumlist-16e5a.web.app/">
                <div id="portfolio-image-container">
                    <img src={img8}/>
                    <div id="portfolio-details">
                        <p>
                            <h6>Album List</h6>
                            It is Album list project , in this you can add your favourite album and also you can update it and delete it .
                        </p>
                    </div>
                </div>
            </a>
                    {/* ping-pong game */}
                    <div id="portfolio-image-container">
                        <img src={img9} />
                        <div id="portfolio-details">
                            <p>
                                <h6>Album List</h6>
                                IT is Ping-pong game build using javaScrip. in which you can play the game easily with enjoyment.
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact div start */}
            <div className='contactdiv' style={{ height: "85vh", width: "100%", backgroundColor: "#2857a4", marginTop: "10vh" }}>
                <div style={{ height: "80px", width: "40px", backgroundColor: "transparent", marginLeft: "40vw" }}><ContactPhoneOutlinedIcon className='Contacticon' style={{ height: "150px", width: "75px", color: "white" }} /></div>
                <div className='contact-name' style={{ fontSize: "50px", color: "white", marginTop: "-33px", marginLeft: "60px" }}>Contact</div>
                <div id='contact-container' style={{ display: "flex", marginTop: "10vh" }}>
                    <div id='contact-form-conatiner' style={{ width: "50%", display: "block" }}>
                        <h3 className='getintouch' style={{ color: "white" }}>Get In Touch</h3>
                        <form style={{ display: "block" }} id='contact-form' action='https://formspree.io/f/meqbjzdd' method='POST'>
                            <input id='input-name' name='name' type='text' placeholder='Your-Name'></input>
                            <input id='input-email' name='email' type='text' placeholder='Your-Email'></input><br></br>
                            <textarea id='input-message' type='message' name='message' rows={2} cols={40} placeholder='Your Message'></textarea><br></br>
                            <button className='sub-btn' type='submit'>Send Message</button>
                        </form>
                    </div>
                    {/* Address DIV */}
                    <div id='my-details-container'>
                        <h3 className='address' style={{ color: "white", fontWeight: "500", fontSize: "20px" }}>My Address</h3>
                        <div className='my-deatils-info-container'>
                            <FmdGoodOutlinedIcon className='Icon1' style={{ color: "white", content: "\f3c5", marginLeft: "-6vw" }}></FmdGoodOutlinedIcon>
                            <h3 className='kalsana' style={{ color: "white", marginTop: "-3.8vh", marginLeft: "4vw" }}>Kalsana,India</h3>
                            <PhoneIphoneOutlinedIcon className='Icon2' style={{ color: "white", content: "\f3c5", marginLeft: "-6vw" }}></PhoneIphoneOutlinedIcon>
                            <h3 className='mob' style={{ color: "white", marginTop: "-3.8vh", marginLeft: "6vw" }}>+91 99915-73471</h3>
                            <MailOutlineOutlinedIcon className='Icon3' style={{ color: "white", content: "\f3c5", marginLeft: "-6vw" }}></MailOutlineOutlinedIcon>
                            <h3 className='gmail' style={{ color: "white", marginTop: "-3.8vh", marginLeft: "15vw" }}>Parmodkumar7207@gmail.com</h3>
                        </div>
                    </div>
                    {/*social media */}
                    <div id='my-details-container'>
                        <h3 className='Social' style={{ color: "white", fontWeight: "500", fontSize: "1.2rem", marginLeft: "20vw" }}>Social Media Links</h3>
                        <div className='my-deatils-info-container'>
                            <ul className='horizontal-list-social'>
                                <li><a href='https://www.linkedin.com/in/parmod-kumar-b05bb1175/'><LinkedInIcon className='linkedin' style={{ height: "40px", width: "40px", marginTop: "-1vh", paddingLeft: "2vw", marginLeft: "-3vw", color: "white" }} /></a></li>
                                <li><a href='https://github.com/Parmodarora7207/'><GitHubIcon className='github' style={{ height: "40px", marginTop: "-1vh", width: "40px", paddingLeft: "2vw", marginLeft: "-1vw", color: "white" }} /></a></li>
                                <li><a href='https://www.facebook.com/profile.php?id=100009530296131/'><FacebookIcon className='facebook' style={{ height: "40px", width: "40px", marginTop: "-1vh", paddingLeft: "2vw", marginLeft: "-1vw", color: "white" }} /></a></li>
                                <li><a href='https://www.instagram.com/parmodarora2709/'><InstagramIcon className='instagram' style={{ height: "40px", width: "40px", marginTop: "-1vh", paddingLeft: "2vw", marginLeft: "-1vw", color: "white" }} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Last div */}
            <div className='footer'  style={{ backgroundColor: "black", display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                <section id='footer' style={{ backgroundColor: "black" }}>
                    <h1 className='credit' style={{ color: "white", fontWeight: "normal" }}>Created By @
                        <span style={{ color: "yellow", fontWeight: "normal" }}>Parmod Kumar</span>| All Rights Reserved!</h1>
                </section>
            </div>
            <Outlet />
        </>
    )
}

export default layout