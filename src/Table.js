import React from "react";
import './Table.css';

// th{
//     margin: 15px;
//   }
  
function Table() {
    return (
        <div>
            <table>
                <tr>
                    <th colSpan={2}>
                        POLICY TYPE
                    </th>
                    <th>
                        STATUS
                    </th>
                    <th>
                        CLAIM ID
                    </th>
                    <th>
                        DATE
                    </th>
                    <th>
                        STAGE
                    </th>
                    <th>
                        CLAIM AMOUNT
                    </th>
                    <th>
                        ACTION
                    </th>
                </tr>
                <tr>
                    <td>
                        Car Insurance
                    </td>
                    <td>
                    <i class="fa-solid fa-car"></i>
                    </td>
                    <td>
                        <i class="fa-solid fa-arrow-up me-3" style={{color: "green"}}></i>
                        Accepted
                    </td>
                    <td>
                        10
                    </td>
                    <td>
                        2022/26/08 4:17:51
                    </td>
                    <td>
                        Payout
                    </td>
                    <td>
                        94.000 LTC
                    </td>
                    <td>
                    <button className="btn" style={{backgroundColor: "#61972B", color: "white"}} type="submit">View <i class="fa-solid fa-grip-lines"></i></button>
                    </td>
                </tr>
                <br />
                <tr>
                    <td>
                        Car Insurance
                    </td>
                    <td>
                        <i class="fa-solid fa-car"></i>
                    </td>
                    <td>
                        <i class="fa-solid fa-arrow-down me-3" style={{color: "yellow"}}></i>
                        Ongoing
                    </td>
                    <td>
                        10
                    </td>
                    <td>
                        2022/26/08 4:17:51
                    </td>
                    <td>
                        Vote
                    </td>
                    <td>
                        94.000 LTC
                    </td>
                    <td>
                    <button className="btn" style={{backgroundColor: "#61972B", color: "white"}} type="submit">View <i class="fa-solid fa-grip-lines"></i></button>
                    </td>
                </tr>
                <br />
                <tr>
                    <td>
                        Car Insurance
                    </td>
                    <td>
                        <i class="fa-solid fa-car"></i>
                    </td>
                    <td>
                    <i class="fa-solid fa-arrow-up me-3" style={{color: "green"}}></i>
                        Accepted
                    </td>
                    <td>
                        10
                    </td>
                    <td>
                        2022/26/08 4:17:51
                    </td>
                    <td>
                        Closed
                    </td>
                    <td>
                        94.000 LTC
                    </td>
                    <td>
                    <button className="btn" style={{backgroundColor: "#61972B", color: "white"}} type="submit">View <i class="fa-solid fa-grip-lines"></i></button>
                    </td>
                </tr>
                <br />
                <tr>
                    <td>
                        Car Insurance
                    </td>
                    <td>
                        <i class="fa-solid fa-car"></i>
                    </td>
                    <td>
                        <i class="fa-solid fa-arrow-down me-3" style={{color: "red"}}></i>
                        Declined
                    </td>
                    <td>
                        10
                    </td>
                    <td>
                        2022/26/08 4:17:51
                    </td>
                    <td>
                        Payout
                    </td>
                    <td>
                        94.000 LTC
                    </td>
                    <td>
                    <button className="btn" style={{backgroundColor: "#61972B", color: "white"}} type="submit">View <i class="fa-solid fa-grip-lines"></i></button>
                    </td>
                </tr>
                <br />
                <tr>
                    <td>
                        Car Insurance
                    </td>
                    <td>
                        <i class="fa-solid fa-car"></i>
                    </td>
                    <td>
                        <i class="fa-solid fa-arrow-down me-3" style={{color: "yellow"}}></i>
                        Ongoing
                    </td>
                    <td>
                        10
                    </td>
                    <td>
                        2022/26/08 4:17:51
                    </td>
                    <td>
                        Payout
                    </td>
                    <td>
                        94.000 LTC
                    </td>
                    <td>
                    <button className="btn" style={{backgroundColor: "#61972B", color: "white"}} type="submit">View <i class="fa-solid fa-grip-lines"></i></button>
                    </td>
                </tr>
                <br />
                <tr>
                    <td>
                        Car Insurance
                    </td>
                    <td>
                        <i class="fa-solid fa-car"></i>
                    </td>
                    <td>
                    <i class="fa-solid fa-arrow-down me-3" style={{color: "yellow"}}></i>
                        Ongoing
                    </td>
                    <td>
                        10
                    </td>
                    <td>
                        2022/26/08 4:17:51
                    </td>
                    <td>
                        Payout
                    </td>
                    <td>
                        94.000 LTC
                    </td>
                    <td>
                    <button className="btn" style={{backgroundColor: "#61972B", color: "white"}} type="submit">View <i class="fa-solid fa-grip-lines"></i></button>
                    </td>
                </tr>
                <br />
                <tr>
                    <td>
                        Car Insurance
                    </td>
                    <td>
                        <i class="fa-solid fa-car"></i>
                    </td>
                    <td>
                        <i class="fa-solid fa-arrow-up me-3" style={{color: "green"}}></i>
                        Accepted
                    </td>
                    <td>
                        10
                    </td>
                    <td>
                        2022/26/08 4:17:51
                    </td>
                    <td>
                        Payout
                    </td>
                    <td>
                        94.000 LTC
                    </td>
                    <td>
                    <button className="btn" style={{backgroundColor: "#61972B", color: "white"}} type="submit">View <i class="fa-solid fa-grip-lines"></i></button>
                    </td>
                </tr>
                <br />
                <tr>
                    <td>
                        Car Insurance
                    </td>
                    <td>
                    <i class="fa-solid fa-car"></i>
                    </td>
                    <td>
                        <i class="fa-solid fa-arrow-down me-3" style={{color: "red"}}></i>
                        Declined
                    </td>
                    <td>
                        10
                    </td>
                    <td>
                        2022/26/08 4:17:51
                    </td>
                    <td>
                        Payout
                    </td>
                    <td>
                        94.000 LTC
                    </td>
                    <td>
                    <button className="btn" style={{backgroundColor: "#61972B", color: "white"}} type="submit">View <i class="fa-solid fa-grip-lines"></i></button>
                    </td>
                </tr>
            </table>
        </div>
        );
    }
    
    export default Table;