import React from 'react';
function OrderNow () {
    setInterval(() => {
        window.location = '/'
    }, 3000);
    return (
        <div>
           <center><h3>You order has been placed.<br/>
           Thanks for ordering with Getmytiffin.ca</h3></center>
        </div>
    );
};

export default OrderNow;