import React from 'react';
import '../media/css/Plans.css';
import { Table } from 'react-bootstrap';
function Plans() {
    return (
        <div className="container">

            <Table striped bordered hover>
            <thead>
								<tr>
									<th></th>
									<th className = "center-text"><h4><span>Basic<br/>Package</span><br/><br/>$210/month</h4></th>
									<th className = "center-text"><h4><span>Standard<br/>Package</span><br/><br/>$270/month</h4></th>
									<th className = "center-text"><h4><span>Exclusive<br/>Package</span><br/><br/>$325/month</h4></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><h4>Free Doorstep Delivery</h4></td>
									<td className = "center"><span className="dot"></span></td>
									<td className = "center"><span className="dot"></span></td>
									<td className = "center"><span className="dot"></span></td>
								</tr>
								<tr>
									<td><h4>Self-Menu Selection</h4></td>
									<td className = "center"><span className="dot"></span></td>
									<td className = "center"><span className="dot"></span></td>
                                    <td className = "center"><span className="dot"></span></td>
								</tr>
								<tr>
									<td><h4>North Indian Thali</h4></td>
									<td className = "center"><span className="dot"></span></td>
                                    <td className = "center"><span className="dot"></span></td>
                                    <td className = "center"><span className="dot"></span></td>
								</tr>
								<tr>
									<td><h4>Special Meal Option</h4></td>
                                    <td className = "center"><span className="dot"></span></td>
                                    <td className = "center"><span className="dot"></span></td>
                                    <td className = "center"><span className="dot"></span></td>
								</tr>
								<tr>
									<td><h4>Continental Dishes</h4></td>
									<td><span className="line"></span></td>
									<td className = "center-text">Only Wednesday</td>
									<td className = "center"><span className="dot"></span></td>
								</tr>
								<tr>
									<td><h4>Full Size Healthy Salad Bowl</h4></td>
									<td className = "center"><span className="line"></span></td>
									<td className = "center"><span className="line"></span></td>
									<td className = "center"><span className="dot"></span></td>
								</tr>
								<tr>
									<td><h4>Preferred Delivery Slot</h4></td>
									<td className = "center"><span className="dot"></span></td>
                                    <td className = "center"><span className="dot"></span></td>
                                    <td className = "center"><span className="dot"></span></td>
								</tr>
								<tr>
									<td><h4>hange Delivery Location</h4></td>
									<td><span className="line"></span></td>
									<td className = "center-text">Unlimited Times</td>
									<td className = "center-text">Unlimited Times</td>
								</tr>
								<tr>
									<td><h4>Indian Cuisine Non-Veg Option</h4></td>
									<td><span className="line"></span></td>
									<td className = "center-text">4 Days a Week</td>
									<td className = "center-text">6 Days a Week</td>
								</tr>
								<tr>
									<td><h4>Delivery Days</h4></td>
									<td className = "center-text">4 Days a Week<br/><span>(Total 16 Meals)</span></td>
									<td className = "center-text">6 Days a Week<br/><span>(Total 24 Meals)</span></td>
									<td className = "center-text">6 Days a Week<br/><span>(Total 24 Meals)</span></td>
								</tr>
								<tr>
									<td><h4>Pause your meal</h4></td>
									<td className = "center"><span className="line"></span></td>
									<td className = "center"><span className="dot"></span></td>
									<td className = "center"><span className="dot"></span></td>
								</tr>
								<tr>
									<td><h4>Package Validity</h4></td>
									<td className = "center-text">30 Days</td>
									<td className = "center-text">45 Days</td>
									<td className = "center-text">45 Days</td>
								</tr>
								<tr>
									<td></td>
									<td><center><button className="btn btn-sm btn-success" type="button">Subscribe Now</button></center></td>
									<td><center><button className="btn btn-sm btn-success" type="button">Subscribe Now</button></center></td>
									<td><center><button className="btn btn-sm btn-success" type="button">Subscribe Now</button></center></td>
								</tr>
							</tbody>
                </Table>
        </div>
    );
};

export default Plans;