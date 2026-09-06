import '../css/donate.css';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from "../components/BackToTop";
import PageHeader from '../components/PageHeader';
import qrCode from '../assets/donation-qr.jpg';

export default function Donate() {
    return (
        <>
            <Navbar />
            <PageHeader title="Donate Now" path="/donate" name="Donate" />

            <div className="donations">
                <div className="container">
                    <div className="donate">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="donate-content">
                                    <div className="section-header">
                                        <p>Support Our Mission</p>
                                        <h2>Every contribution can make a difference</h2>
                                    </div>
                                    <div className="donate-text">
                                        <p>
                                            Your support helps ABC NGO continue its work and reach people who need it most. You can make a donation quickly by scanning the QR code.
                                        </p>
                                        <p><strong>UPI ID:</strong> abc@upi</p>
                                        <p><strong>Account Name:</strong> ABC NGO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="donate-form text-center">
                                    <h3 className="mb-3">Scan to Donate</h3>
                                    <img src={qrCode} alt="ABC NGO donation QR code" style={{width: '260px', maxWidth: '100%', height: 'auto'}} />
                                    <p className="mt-3 mb-0">Open your UPI app and scan this QR code.</p>
                                    <p><strong>abc@upi</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <BackToTop />
        </>
    );
}
