import React from 'react'
import '../layout.css'
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const Contact = () => {
  return (
    <>
     <div className='contactdiv' style={{ height: "85vh", width: "100%", marginTop: "10vh" }}>
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
                        <h3 className='address' style={{ color: "white", fontWeight: "500", fontSize: "25px" }}>My Address</h3>
                        <div className='my-deatils-info-container'>
                            <FmdGoodOutlinedIcon className='Icon1' style={{ color: "white", content: "\f3c5", marginLeft: "-10vw",fontSize:"25px" }}></FmdGoodOutlinedIcon>
                            <h3 className='kalsana' style={{ color: "white", marginTop: "-3.8vh", marginLeft: "4vw",fontSize:"25px" }}>Kalsana,India</h3>
                            <PhoneIphoneOutlinedIcon className='Icon2' style={{ color: "white", content: "\f3c5", marginLeft: "-10vw",fontSize:"25px" }}></PhoneIphoneOutlinedIcon>
                            <h3 className='mob' style={{ color: "white", marginTop: "-3.8vh", marginLeft: "6vw",fontSize:"25px" }}>+91 99915-73471</h3>
                            <MailOutlineOutlinedIcon className='Icon3' style={{ color: "white", content: "\f3c5", marginLeft: "-10vw",fontSize:"25px" }}></MailOutlineOutlinedIcon>
                            <h3 className='gmail' style={{ color: "white", marginTop: "-3.8vh", marginLeft: "14vw",fontSize:"25px" }}>Parmodkumar7207@gmail.com</h3>
                        </div>
                    </div>
                    {/*social media */}
                    <div id='my-details-container'>
                        <h3 className='Social' style={{ color: "white", fontWeight: "500", fontSize: "25px", marginLeft: "20vw" }}>Social Media Links</h3>
                        <div className='my-deatils-info-container'>
                            <ul className='horizontal-list-social'>
                                <li><a href='https://www.linkedin.com/in/parmod-kumar-b05bb1175/'><LinkedInIcon className='linkedin' style={{ height: "70px", width: "70px", marginTop: "-1vh", paddingLeft: "2vw", marginLeft: "-3vw", color: "white"}} /></a></li>
                                <li><a href='https://github.com/Parmodarora7207/'><GitHubIcon className='github' style={{ height: "70px", marginTop: "-1vh", width: "70px", paddingLeft: "2vw", marginLeft: "-1vw", color: "white",fontSize:"25px" }} /></a></li>
                                <li><a href='https://www.facebook.com/profile.php?id=100009530296131/'><FacebookIcon className='facebook' style={{ height: "70px", width: "70px", marginTop: "-1vh", paddingLeft: "2vw", marginLeft: "-1vw", color: "white",fontSize:"25px" }} /></a></li>
                                <li><a href='https://www.instagram.com/parmodarora2709/'><InstagramIcon className='instagram' style={{ height: "70px", width: "70px", marginTop: "-1vh", paddingLeft: "2vw", marginLeft: "-1vw", color: "white",fontSize:"25px" }} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

    </>
  )
}

export default Contact