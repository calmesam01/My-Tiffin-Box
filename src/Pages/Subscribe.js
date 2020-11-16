import React from 'react';
import { useState } from 'react';
import '../media/css/Subscribe.css';

function Subscribe () {
    const [Subscribed, SetSubscribed] = useState('Subscribe Now')
    function Clicked (e) {
        e.preventDefault();
        SetSubscribed('Subscribed');
        setTimeout(() => {
            window.location = '/'
        }, 3000)
    }
    return (
        <div>
            <div className="container form-container">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                        <div className="card card-signin flex-row my-5">
                            <div className="card-img-left d-none d-md-flex">
                            </div>
                            <div className="card-body">
                                <h2 className="card-title text-center">Subscribe</h2>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input type="text" id="inputUserame" className="form-control" placeholder="Username" autoComplete="false" required autofocus />
                                        <label for="inputUserame">Email Address</label>
                                    </div>

                                    <button className="btn btn-lg btn-signin btn-block text-uppercase" onClick={Clicked} type="submit"> {Subscribed} </button>
                                  
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;