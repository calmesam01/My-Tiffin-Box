import React from 'react';
import {useState} from 'react';
import Cookies from 'universal-cookie';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import PaymentForm from './PaymentForm';
import Daal from '../../media/images/daal.svg';
import MatarPaneer from '../../media/images/matar_paneer.svg';
import Salads from '../../media/images/salad.svg';
import Roti from '../../media/images/roti.svg';
import TiffinFull from '../../media/images/tiffin_full.svg'
import { LocalDining } from '@material-ui/icons';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('rk_test_51Gcks7D3IkNm36QEgRnSci22z5fJajHcxfKTRmxSCNrWKQOAwhf3xMVKmVSMMkVXmsd4WUWvSMSIWyHS8G4yNN3r00HqmcRVQj');

function Payments () {

    const [myArr_1, setmyArr_1] = useState(localStorage.getItem('myArr_1'));
    const [myArr_2, setmyArr_2] = useState(localStorage.getItem('myArr_2'));
    const [OnlinePayment, SetOnlinePayment] = useState(false);
    const [SubTotal, SetSubTotal] = useState(0);
    var SignedIn = false;
    

    var ttc = myArr_1.split(",");
    var wt = myArr_2.split(",")
    var subTotal = 0;
    var Sub0 = 0;
    var Sub1 = 0;
    var Sub2 = 0;
    var Sub3 = 0;
    if (ttc[0] != 'Tiffin5' && wt[0]) {
        Sub0 = parseFloat(wt[0]) * 1.25;
    }
    if (ttc[0] != 'Tiffin5' && wt[1]) {
        Sub1 = parseFloat(wt[1]) * 1.25;
    }
    if (wt[2]) {
        Sub2 = parseFloat(wt[2]) * 1.25;
    }
    if (wt[3]) {
        Sub3 = parseFloat(wt[3]) * 1.25;
    }
    subTotal = Sub0 + Sub1 + Sub2 + Sub3;
    var tax = (subTotal * 15)/100
    var total = tax + subTotal;
    // var tax = 13;
    // var subTotal = 0;
    console.log(ttc[3])
    
    // if (Load) {
    //     subTotal = wt[0] + wt[1] + wt[2] + wt[3];
    //     SetSubTotal(SubTotal + subTotal);
    // }

    function OnlinePaymentFunction () {
        SetOnlinePayment(true);
    }
    function CODPaymentFunction (event) {
        event.preventDefault();
        if (!SignedIn) {
            window.location = '/Register';
        }
        else {
            window.location = '/';
        }
    }
    
    
    return (
        <div className = "Payments">
            <div className = "row">
                <div className = "col-md-6 col-sm-12">
                    <p className="h2 text-center mb-12 your-payment-details-label">Payment Details</p><br/>
                    <PaymentForm /><hr/>
                    {!OnlinePayment ? <div className = "order-final-div">
                        <div className="text-center mt-4">
                            <p className="h3 text-center mb-12 choose-payment-option-label ">Choose Payment Method</p><br/>
                        </div>
                        <div className="text-center mt-4">
                            <MDBBtn color="indigo" className = "online-payment-btn" onClick={OnlinePaymentFunction} type="submit">Online Payment</MDBBtn>
                            <MDBBtn color="indigo" className = "cash-on-delivery-btn" onClick={CODPaymentFunction} type="submit">Cash on Delivery</MDBBtn>
                        </div>
                    </div>
                    :
                    <div className="h3 text-center mb-12 your-payment-details-label">
                        <Elements total= {total} stripe={stripePromise}>
                            <CheckoutForm total= {total} />
                        </Elements>
                    </div>
                    }
                    
                </div>
                <div className = "col-md-5 col-sm-12">
                    <p className="h2 text-center mb-12 order-summary-label">Order Summary</p>
                    <div className = "jumbotron">
                        <div>
                            <div>
                                <div className = "row order-summary-div">
                                <div className = "col-md-3 col-sm-12 order-summary">
                                    <p className="h4 mb-12 tiffin-summary-item-label">ITEM</p>
                                </div>
                                <div className = "col-md-6 col-sm-12 order-summary">
                                    <p className="h4 mb-12 tiffin-summary-quantity-label">QUANTITY</p>
                                </div>
                                <div className = "col-md-3 col-sm-12 order-summary">
                                    <p className="h4 mb-12 tiffin-summary-price-label">PRICE</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className = "row order-summary-div">
                            <div className = "col-md-7 col-sm-12 order-summary">
                                <p className="h4 mb-12 tiffin-summary-img-1-text">{ttc[0]}</p>
                                <p className="h4 mb-12 tiffin-summary-img-2-text">{ttc[1]}</p>
                                <p className="h4 mb-12 tiffin-summary-img-3-text">{ttc[2]}</p>
                                <p className="h4 mb-12 tiffin-summary-img-4-text">{ttc[3]}</p>
                            </div>
                            <div className = "col-md-2 col-sm-12 order-summary">
                                <p className="h4 mb-12 tiffin-summary-img-1-text">{wt[0]}</p>
                                <p className="h4 mb-12 tiffin-summary-img-2-text">{wt[1]}</p>
                                <p className="h4 mb-12 tiffin-summary-img-3-text">{wt[2]}</p>
                                <p className="h4 mb-12 tiffin-summary-img-4-text">{wt[3]}</p>
                            </div>
                            <div className = "col-md-3 col-sm-12 order-summary">
                                {wt[0] && <p className="h4 mb-12 tiffin-summary-img-1-text">$1.25</p>}
                                {wt[1] && <p className="h4 mb-12 tiffin-summary-img-2-text">$1.25</p>}
                                {wt[2] && <p className="h4 mb-12 tiffin-summary-img-3-text">$1.25</p>}
                                {wt[3] && <p className="h4 mb-12 tiffin-summary-img-4-text">$1.25</p>}
                            </div>
                        </div><hr/>
                        <div className = "row order-final-div">
                            <div className = "col-md-6 col-sm-6">
                                <p className="h2 text-center mb-12 order-summary-subtotal-label">SUBTOTAL</p>
                                <p className="h2 text-center mb-12 order-summary-total-label">TAX</p>
                                <p className="h2 text-center mb-12 order-summary-total-label">TOTAL</p>
                            </div>
                            <div className = "col-md-6 col-sm-6">
                                <p className="h2 text-center mb-12 order-summary-subtotal">${subTotal}</p>
                                <p className="h2 text-center mb-12 order-summary-subtotal">${tax}</p>
                                <p className="h2 text-center mb-12 order-summary-total">${total}</p>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
            
            <br/><br/>
            {/* <p> 1: {myArr_1} </p>
            <p> 1: {myArr_2} </p> */}

            
            

        </div>
    );
};

export default Payments;