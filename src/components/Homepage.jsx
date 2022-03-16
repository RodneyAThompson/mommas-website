import React from "react"; 
// import Bookings from "./Booking";
import "./Homepage.css"
import Navbar from "./Navbar";
import "./Navbar.css"

function Homepage() {
    return(
        <div className="container">
            <Navbar />
        <div className="sign-up">
            
            <h2 id="title">Dust bunny cleaning</h2>
                <p id="bio">
                    Dust Bunny Cleaning is here for you and your cleaning needs. No job too big or too small, we clean it all! 
                    
                    Book an appointment today by signing-up and making an account. 
                </p>
                </div>
            
            
            <div className="about-me">
                <h2 id="abt-me">About me</h2>
                <p id="abt-section">
                    Hello, my name is Geri! I have 20+ years in house cleaning and the home improvement industry. 
                    I am a quick and conscientious worker, detail oriented, reliable and trustworthy. We all have busy lives and nobody likes to go home to a dirty house.. 
                    Let me help relieve you of that stress. Whether you need help with-in your home or office. No job too big or too small, I clean it all!
                    In an efficient timely manner. I cant wait to meet you!
                </p>
            </div>
            <div className="services">
                <h2 id="services-title">Services</h2>
                <p id="service-section">
                    first time detail cleaning is 100$ for 3 hours. 
                    regular weekly or biweekly service for 30$ an hour with a minimum of 3 hours. 
                    2 hour cleaning available for 70$. 
                    customers over a 15 mile radius from our office will be a 35$ an hour charge. 
                    Some specific requests can be met! laundry, linens changed, patio/backyard cleaning, carpet stain etc. 
                </p>
            </div>
            {/* <Bookings /> */}
        </div>
        
    )
}

export default Homepage;