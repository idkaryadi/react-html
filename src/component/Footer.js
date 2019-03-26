import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="bg-dark footer" style={{ marginTop: "80px"}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9 contact-info">
                            <a href="https://www.google.com/maps" className="social-link"><strong>PT Ternakku Bersemi</strong></a>
                            <br />
                            Jalan Yang Tak Pernah Ada No 2, <br />
                            Jakarta, Indonesia
                        </div>
                        <div className="col-md-3 contact-info muncul">
                            <strong>Contact: (021)123456</strong><br />
                            <strong>Fax: (021)123456</strong>
                            <a href="https://www.facebook.com" className="social-link">
                                <br />
                                <span className="social-media fab fa-facebook-square" ></span>
                                <strong>Facebook</strong>
                            </a>
                            <a href="https://www.instagram.com" className="social-link">
                                <br />
                                <span className="social-media fab fa-instagram"></span>
                                <strong>Instagram</strong>
                            </a>
                            <a href="https://www.twitter.com" className="social-link">
                                <br />
                                <span className="social-media fab fa-twitter"></span>
                                <strong>Twitter</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
