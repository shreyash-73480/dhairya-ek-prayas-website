import contact from "../assets/contactus.jpeg";
import '../css/contactForm.css';

export default function ContactForm() {
    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="section-header text-center">
                    <h3>Get In Touch</h3>
                    <h2>Contact for any query</h2>
                </div>
                <div className="contact-img">
                    <img src={contact} alt="Contact" />
                </div>
            </div>
        </div>
    );
}
