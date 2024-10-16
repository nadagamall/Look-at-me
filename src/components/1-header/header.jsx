import React, { useEffect, useState } from "react";
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'; // استيراد الأيقونات

const Header = () => {
    const [showModal, setshowModal] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");
    useEffect(() => {

        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light")
        }
        else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme]);


    return (


        <header className="flex">
            <button onClick={() => {
                setshowModal(true)

            }} className="menu icon-menu flex">

            </button>
            <div />

            <nav>
                <ul className="flex">
                    <li><a href="">Home</a></li>
                    <li><a href="">TV shows</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">Sports</a></li>
                    <li><a href="">kids</a></li>
                </ul>
            </nav>

            <button onClick={() => {
                //send value to ls
                localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
                // get value from ls (local storage)
                setTheme(localStorage.getItem("currentMode"))



            }} className="mode flex">
               {theme === "dark" ? (
                    <FontAwesomeIcon icon={faMoon} /> // أيقونة القمر
                ) : (
                    <FontAwesomeIcon icon={faSun} /> // أيقونة الشمس
                )}
            </button>

            {showModal &&
                (
                    <div className="fixed">
                        <ul className="modal">
                            <li>
                                <button className="icon-cross" onClick={() => {
                                    setshowModal(false)
                                }} />




                            </li>
                            <li><a href="">About</a></li>
                            <li><a href="">TV shows</a></li>
                            <li><a href="">films</a></li>
                            <li><a href="">Series</a></li>
                            <li><a href="">User</a></li>
                        </ul>

                    </div>
                )
            }



        </header>

    );

}

export default Header;

