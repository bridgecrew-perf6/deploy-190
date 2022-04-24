import  "./Contact.css"
import img8 from '../../assets/mail.png'
import {useState} from 'react';
import  img20  from "../../assets/like.png";

function Contact() {
    const [message,sentMessage] = useState(false)

const handleSubmit = (e)=> {
    e.preventDefault();
    sentMessage(true)
}

const [count, setCount] = useState(0)

    return (
        <div className="contact" id="contact">
        <h1>Contact</h1>
            <div className="left-cont">
                <img src = {img8}/>
            </div>

            <div className="right-cont">
               
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder="Email"></input>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP</span>}
                </form>


            </div>
            <div className="Like">
                <img src={img20}></img>
                <button onClick={() => setCount(count + 1)}>Like {count}</button>
            </div>
        </div>
    );
}

export default Contact;