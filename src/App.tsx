import { useState} from "react";
import './index.css'
import './font-awesome-master/css/font-awesome.min.css'
import logo from './assets/me typing.png'
import logo2 from './assets/react.svg'


function App(){
    return(
        <div className="container">
        <div className="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span className="icon">
                            <i className="fa fa-apple"></i>
                        
                        </span>
                        <span className="title">Brand Name</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <i className="fa fa-home"></i>
                        </span>
                        <span className="title">Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                        <i className="fa fa-group"></i>
                        </span>
                        <span className="title">Customers</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <i className="fa fa-comment"></i>
                        </span>
                        <span className="title">Messages</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <i className="fa fa-question-circle"></i>
                        </span>
                        <span className="title">Help</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <i className="fa fa-cog"></i>
                        </span>
                        <span className="title">Settings</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                        <i className="fa fa-lock"></i>
                        </span>
                        <span className="title">Password</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <i className="fa fa-sign-out"></i>
                        </span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>
            </ul>
</div>
<div className="main">
            <div className="topbar">
                <div className="toggle">
                    <i className="fa fa-bars"></i>
                </div>

                <div className="search">
                    <label>
                        <input type="search" placeholder="Search here"/>
                      <i className="fa fa-search"></i>
                    </label>
                </div>

                <div className="user">
                    <img src={logo} alt=""/>
                </div>
            </div>

           
            <div className="cardBox">
                <div className="card">
                    <div>
                        <div className="numbers">1,504</div>
                        <div className="cardName">Daily Views</div>
                    </div>

                    <div className="iconBx">
                        <i className="fa fa-eye"></i>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">80</div>
                        <div className="cardName">Sales</div>
                    </div>

                    <div className="iconBx">
                       <i className="fa fa-shopping-cart"></i>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">284</div>
                        <div className="cardName">Comments</div>
                    </div>

                    <div className="iconBx">
                       <i className="fa fa-comment"></i>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">$7,842</div>
                        <div className="cardName">Earning</div>
                    </div>

                    <div className="iconBx">
                       <i className="fa fa-money"></i>
                    </div>
                </div>
            </div>

           
            <div className="details">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Recent Orders</h2>
                        <a href="#" className="btn">View All</a>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Payment</td>
                                <td>Status</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Star Refrigerator</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Dell Laptop</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Apple Watch</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Addidas Shoes</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span className="status inProgress">In Progress</span></td>
                            </tr>

                            <tr>
                                <td>Star Refrigerator</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status delivered">Delivered</span></td>
                            </tr>

                            <tr>
                                <td>Dell Laptop</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Apple Watch</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className="status return">Return</span></td>
                            </tr>

                            <tr>
                                <td>Addidas Shoes</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span className="status inProgress">In Progress</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            
                <div className="recentCustomers">
                    <div className="cardHeader">
                        <h2>Recent Customers</h2>
                    </div>

                    <table>
                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={logo2} alt=""/></div>
                            </td>
                            <td>
                                <h4>David <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={logo} alt=""/></div>
                            </td>
                            <td>
                                <h4>Amit <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={logo2} alt=""/></div>
                            </td>
                            <td>
                                <h4>David <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={logo} alt=""/></div>
                            </td>
                            <td>
                                <h4>Amit <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={logo2} alt=""/></div>
                            </td>
                            <td>
                                <h4>David <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={logo} alt=""/></div>
                            </td>
                            <td>
                                <h4>Amit <br/> <span>India</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={logo} alt=""/></div>
                            </td>
                            <td>
                                <h4>David <br/> <span>Italy</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div className="imgBx"><img src={logo} alt=""/></div>
                            </td>
                            <td>
                                <h4>Amit <br/> <span>India</span></h4>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
</div>

    )
}
export default App