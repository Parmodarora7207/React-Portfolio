import React from 'react'
import '../layout.css'
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import img3 from '../Rove India.jpg';
import img4 from '../2nd pic.png';
import img5 from '../Imdb movie.png';
import img6 from '../Screenshot (66).png';
import img7 from '../Screenshot (67).png';
import img8 from '../Screenshot (68).png';
import img9 from '../Screenshot (69).png';

const Projects = () => {
    return (
        <>
            <div className='projectsdiv' style={{ height: "80vh", width: "100%", backgroundColor: "white" }}>
                <div style={{ height: "80px", width: "40px", backgroundColor: "transparent", marginLeft: "40vw" }}><StorageOutlinedIcon className='projIcon' style={{ height: "150px", width: "75px", color: "#2857a4",marginTop:"50px" }} /></div>
                <div className='Projects' style={{ fontSize: "50px", color: "#2857a4", marginTop: "10px", marginLeft: "680px", display: "flex" }}>Projects</div>
                {/* pics start */}
                <div id='portfolio-container'>
                    {/* rove india */}
                    <div id="portfolio-image-container">
                        <img src={img3} />
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
                            <img src={img8} />
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
        </>

    )
}

export default Projects