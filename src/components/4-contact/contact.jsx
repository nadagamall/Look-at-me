import './contact.css';
import Lottie from "lottie-react";
import doneAnimation from "../../assets/animation/Animation - 1718304422137.json";
import contactusAnimation from "../../assets/animation/Animationcontactus-1718305819752.json";
import { useForm, ValidationError } from '@formspree/react';



const Contact = () => {
    const [state, handleSubmit] = useForm("mjkbvzky");
   

    
    return (

        <section className="contact-us">
            <h1 className='title'>
                <span className='icon-envelop'>         </span>
                Contact Us
            </h1>
            <p className='sub-title'>We’re here to help!
                Stream without limits! If you have a question or a comment, our team is one click away.</p>

            <div style={{justifyContent:'space-between'}}className="flex">
                <form onSubmit={handleSubmit} className=''>
                    <div className='flex'>
                        <label htmlFor="email">Email Address</label>
                        <input autoComplete='off' required type="email" name='email' id='email' />

                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>

                    <div className='flex' style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your message</label>
                        <textarea required name='message' id='message'></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />

                    </div>

                    <button type="submit" disabled={state.submitting} className='submit'>
                    {state.submitting ? "Submitting ..." : "Submit"}
                    </button>
                       

                   {state.succeeded && (
                        <p className='flex' style={{ fontSize: "18px", marginTop: "1.7rem" }}>
                      
                        <Lottie
                            loop={false}
                            style={{ height:"67px" }}
                            animationData={doneAnimation} />
                        Your message has been sent successfuly
                    </p>
                )}
                    
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