import '../css/footer.css';

export default function Footer() {
    return (
        < div className="footer" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <h2>Contact Us</h2>
                            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-map-marker-alt"></i>Dhairya NGO, 3/14, Vitthal rukmini niwas, Kanjur east, Mumbai, India 400042</p></a>
                            <a href="tel:+91-9000000000"><p><i className="fa fa-phone"></i>9892877209</p></a>
                            <a href="mailto:contact@abcngo.org"><p><i className="fa fa-envelope"></i>dhairyango9@gmail.com</p></a>
                            <div className="footer-social">
                                <a className="btn btn-custom" href="#"><i className="fab fa-x-twitter"></i></a>
                                <a className="btn btn-custom" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-custom" href="#"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-custom" href="#"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-custom" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-newsletter">
                            <h2>Newsletter</h2>
                            <form name='NewsLetter'>
                                <input name='subscribe' className="form-control" placeholder="Email goes here" autoComplete='email' required/>
                                <button className="btn btn-custom">Submit</button>
                                <h6>Don't worry, we don't spam!</h6>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <a href="#">Dhairya NGO</a> | 2026, All Right Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Designed By <a href="https://www.linkedin.com/in/shreyash73480">Dhairya NGO Team</a></p>
                    </div>
                </div>
            </div>
        </ div>
    );
}