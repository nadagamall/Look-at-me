import { faL } from '@fortawesome/free-solid-svg-icons';
import './main.css';
import { useState } from 'react';
import { myProject } from './myProjects';
import { myProject2 } from './myProjects';
import { AnimatePresence, motion } from 'framer-motion';


const Main = () => {
    const [currenActive, setcurrentActive] = useState("all");
    const [arr, setArr] = useState(myProject);

    return (
        <main className="flex">
            <section className="flex left-section">

                <button onClick={() => {
                    setcurrentActive("all");
                    setArr(myProject);
                }}
                    className={currenActive === "all" ? "active" : null}>
                    All Movies

                </button>


                <button
                    onClick={() => {
                        setcurrentActive("drama");

                        const newArr = myProject.filter((item) => {
                            return item.ctegory === "drama"
                        })
                        setArr(newArr);

                    }}

                    className={currenActive === "drama" ? "active" : null} >
                    Drama and suspense
                </button>


                <button onClick={() => {
                    setcurrentActive("comedy");
                    const newArr = myProject2.filter((item) => {
                        return item.ctegory === "comedy"
                    })
                    setArr(newArr);


                }}
                    className={currenActive === 'comedy' ? "active" : null}>
                    Comedy
                </button>


                <button onClick={() => {
                    setcurrentActive("children")
                    const newArr = myProject.filter((item) => {
                        return item.ctegory === "children"
                    })
                    setArr(newArr);


                }}
                    className={currenActive === 'children' ? "active" : null}>
                    For children and family
                </button>


            </section>


            <section className="flex right-section">
                <AnimatePresence>
                    {arr.map((item) => {

                        return (
                            <motion.article

                                layout
                               
                                initial={{ transform:"scale(0)" }}
                                animate={{ transform: "scale(1)"}}
                                transition={{type:"spring", damping:8, stiffness:50}}
                                key={item.imgPath} 
                                className="card"
                                >
                                <img width={200} src={item.imgPath} alt="movie" />



                                <div style={{ width: "200px" }} className="box">
                                    <h1 className="title">{item.projectTitle}</h1>
                                    <p className="sub-title">
                                        Watch series and movies online - huge Arabic content to follow movies and series online at any time and everywhere from your mobile phone and on TV. Follow look at me original works and exclusive content shown for the first time...</p>


                                    <div className="flex icons">

                                        <div style={{ gap: "11px" }} className="flex">
                                            <div className="icon-link"></div>
                                            <div className="icon-instagram"></div>
                                        </div>

                                        <a className="link flex" href="">
                                            more
                                            <span style={{ alignSelf: "end" }} className="icon-arrow-right">          </span>
                                        </a>
                                    </div>
                                </div>

                            </motion.article>);


                    })}

                </AnimatePresence>
            </section>

        </main>
    );

}

export default Main;
