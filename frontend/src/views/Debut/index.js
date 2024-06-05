import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Form, Link } from "react-router-dom";
import { useDocumentTitle } from '../../hooks/useDocumentTitle'; 
import { useState } from "react";
import image1 from "./debutPics/image1.webp";
import image2 from "./debutPics/image2.jpg";
import image3 from "./debutPics/image3.jpg";
import image4 from "./debutPics/image4.jpg";
import image5 from "./debutPics/image5.jpg";
import image6 from "./debutPics/image6.png";
import image7 from "./debutPics/image7.jpg";
import image8 from "./debutPics/image8.webp";
import image9 from "./debutPics/image9.webp";
import i4 from "./debutPics/i4.jpg";
import i5 from "./debutPics/i5.jpg";
import i6 from "./debutPics/i6.jpg";
import i7 from "./debutPics/i7.jpg";
import i8 from "./debutPics/i8.jpg";
import i9 from "./debutPics/i9.jpg";
import s4  from "./debutPics/s4.png";
import t1  from "./debutPics/t1.jpg";
import w1  from "./debutPics/w1.webp";
import l1  from "./debutPics/l1.jpg";
import t2  from "./debutPics/t2.jpg";


const Debut = () => {
  useDocumentTitle("Sala store");

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const customerOpinions = [
    {
      id: 4,
      profilePic: i4,
      name: "Michael Brown",
      stars: 5,
      opinion: "Love the variety of products and quick shipping."
    },
    {
      id: 5,
      profilePic: i5,
      name: "Emily Wilson",
      stars: 4,
      opinion: "Responsive customer support and easy returns process."
    },
    {
      id: 6,
      profilePic: i6,
      name: "David Anderson",
      stars: 4,
      opinion: "Impressed with the quality and pricing of the items."
    },
    {
      id: 7,
      profilePic: i7,
      name: "Sophia Martinez",
      stars: 5,
      opinion: "The best online shopping experience I've had so far! Great products and fast delivery."
    },
    {
      id: 8,
      profilePic: i8,
      name: "Ethan Johnson",
      stars: 4,
      opinion: "Highly recommend this store! Good prices and reliable service."
    },
    {
      id: 9,
      profilePic: i9,
      name: "Olivia Davis",
      stars: 4,
      opinion: "Amazing selection of products and excellent customer support. Will definitely shop here again!"
    }
  ];
  return (
    <>
     <div className="carousel-wrapper" >
        <Carousel 
        showStatus={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        >
          <div>
            <img src={image1} alt="Style and Watch" className="slide-image" />
            <div className="carousel-caption">
              <h2>Style and best Watches </h2>
            </div>
          </div>
          <div>
            <img src={image2} alt="Phones" className="slide-image" />
            <div className="carousel-caption">
              <h2>Latest phones 2024</h2>
            </div>
          </div>
          <div>
            <img src={image3} alt="Clothes" className="slide-image" />
            <div className="carousel-caption">
              <h2>Best Clothes collections</h2>
            </div>
          </div>
          <div>
            <img src={image4} alt="Home Appliance" className="slide-image" />
            <div className="carousel-caption">
              <h2>All Electronic items available</h2>
            </div>
          </div>
        </Carousel>
    </div>
    
    <div className="galerie">
      <h2>Check out our last updates</h2>
          <div className="gallery-images">
            <img src={image5} alt="Gallery Image 1" />
            <img src={image6} alt="Gallery Image 2" />
            <img src={image7} alt="Gallery Image 3" />
            <img src={image8} alt="Gallery Image 2" />
            <img src={image9} alt="Gallery Image 3" />
          </div>
    </div>

    <div className="button-sender">
        <div className="button-all">
            <Link to="/Landing" className="button-link" style={{color:'black'}}><button className="button-it">Start Shopping!</button></Link> 
        </div>
    </div>

    <div className="container1">
      <div className="row">
        <div className="col">
          <h1>Quality Products</h1>
          <p>Our e-commerce platform prioritizes quality above all else. We source our products from trusted suppliers and ensure that each item meets our stringent standards for durability, functionality, and aesthetics. From electronics to fashion, every product you find on our website is carefully selected to provide you with a satisfying shopping experience.</p>
        </div>
        <div className="col">
          <h1>Efficient Delivery</h1>
          <p>Timely delivery is crucial in the world of e-commerce, and we understand the importance of getting your orders to you quickly and efficiently. Our logistics network is optimized for speed and reliability, ensuring that your purchases reach your doorstep in the shortest possible time frame. We also offer tracking services so you can monitor your shipment every step of the way.</p>
        </div>
        <div className="col">
          <h1>Customer Satisfaction</h1>
          <p>At our e-commerce store, customer satisfaction is at the core of everything we do. We prioritize excellent customer service by offering easy returns, responsive support, and personalized recommendations based on your preferences. Your shopping experience with us is not just about transactions but building a lasting relationship based on trust and reliability.</p>
        </div>
      </div>
    </div>
    
    <div
      className="floateffected"
      style={{ marginTop: "40px", marginBottom: "40px" }}
      onMouseEnter={handleHover}
    >
      <div
        style={{ color: "skyBlue", fontSize: "45px", fontWeight: "bold", fontFamily: "arial" }}
      >
      <img src={s4} alt="Floating Image" style={{ width: "300px" }} />
      
        Nike sneacker <span style={{ color: "green" }}>Available!</span>
      </div>
    </div>

    <div className="customer-opinions">
        <div className="opinions-heading-container">
          <h2 className="opinions-heading">Best Opinions</h2>
        </div>
        <div className="opinions-container">
          {customerOpinions.map(opinion => (
            <div className="opinion-card" key={opinion.id}>
              <div className="profile-pic">
                <img src={opinion.profilePic} alt={opinion.name} />
              </div>
              <div className="details">
                <div className="name-stars">
                  <p className="name">{opinion.name}</p>
                  <div className="star-rating">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={index < opinion.stars ? "star-filled" : "star-empty"}
                      ></span>
                    ))}
                  </div>
                </div>
                <p className="opinion-text">{opinion.opinion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    <div className="quote-image-section">
      <div className="quote-half">
        <div className="quote-content">
          <p className="quote-text">
            "Your destination for stylish and beautiful e-commerce experiences."
          </p>
        </div>
      </div>
      <div className="image-half">
        <div className="image-content">
           <img src={image5} alt="Gallery Image 1" />
        </div>
      </div>
    </div>

    <div class="border"></div>

    <div class="main">
      <ul class="cards">
        <li class="cards_item">
          <div class="cardE" tabindex="0">
            <div class="card_image"><img src={l1} alt="A stylish clothing display."/></div>
            <div class="card_content">
              <h2 class="card_title">Fashion Collection &#x2022; $39</h2>
              <div class="card_text">
                <p>Explore our latest collection of trendy clothes! This ensemble features a mix of stylish outfits and accessories, perfect for any occasion.</p>
                <p>Available in various sizes and colors to suit your personal style. Complete your look with matching shoes and accessories for an extra touch of elegance.</p>
                <p class="upcharge">Upgrade to express shipping for $5 more.</p>
              </div>
            </div>
          </div>
        </li>

        <li class="cards_item">
          <div class="cardE" tabindex="0">
            <div class="card_image"><img src={t1} alt="A sleek smartphone on display."/></div>
            <div class="card_content">
              <h2 class="card_title">Tech Gadgets &#x2022; $699</h2>
              <div class="card_text">
                <p>Discover the ultimate tech gadgets! Our flagship smartphone packs cutting-edge features and powerful performance into a sleek design.</p>
                <p>Every aspect of this revolutionary device is crafted with precision and innovation, from the vibrant display to the advanced camera system. Elevate your digital experience with seamless connectivity and intuitive user interface.</p>
                <p class="upcharge">Add a protective case for $29 more.</p>
              </div>
            </div>
          </div>
        </li>
        <li class="cards_item">
          <div class="cardE" tabindex="0">
            <div class="card_image"><img src={w1} alt="A stylish watch display."/></div>
            <div class="card_content">
              <h2 class="card_title">Luxury Watches &#x2022; $599</h2>
              <div class="card_text">
                <span class="note">Limited Edition.</span>
                <p>Indulge in the sophistication of luxury watches! This exquisite timepiece blends timeless elegance with modern functionality, making it a statement accessory.</p>
                <p>Choose your style: <strong>classic leather, stainless steel, or premium gold-plated.</strong> Elevate your wrist game with precision craftsmanship and attention to detail.</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
  </div>

  <div class="border"></div>

  <div class="row map-section">
    <div class="col-lg-12 col-12">
        <h2 class="mb-5">Visitez <u class="text-info"> Nous</u></h2>
    </div>
    <div class="col-lg-12 col-12 google-map-container">
     <iframe class="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.609014184702!2d-8.02285522569005!3d31.644553940998378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee9eb5090999%3A0x2dca05e37a64f83b!2sFacult%C3%A9%20des%20Sciences%20et%20Techniques!5e0!3m2!1sfr!2sma!4v1716326765902!5m2!1sfr!2sma"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>

                    
<div class="footer bg-gray-900" >
    <div class="containerz mx-auto text-white py-10">
        <div class="text-center">
            <h3 class="title text-3xl mb-3">Get The mobile App</h3>
            <p class="subtitle">Stay easy. All day, every day.</p>
            <div class="download-buttons my-10">
                <div class="button google-play flex items-center border rounded-lg px-4 py-2 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="icon w-7 md:w-8" width={50}/>
                    <div class="text-left ml-3">
                        <p class='text-xs text-gray-200'>Download on</p>
                        <p class="text-sm md:text-base">Google Play Store</p>
                    </div>
                </div>
                <div class="button apple-store flex items-center border rounded-lg px-4 py-2 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="icon w-7 md:w-8" width={50}/>
                    <div class="text-left ml-3">
                        <p class='text-xs text-gray-200'>Download on</p>
                        <p class="text-sm md:text-base">Apple Store</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-links mt-28 flex flex-col items-center text-sm text-gray-400">
            <p class="copy-right order-2 mt-8">&copy; MLH store, 2024.</p>
            <div class="links order-1">
                <span class="link px-2">About us</span>
                <span class="link px-2 border-l">Contact us</span>
                <span class="link px-2 border-l">Privacy Policy</span>
            </div>
        </div>
    </div>
</div>



    <style>
        {`
            .bg-gray-900 {
                --tw-bg-opacity: 1;
                background-color: rgb(17 24 39 / var(--tw-bg-opacity));
            }
            
            .text-white {
                --tw-text-opacity: 1;
                color: rgb(255 255 255 / var(--tw-text-opacity));
            }
            
            .py-10 {
                padding-top: 1rem; /* Reduced padding top */
                padding-bottom: 1rem; /* Reduced padding bottom */
            }
            
            .max-w-2xl {
                max-width: 42rem;
            }
            
            .mx-auto {
                margin-left: auto;
                margin-right: auto;
            }
            
            .text-center {
                text-align: center;
            }
            
            .text-3xl {
                font-size: 1.875rem;
                line-height: 2.25rem;
            }
            
            .mb-3 {
                margin-bottom: 0.75rem;
            }
            
            blockquote,
            dd,
            dl,
            figure,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            hr,
            p,
            pre {
                margin: 0;
            }
            
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-size: inherit;
                font-weight: inherit;
            }
            
            .justify-center {
                justify-content: center;
            }
            
            .my-10 {
                margin-top: 1rem; /* Reduced margin top */
                margin-bottom: 1rem; /* Reduced margin bottom */
            }
            
            .py-2 {
                padding-top: 0.25rem; /* Reduced padding top */
                padding-bottom: 0.25rem; /* Reduced padding bottom */
            }
            
            .px-4 {
                padding-left: 0.5rem; /* Reduced padding left */
                padding-right: 0.5rem; /* Reduced padding right */
            }
            
            .border {
                border-width: 1px;
            }
            
            .rounded-lg {
                border-radius: 0.5rem;
            }
            
            .items-center {
                align-items: center;
            }
            
            .w-auto {
                width: auto;
            }
            
            .w-52 {
                width: 13rem;
            }
            
            .flex {
                display: flex;
            }
            
            .mx-2 {
                margin-left: 0.25rem; /* Reduced margin left */
                margin-right: 0.25rem; /* Reduced margin right */
            }
            
            .google-play, .apple-store {
                display: flex; /* Use flexbox to align items */
                align-items: center; /* Align items vertically */
                margin-right: 1rem; /* Adjust margin between elements */
            }

            .google-play img, .apple-store img {
                width: 2rem; /* Adjust icon size */
                height: 2rem; /* Adjust icon size */
            }

            .google-play .text-left, .apple-store .text-left {
                flex-grow: 1; /* Allow text to fill remaining space */
            }

            .download-buttons {
                display: flex; /* Use flexbox for the button container */
                justify-content: center; /* Center the buttons horizontally */
            }

            .footer-links {
              margin-top: 2.5rem; /* Adjust margin as needed */
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center; /* Center text horizontally */
              font-size: 0.875rem; /* Adjust font size as needed */
              color: #9CA3AF; /* Adjust text color as needed */
          }
          
          .links {
              margin-top: 0.5rem; /* Adjust margin between links */
          }
          
          .link {
              padding: 0.25rem 0.5rem; /* Adjust padding for links */
              border-radius: 0.25rem; /* Adjust border-radius for links */
          }
          
          .link.border-l {
              border-left: 1px solid #9CA3AF; /* Adjust border color for left borders */
          }
          
          .copy-right {
              margin-top: 1.5rem; /* Adjust margin top for copy right */
          }
          

      
        .map-section {
            position: relative;
            padding: 20px;
            margin: 20px auto; /* Center the section horizontally */
            width: 80%; /* Adjust width as needed */
            max-width: 800px; /* Maximum width for larger screens */
            background-color: #f8f9fa; /* Light background color for contrast */
            border-radius: 10px; /* Soft rounded corners for the entire section */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
        }
    
        .map-section h2 {
            text-align: center;
            margin-bottom: 20px;
            color: #333; /* Darker text color for better readability */
            font-weight:bold;
            font-size:30px;
        }
    
        .map-section .google-map {
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 15px; /* Rounded corners for the map iframe */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for the map */
        }
    
        .map-section .google-map-container {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%; /* 16:9 aspect ratio */
            overflow: hidden;
            border-radius: 15px; /* Ensure container has rounded corners */
        }
    
        .map-section .google-map-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none; /* Remove border from iframe */
            border-radius: 15px; /* Ensure iframe has rounded corners */
        }
        
          :root {
            --purple: #e2e2e2;
            --aqua:#ffd695;
            --violet: #fffb95;
            --fuchsia: #fd49a0;
            --white: black;
            --black: #222;
            --trueBlack: #000;
          }
          
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          
          
          
          .main {
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .cards {
            display: grid;
            flex-wrap: wrap;
            list-style: none;
            margin: 0;
            padding: 0;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
          }
          
          .cards_item {
            display: flex;
            margin:100px auto 100px auto;
          }
          
          .card_image {
            display: flex;
            height: 250px;
            box-shadow: 0 50px 100px 0 var(--violet);
          }
          
          .card_image img {
            display: block;
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          
          .cardE {
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
            background-color: var(--purple);
            border-radius: 5px 25px 5px 50px;
            transition: transform 0.1s linear, box-shadow 0.2s;
          }
          
          .card_text:focus,
          .cardE:focus {
            outline: 2px dashed var(--aqua);
          }
          
          .cardE:focus,
          .cardE:hover {
            transform: scale(1.01);
            box-shadow: 0 10px 5px -5px rgba(0, 0, 0, 0.2);
          }
          
          .card_content {
            padding: 0.5rem 1rem 1rem;
            color: var(--white);
          }
          
          .card_title {
            position: absolute;
            top: 0;
            right: 0;
            width: 90%;
            height: auto;
            color: var(--black);
            padding: 0.5rem;
            border-radius: 5px 0 0 5px;
            transform: rotate(-3.3deg);
            transform-origin: left top;
            font-family: Georgia, Times, serif;
            font-weight: 600;
            font-size: 1.325rem;
            postition: relative;
            overflow: hidden;
            z-index: 1;
            background-color: #ffd695;
            animation: 0s 0s fly-in 0 reverse both;
          }
          
          @media (min-width: 535px) {
            .card_title {
              animation: 0.5s 0.25s fly-out 1 both;
            }
          }
          
          .cardE:focus .card_title,
          .cardE:hover .card_title {
            animation: 0.5s ease-in 0s fly-in 1 both;
          }
          
          .card_text {
            font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica,
              Helvetica Neue, Arial, sans-serif;
            line-height: 1.5;
            text-size-adjust: 0.2px;
            padding: 0 1rem;
          }
          
          .card_text p:first-of-type:first-letter {
            font-size: 1.8em;
            font-family: Georgia, Times, serif;
            margin-right: 0.05em;
          }
          
          @media (min-width: 480px) {
            .card_text {
              overflow: auto;
              max-height: 20rem;
              scrollbar-width: thin;
              scrollbar-color: var(--aqua) var(--violet);
            }
          
            .card_text::-webkit-scrollbar {
              width: 12px;
            }
          
            .card_text::-webkit-scrollbar-track {
              background: var(--violet);
            }
          
            .card_text::-webkit-scrollbar-thumb {
              background-color: var(--aqua);
            }
          }
          
          .card_text strong {
            color: var(--aqua);
          }
          
          .upcharge {
            position: relative;
            font-weight: 600;
            background-color: var(--violet);
            padding: 0.5rem 0.75rem;
            color: var(--trueBlack);
            border-radius: 0 10px;
            z-index: 0;
            overflow: hidden;
          }
          
          .upcharge::after,
          .upcharge::before {
            content: "+";
            display: block;
            line-height: 0;
            font-size: 3rem;
            position: absolute;
            color: var(--purple);
            z-index: -1;
            opacity: 0.3;
          }
          
          .upcharge::before {
            left: 0;
            top: 0.5rem;
          }
          
          .upcharge::after {
            right: 0;
            bottom: 1.25rem;
          }
          
          .note {
            display: block;
            text-align: center;
            padding: 0.5rem;
            font-weight: 900;
            background-image: linear-gradient(
              -45deg,
              transparent 10%,
              var(--aqua) 10.5%,
              var(--aqua) 90%,
              transparent 90.5%
            );
            color: var(--black);
            font-size: 1.3em;
            font-style: italic;
            margin-top: 1rem;
          }
          
          @keyframes fly-in {
            0% {
              top: 0;
              right: 0;
              font-size: 1.325rem;
            }
          
            25% {
              top: 0;
              right: -200%;
              font-size: 1.325rem;
            }
          
            26% {
              font-size: 2rem;
            }
          
            100% {
              top: 2rem;
              right: 0;
              font-size: 2rem;
            }
          }
          
          @keyframes fly-out {
            0% {
              top: 2rem;
              right: 0;
              font-size: 2rem;
            }
          
            50% {
              top: 0;
              right: -200%;
              font-size: 1.325rem;
            }
          
            100% {
              top: 0;
              right: 0;
              font-size: 1.325rem;
            }
          }
          
          .quote-image-section {
            display: flex;
            height: 500px; /* Adjust height as needed */
            margin-bottom:20px;
          }

          .quote-half,
          .image-half {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 1;
            overflow: hidden; /* Hide overflow for smooth transition */
          }

          .quote-half::before,
          .image-half::before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            width: 50%; /* Half of the section width */
            background-color: white; /* White background */
            z-index: -1;
            transition: transform 0.8s ease; /* Transition for the transform property */
          }

          .quote-half {
            background-color: #f5deb3; /* Light brown background */
          }

          

          .quote-half:hover::before,
          .image-half:hover::before {
            transform: translateX(-100%); /* Move the white section to the left on hover */
          }

          .quote-content,
          .image-content {
            padding: 20px;
            text-align: center;
            z-index: 1; /* Ensure content is above the white section */
          }

          .quote-text {
            font-family: "Arial", sans-serif; /* Choose your preferred font */
            font-size: 40px; /* Adjust font size as needed */
            font-weight: bold;
            color: #333; /* Text color */
          }

          /* Media query for responsiveness */
          @media (max-width: 768px) {
            .quote-text {
              font-size: 30px;
            }
          }


          .name {
            font-weight: bold;
            margin-bottom: 5px;
          }

          
          .opinion-text {
            font-style: italic;
            color: #555;
            margin-bottom: 10px;
          }
          .customer-opinions {
            margin: 40px 0;
          }

          .opinions-heading {
            text-align: center;
            margin-bottom: 20px;
            font-size: 24px;
            color: #333;
          }

          .opinions-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .opinion-card {
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .profile-pic img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 10px;
          }

          .details {
            text-align: center;
          }

          .name-stars {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 5px;
          }

          .star-rating {
            color: #f8c947;
            font-size: 20px;
          }

          .star-filled:before {
            content: "\\2605";
          }

          .star-empty:before {
            content: "\\2606";
          }

          .opinion-text {
            font-size: 16px;
            color: #333;
          }


          .floateffected img {
            width: 300px;
            transition: transform 1.5s ease-in-out; /* Added transition for smooth hover effect */
          }
          
          
          
          .floateffected:hover img {
            transform: translateX(800px); /* Move the image when hovered */
          }
          

          
          .container1{
            background-color:#fffbbb;
            margin:25px 10px;
            padding:40px;
            border-radius:20px;
          }
          .row{
            padding:20px;
            border-radius:20px;
            justify-content:space-around;
            gap:20px;
          }

          .col{
            background-color:#f3eae8;
            border-radius:20px;
            padding:20px;
            color:black;
          }
          .col h1{
            font-family:arial;
            text-align:center;
          }
          

          .button-sender{
            margin-top:50px;
            text-align:center;
          }
          
          .button-it{
            border:none;
            padding:20px;
            border-radius:20px;
            transition:background-color 0.5s;
          }


          .button-it:hover{
            background-color:#708ae4;
          }

          .button-link{
            text-decoration:none;
            font-size:20px;
            font-family:arial;
          }
          .carousel-wrapper {
            width: 100%;
          }

          .carousel-wrapper .carousel {
            position: absolute;
            top: 0;
            left: 0;
            width:100%;
            height:84%;
            margin-bottom:50px;
            margin-top:60px;
          }

          
          .carousel-caption {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);            
          }
          .carousel-caption h2{
            font-size: 30px; /* Larger font size for the heading */
            color: #fff;
            font-family: 'Roboto', sans-serif; /* A clean and modern font */
            font-weight: 500; /* Medium font weight for balance */
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 1px;
            z-index: 2;
            width: 80%;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          
          

          .galerie {
            margin-top: 600px;
            text-align: center;
          }

          .galerie h2 {
            font-size: 32px;
            margin-bottom: 20px;
            font-family: Arial, sans-serif;
            color:black;
          }

          .gallery-images {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(207px, 1fr));
            gap: 20px;
            justify-content: center;
          }

          .gallery-images img {
            width: 100%;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
          }

          .gallery-images img:hover {
            transform: scale(1.1);
          }
          
        `}
    </style>

    </>
  );
};

export default Debut;
