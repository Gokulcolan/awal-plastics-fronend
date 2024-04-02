import NavLayout from "@/layout/nav";
import PrimaryLayout from "@/layout/primary";
import Grid from "@mui/material/Grid"; // Grid version 1
import React from "react";
import "./priceIndicationSlipStyles.scss";
import clock from "@/assets/icons/clock.svg";
import john from "@/assets/image/priceIndicationSlip/john.png";
import Approvers1 from "@/assets/image/priceIndicationSlip/Approvers1.png";
import Approvers2 from "@/assets/image/priceIndicationSlip/Approvers2.png";
import Approvers3 from "@/assets/image/priceIndicationSlip/Approvers3.png";
import Approvers4 from "@/assets/image/priceIndicationSlip/Approvers4.png";
import Approvers5 from "@/assets/image/priceIndicationSlip/Approvers5.png";
import Image from "next/image";

const cardsData = [
  {
    id: "1",
    status: "Requested",
    className: "requested-background",
    date: "22 January 2024",
    time: "06:10 Pm",
    requested: "Karthikeyan",
    approvers: [
      { id: "1", src: "Approvers" },
      { id: "2", src: "Approvers" },
      { id: "3", src: "Approvers" },
      { id: "4", src: "Approvers" },
      { id: "5", src: "Approvers" },
    ],
  },
  {
    id: "2",
    status: "Rejected",
    className: "rejected-background",
    date: "22 January 2024",
    time: "06:10 Pm",
    requested: "Giyong",
    approvers: [
      { id: "1", src: "Approvers" },
      { id: "2", src: "Approvers" },
      { id: "3", src: "Approvers" },
      { id: "4", src: "Approvers" },
      { id: "5", src: "Approvers" },
    ],
  },
  {
    id: "3",
    status: "Approved",
    className: "approved-background",
    date: "22 January 2024",
    time: "06:10 Pm",
    requested: "John David",
    approvers: [
      { id: "1", src: "Approvers" },
      { id: "2", src: "Approvers" },
      { id: "3", src: "Approvers" },
      { id: "4", src: "Approvers" },
      { id: "5", src: "Approvers" },
    ],
  },
  {
    id: "4",
    status: "Pending",
    className: "pending-background",
    date: "22 January 2024",
    time: "06:10 Pm",
    requested: "Saadith",
    approvers: [
      { id: "1", src: "Approvers" },
      { id: "2", src: "Approvers" },
      { id: "3", src: "Approvers" },
      { id: "4", src: "Approvers" },
      { id: "5", src: "Approvers" },
    ],
  },
];

const priceIndicationSlip = () => {
  return (
    <NavLayout>
      <PrimaryLayout>
        <div className="price-indication-slip">
          <h1>Estimation #564790-1 - Price Indication Slip</h1>
          <div className="border-line"></div>
          <div className="price-estimation-details">
            <table>
              <tbody>
                <tr>
                  <td>Lead Number</td>
                  <td>-</td>
                  <td>2024659 (Davidson)</td>
                </tr>
                <tr>
                  <td>Project Name</td>
                  <td>-</td>
                  <td>Havelock Interiors</td>
                </tr>
                <tr>
                  <td>Customer Name</td>
                  <td>-</td>
                  <td>John Peter</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>-</td>
                  <td>123 Main Street, Anytown, USA 12345</td>
                </tr>
                <tr>
                  <td>Contact Details</td>
                  <td>-</td>
                  <td>Whatsapp</td>
                </tr>
                <tr>
                  <td>Manufacturing Unit</td>
                  <td>-</td>
                  <td>H</td>
                </tr>
                <tr>
                  <td>Business Type</td>
                  <td>-</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>Currency</td>
                  <td>-</td>
                  <td>BHD</td>
                </tr>
              </tbody>
            </table>
            {/* <div>
              <div>
                <p>Lead Number</p>
                <p>-</p>
                <p>2024659 (Davidson)</p>
              </div>
              <div>
                <p>Project Name</p>
                <p>-</p>
                <p>Havelock Interiors</p>
              </div>
              <div>
                <p>Customer Name</p>
                <p>-</p>
                <p>John Peter</p>
              </div>
              <div>
                <p>Address</p>
                <p>-</p>
                <p>123 Main Street, Anytown, USA 12345</p>
              </div>
             
        
            
              </div> */}
            <div className="divider"></div>
            <table>
              <tbody>
                <tr>
                  <td>Date</td>
                  <td>-</td>
                  <td>22 January 2024</td>
                </tr>
                <tr>
                  <td>Sales Executive</td>
                  <td>-</td>
                  <td>Cyriac</td>
                </tr>
                <tr>
                  <td>Estimated by</td>
                  <td>-</td>
                  <td>Karthikeyan Selvam</td>
                </tr>
                <tr>
                  <td>Customer</td>
                  <td>-</td>
                  <td>Interiors</td>
                </tr>
                <tr>
                  <td>Version</td>
                  <td>-</td>
                  <td>Version</td>
                </tr>
                <tr>
                  <td>Option</td>
                  <td>-</td>
                  <td>01</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="material-details">
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Material</th>
                  <th>Quantity</th>
                  <th>Description</th>
                  <th>UoM</th>
                  <th>Unit Price</th>
                  <th>Total (BHD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>F1234567 LED Signs</td>
                  <td>01</td>
                  <td>Back Lit Letter</td>
                  <td>EA</td>
                  <td>71.000</td>
                  <td>71.000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Signage</td>
                  <td>02</td>
                  <td>No Light</td>
                  <td>MM</td>
                  <td>5.600</td>
                  <td>11.220</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>F1234567 LED Signs</td>
                  <td>04</td>
                  <td>Front Lit Letter</td>
                  <td>EA</td>
                  <td>95.000</td>
                  <td>95.000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="amount-estimation">
            <div className="amount-in-words">
              <h1>Amount in words</h1>
              <p>
                One Thousand Nine Hundred Forty-Nine and Two Fills only -{" "}
                <span>(BHD)</span>
              </p>
            </div>
            <div className="divider"></div>
            <div className="amount-details">
              <table>
                <tbody>
                  <tr>
                    <td>Cost Excluding VAT</td>
                    <td>-</td>
                    <td>177.200</td>
                  </tr>
                  <tr>
                    <td>Discount</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Total Cost Excluding VAT</td>
                    <td>-</td>
                    <td>177.200</td>
                  </tr>
                  <tr>
                    <td>VAT 10%</td>
                    <td>-</td>
                    <td>17.720</td>
                  </tr>
                  <tr>
                    <td>Total Payable Including VAT</td>
                    <td>-</td>
                    <td>194.920</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="horizontal-border"></div>
          <div className="estimation-status-cards">
            {cardsData.map((e, i) => {
              return (
                <div className="cards" key={i} id={e.id}>
                  <h2 className={e.className}>{e.status}</h2>
                  <div className="date-time">
                    <p className="date">{e.date}</p>
                    <p className="time">
                      <Image src={clock} className="clock-icon" alt="clock" />
                      {e.time}
                    </p>
                  </div>
                  <div className="requester">
                    <p>Requested by </p>
                    <Image src={john} />
                    <p> {e.requested}</p>
                  </div>
                  <div className="approvers">
                    <p>Approvers</p>
                    <div>
                      <Image
                        className="images"
                        alt="Approvers1-img"
                        src={Approvers1}
                      />
                      <Image
                        className="images"
                        alt="Approvers2-img"
                        src={Approvers2}
                      />
                      <Image
                        className="images"
                        alt="Approvers3-img"
                        src={Approvers3}
                      />
                      <Image
                        className="images"
                        alt="Approvers4-img"
                        src={Approvers4}
                      />
                      <Image
                        className="images"
                        alt="Approvers5-img"
                        src={Approvers5}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="generate-quotation-buttons">
            {/* <button className="print-button"><Image src={printIcon} alt="print"/>Print</button>
            <button className="generate-button">Generate Quotation</button> */}
            <button className="generate-button disabled" disabled>
              Generate Quotation
            </button>
          </div>
        </div>
      </PrimaryLayout>
    </NavLayout>
  );
};

export default priceIndicationSlip;
