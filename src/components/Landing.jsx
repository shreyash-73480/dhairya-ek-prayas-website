import '../css/landing.css';
import main from '../assets/LandImg.png';

export default function Landing() {
    return(
        <div className="landing">
                <span className="left">
                    <div className="caption1">
                        <hr />
                        <h4>WE ARE DHAIRYA NGO</h4>
                    </div>
                    <div className="titles">
                        <div className="caption2">
                            <p><span>Dhairya Ek Prayas Foundation</span> empowers communities through women’s empowerment, education, health, environmental care, and sports</p>
                        </div>
                        <div className="caption3">
                            <p>Together, we can create positive change by supporting women, children and families in need.</p>
                        </div>
                        <div className="btns">
                            <button type="button" className="btn btn-success" onClick={() => window.location.href = "/donate"}>DONATE</button>
                        </div>
                    </div>

                </span>
                <span className="right">
                    <img src={main} alt="Smiling Faces" />
                </span>
            </div>
    );
}