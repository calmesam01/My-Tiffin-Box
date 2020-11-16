import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import '../../media/css/Payments.css';

function PaymentForm () {
    return (
        <div className = "PaymentForm order-summary-div">
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Your Full Name*</label>
                    <input type="text" className="form-control full-name-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" autoComplete= "false"></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Your Home Address*</label>
                    <input type="text" className="form-control address-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter address" autoComplete= "false"></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Your Phone Number*</label>
                    <input type="text" className="form-control phone-field" placeholder="Enter phone number"></input>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Your Email Address</label>
                    <input type="text" className="form-control email-field" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email id" autoComplete= "false"></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email address with anyone else.</small>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input checkbox-field" id="exampleCheck1"></input>
                    <label className="form-check-label" for="exampleCheck1">I agree to the terms of service and the privacy policy at <b>Getmytiffin.ca</b></label>
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;