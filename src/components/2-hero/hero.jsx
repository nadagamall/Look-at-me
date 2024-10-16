import React from "react";
import './hero.css';
import Lottie from "lottie-react";
import whatchAnimation from "../../assets/animation/Animationmovies-1718306556863.json";
import { useRef } from "react";
import { motion } from "framer-motion";



const Hero = () => {
    const lottieRef = useRef();
    return (
        <section className="hero flex">
            <div className="left-section">

                <div className="parent-avatar flex">
                    <motion.img 
                    initial={{transform:"scale(0)"}}
                    animate={{transform:"scale(1.1)"}}
                    transition={{damping:6 , type:"spring", stiffness:100 }}


                    src="./hero.jpeg" className="avatar" alt="avatar" />
                    <div className="icon-verified_user"></div>
                </div>


                <motion.h1
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2}}
                
                className="title">
                    Enjoy millions of the latest Android apps, games, music, movies, TV, books, magazines & more. Anytime, anywhere, across your devices.
                </motion.h1>
                <p className="sub-title">
                    Get ready to immerse yourself in a unique cinematic experience with muvi Cinemas. Browse latest movies, showtimes, and our experiences.
                </p>

                <div className="all-icons flex">
                    <div className="icon icon-instagram1"></div>
                    <div className="icon icon-twitter"></div>
                </div>
            </div>
            <div className="right-section animation">
                <Lottie lottieRef={lottieRef} className='contact-animation'
                onLoadedImages={() => {
                    // @ts-ignore
                    // https://lottiereact.com/
                    lottieRef.current.setSpeed(0.5);
                }}
                    style={{ height: 400, width: 400 }}
                    animationData={whatchAnimation}
                     />
            </div>
        </section>


    );



}

export default Hero;