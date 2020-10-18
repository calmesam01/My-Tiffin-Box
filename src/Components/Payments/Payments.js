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

function Payments () {
    // const [RotiVal, setRotiVal] = useState(localStorage.getItem('RotiVal'));
    // const [DahiVal, setDahiVal] = useState(localStorage.getItem('DahiVal'));
    // const [SaladVal, setSaladVal] = useState(localStorage.getItem('SaladVal'));
    // const [AchaarVal, setAchaarVal] = useState(localStorage.getItem('AchaarVal'));
    // const [DessertVal, setDessertVal] = useState(localStorage.getItem('DessertVal'));
    // const [TodaysSpecialVal, setTodaysSpecialVal] = useState(localStorage.getItem('TodaysSpecialVal'));
    const cookies = new Cookies();
    const [myArr_1, setmyArr_1] = useState(localStorage.getItem('myArr_1'));
    var Dahi = 1;
    var Salad = 2;
    var Achaar = 0;
    var Dessert = 0;
    var TodaysSpecial = 0;
    var arr_2 = [Dahi, Salad, Achaar, Dessert, TodaysSpecial];
    var arr_3 = ['Dahi', 'Dahi', 'Salad', 'Dessert'];
    console.log(JSON.parse(myArr_1));

    
    return (
        <div className = "Payments">
            <div className = "row">
                <div className = "col-md-6 col-sm-12">
                    <p className="h2 text-center mb-12 your-payment-details-label">Payment Details</p><br/>
                    <PaymentForm /><hr/>
                    <div className="text-center mt-4">
                        <p className="h3 text-center mb-12 choose-payment-option-label">Choose Payment Method</p><br/>
                    </div>
                    <div className="text-center mt-4">
                        <MDBBtn color="indigo" className = "online-payment-btn" type="submit">Online Payment</MDBBtn>
                        <MDBBtn color="indigo" className = "cash-on-delivery-btn" type="submit">Cash on Delivery</MDBBtn>
                    </div>
                </div>
                <div className = "col-md-4 col-sm-12">
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
                                <p className="h4 mb-12 tiffin-summary-img-1-text">Daal</p>
                                <p className="h4 mb-12 tiffin-summary-img-2-text">Matar Paneer</p>
                                <p className="h4 mb-12 tiffin-summary-img-3-text">Salad</p>
                                <p className="h4 mb-12 tiffin-summary-img-4-text">Rotis</p>
                            </div>
                            <div className = "col-md-2 col-sm-12 order-summary">
                                <p className="h4 mb-12 tiffin-summary-img-1-text">1</p>
                                <p className="h4 mb-12 tiffin-summary-img-2-text">1</p>
                                <p className="h4 mb-12 tiffin-summary-img-3-text">1</p>
                                <p className="h4 mb-12 tiffin-summary-img-4-text">8</p>
                            </div>
                            <div className = "col-md-3 col-sm-12 order-summary">
                                <p className="h4 mb-12 tiffin-summary-img-1-text">$1.25</p>
                                <p className="h4 mb-12 tiffin-summary-img-2-text">$1.25</p>
                                <p className="h4 mb-12 tiffin-summary-img-3-text">$1.25</p>
                                <p className="h4 mb-12 tiffin-summary-img-4-text">$1.25</p>
                            </div>
                        </div><hr/>
                        <div className = "row">
                            <div className = "col-md-6 col-sm-6">
                                <p className="h2 text-center mb-12 order-summary-subtotal-label">SUBTOTAL</p>
                                <p className="h2 text-center mb-12 order-summary-total-label">TAX</p>
                                <p className="h2 text-center mb-12 order-summary-total-label">TOTAL</p>
                            </div>
                            <div className = "col-md-6 col-sm-6">
                                <p className="h2 text-center mb-12 order-summary-subtotal">$5.00</p>
                                <p className="h2 text-center mb-12 order-summary-subtotal">$0.15</p>
                                <p className="h2 text-center mb-12 order-summary-total">$5.15</p>
                            </div>
                        </div>
                    </div>
               </div>
                <div className = "col-md-2 col-sm-12">
                    <img className = "tiffin-full" src = {TiffinFull}></img>
                </div>
            </div>
            
<br/><br/>
            {/* <p> Rotis:  {RotiVal} </p>
            <p> Dahi:  {DahiVal} </p>
            <p> Salad: {SaladVal} </p>
            <p> Achaar:  {AchaarVal} </p>
            <p> Dessert: {DessertVal} </p>
            <p>Dahi :  {Dahi} </p>
            <p>Salad :  {Salad} </p>
            <p> Today's Special: {TodaysSpecialVal} </p> */}
            <p> 1: {myArr_1} </p>

        </div>
    );
};

export default Payments;