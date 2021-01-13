import React from 'react';
import '../media/css/Contact.css'

function ContactPage () {
    return (
        <div>
            <section className="contact_section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-8 col-lg-5">
                            <div className="box">
                                <h1>Contact Us</h1>
                                <p>Kindly reach out to us via any of the following channels for more enquiries and clarifications</p>
                                <p><strong>Call our toll-free number</strong></p>
                                <p className="number">(519) 984-4949</p>
                                <p><strong>Email Address:</strong></p>
                                <p>contact@getmytiffin.ca</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;