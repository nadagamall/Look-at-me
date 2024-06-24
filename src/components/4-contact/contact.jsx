import './contact.css';
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/Animation - 1718304422137.json";
import contactusAnimation from "../../../public/animation/Animationcontactus-1718305819752.json";
const Contact = () => {
    return (

        <section className="contact-us">


            <h1 className='title'>
                <span className='icon-envelop'>         </span>
                Contact Us
            </h1>
            <p className='sub-title'>We’re here to help!
                Stream without limits! If you have a question or a comment, our team is one click away.</p>

            <div style={{ justifyContent: "space-between" }} className="flex">
                <form className=''>
                    <div className='flex'>
                        <label htmlFor="email">Email Address</label>
                        <input required type="email" name='' id='email' />
                    </div>

                    <div className='flex' style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your message</label>
                        <textarea required name='' id='message'></textarea>
                    </div>

                    <button className='submit'>Submit</button>

                    <p className='flex' style={{ fontSize: "18px", marginTop: "1.7rem" }}>
                        <Lottie
                            loop={false}
                            style={{ height: 37 }}
                            animationData={doneAnimation} />
                        Your message has been sent successfuly
                    </p>
                </form>

                <div className='animation'>
                    <Lottie className='contact-animation'
                        style={{ height: 355 }}
                        animationData={contactusAnimation} /> </div>
            </div>

        </section>


    );

}
export default Contact;