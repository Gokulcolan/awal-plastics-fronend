import NavLayout from "@/layout/nav";
import PrimaryLayout from "@/layout/primary";
import React from "react";
import "./quotationApprovedStyles.scss";
import clock from "@/assets/icons/clock.svg";
import printIcon from "@/assets/icons/printIcon.svg";
import john from "@/assets/image/priceIndicationSlip/john.png";
import benefitPay from "@/assets/image/QR_Codes/benefitPayQR.png";
import QRCode from "@/assets/image/QR_Codes/QRCode.png";
import Image from "next/image";

const priceIndicationSlip = () => {
  const termsData = [
    {
      id:"acknowledgement-1",
      title:"Terms & Condition :",
      children:[
        {
          id: "terms-1",
          termsNo: "1",
          heading: "Price",
          terms: "This Quotation is calculated and based upon agreed & approved designs, material & installation specification as communicated either verbally or in writing by the customer to Awal Plastics."
        },
        {
          id: "terms-2",
          termsNo: "2",
          heading: "Method Of Order Confirmation",
          terms: "Awal Plastics should receive a copy of this quotation, which must be signed and stamped on all pages, which confirms approval and acceptance by the customer's authorised personnel or representative along with an official LPO."
        },
        {
          id: "terms-3",
          termsNo: "3",
          heading: "Quotation Validity",
          terms: "This quotation is valid only for Thirty (30) days from the date of issue. The quoted prices are based on current costs, availability of raw materials and normal labour hours, not factoring urgencies or overtime costs."
        },
        {
          id: "terms-4",
          termsNo: "4",
          heading: "Lead Time",
          terms: "The quoted price has been factored for regular labour working hours only. If urgent deliveries are required, overtime charges shall be applied at an additional cost and a revised quotation shall be approved by the customer's authorised representative, prior to commencement of the production."
        },
        {
          id: "terms-5",
          termsNo: "5",
          heading: "Terms Of Payment",
          terms: "30 Days From Invoice Date."
        },
        {
          id: "terms-6",
          termsNo: "6",
          heading: "Amendments",
          terms: "Any change in the scope of work, drawings, material specifications, urgent labour hours and sample shall be treated as a variation. The customer shall be responsible for any additional charges assessed by Awal Plastics as a result of such modification or alteration, as agreed by both parties in advance, prior to or during the manufacturing of the materials and the job being executed."
        },
        {
          id: "terms-7",
          termsNo: "7",
          heading: "Delivery and Installation",
          terms: "30 Days from the date of order confirmation, subject to any extension as may be mutually agreed in advance."
        }],

      
    },
    

  ];
  const warrantyData =[
    {
      id:"acknowledgement-2",
      title:"Warranty :",
      children:[
        {
          id:"warranty-1",
          heading:false,
          terms:"The limited warranty on the products manufactured and supplied by Awal Plastics shall be deemed void in any of the following circumstances:",
        },
        {
          id:"warranty-2",
          heading:false,
          terms:"1. Any defect or damage caused by misuse or abuse of the product.",
        },
        {
          id:"warranty-3",
          heading:false,
          terms:"2. Any damage caused by unauthorised modification or negligence.",
        },
        {
          id:"warranty-4",
          heading:false,
          terms:"3. Any damage caused by civil commotion, malicious acts and natural calamities.",
        },

      ]
    }
  ]

  const fixAndInstallData =[
    {
      id:"acknowledgement-3",
      title:"Fixing and Installation :",
      children:[
        {
          id:"installation-1",
          heading:false,
          terms:"a. The customer is responsible to confirm in writing the location of the signage installation.",
        },
        {
          id:"installation-2",
          heading:false,
          terms:"b. The customer is responsible to provide the power supply point/socket nearest to the signage installation.",
        },
        {
          id:"installation-3",
          heading:false,
          terms:"c. The customer is responsible to obtain a NO OBJECTION CERTIFICATE (NOC) from the Landlord/Property Management Company for the required signage installation and electrical connection activities in case it is a government, commercial or residential building.",
        },
        {
          id:"installation-4",
          heading:false,
          terms:"d. It is the sole responsibility of the customer to liaise and obtain the required permissions for the internal or external signage installation, more importantly where any modification to the external facade, i.e. glass or cladding, is required and Awal Plastics shall not be held responsible for the above.",
        },
        {
          id:"installation-5",
          heading:false,
          terms:"e. Awal Plastics shall not be liable for any costs or losses sustained or incurred by the customer arising directly or indirectly from the failure of the customer to perform his/her-obligations as stated above or for any delays in obtaining required permissions by the customer from the regulatory authorities.",
        },

      ]
    }
  ]
  
  return (
    <NavLayout>
      <PrimaryLayout>
        <div className="sales-order-generated">
          <h1>Sales Order #1112311793</h1>
          <div className="border-line"></div>
          <div className="sales-order-details">
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
          <div className="approved-quotation">
            <h1>Approved Quotation #1102305475</h1>
            <div className="border-line"></div>
            <div className="order-by-container">
              <div className="order-by">
                <p className="order">Order by :</p>
                <address className="address">
                  Havelock Interirors WLL, <br />
                  Building #994, Road No. 951, Block 5153, <br />
                  P O Box: 5100, ASKAR Kingdom Of Bahrain,
                  <br />
                  Tel: 17832056,
                  <br />
                  Fax No. 17911452
                </address>
              </div>
              <div className="divider"></div>
              <div className="order-by">
                <p className="order">Order by :</p>
                <address className="address">
                  Havelock Interirors WLL, <br />
                  Building #994, Road No. 951, Block 5153, <br />
                  P O Box: 5100, ASKAR Kingdom Of Bahrain,
                  <br />
                  Tel: 17832056,
                  <br />
                  Fax No. 17911452
                </address>
              </div>
            </div>
            <div className="border-line"></div>
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
                  <td>F1234567 LED Signs</td>
                  <td>01</td>
                  <td>Back Lit Letter</td>
                  <td>EA</td>
                  <td>71.000</td>
                  <td>71.000</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>F1234567 LED Signs</td>
                  <td>01</td>
                  <td>Back Lit Letter</td>
                  <td>EA</td>
                  <td>71.000</td>
                  <td>71.000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="amount-estimation-container">
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
            <p className="view-approvals">
              View Approvals : Refer the approval page
            </p>
          </div>

          <div className="terms-and-condition">
            <h2>Terms & Condition :</h2>
            {termsData.map((e)=>{
              return(
               e.children.map((e)=>{
                return(
                  < >
                  <h3 id={e.id}>{e.termsNo}. {e.heading}</h3>
                  <p>
                    {e.terms}
                  </p>
                  </>
                )
               })
              )
            })}
          </div>
          <div className="warranty">
          <h2>Warranty :</h2>
          {warrantyData.map((e)=>{
              return(
               e.children.map((e)=>{
                return(
                  < >
                  <p>
                    {e.terms}
                  </p>
                  </>
                )
               })
              )
            })}
          </div>
          <div className="fixing-and-installation">
          <h2>Fixing and Installation :</h2>
          {fixAndInstallData.map((e)=>{
              return(
               e.children.map((e)=>{
                return(
                  < >
                  <p>
                    {e.terms}
                  </p>
                  </>
                )
               })
              )
            })}
          </div>

          <div className="payment-options">
            <h2>Payment Options :</h2>
            <p>1. If paying by cheque, make cheques payable to <span>AWAL PLASTICS W.L.L. (A/C PAYEE ONLY)</span> </p>
            <p>2. If paying through bank, transfer to our account : <span>NATIONAL BANK OF BAHRAIN</span></p>
            <div className="account-details">
              <div><p>ACCOUNT NUMBER</p> 
              <p>:  7800 2028</p>
              </div>
              <div><p>IBAN NUMBER</p> 
              <p>:  BH43 NBON 0000 007800 2028</p>
              </div>
              <div><p>SWIFT</p> 
              <p>:  NBOBBHBM</p>
              </div>

            </div>
            <p>3. If paying through <span>Sadad</span> or <span>E-Invoicing </span>: We will send you an E-invoice link via email or SMS where you can pay through major debit/credit cards, JCB, American Express or Benifit Pay</p>
            <p>4. If pay through Benefit pay app, transfer to the account : <span>NATIONAL BANK OF KUWAIT</span></p>
            <div className="account-details">
              <div><p>ACCOUNT NUMBER</p> 
              <p>:  5500-103349-102</p>
              </div>
              <div><p>IBAN NUMBER</p> 
              <p>:  BH98 NBOK 0550 010334 9102</p>
              </div>
              <div><p>SWIFT</p> 
              <p>:  NBOKBHBMFCB</p>
              </div>
            </div>

            <div className="qr-code">
              <div>
                <Image src={QRCode} alt="Qr-code"/>
                <p>Scan To Pay</p>
              </div>
              <div>
                <Image src={benefitPay} alt="benefit-pay"/>
                <p>Benefit Pay Mobile App</p>

              </div>
            </div>
          </div>

          <div className="attachment-buttons">
            <button className="print-button"><Image src={printIcon} alt="print"/>Print</button>
            <button className="view-attachment">View Attachment</button>
            {/* <button className="generate-button disabled" disabled>
            View Attachment
            </button> */}
          </div>
        </div>
      </PrimaryLayout>
    </NavLayout>
  );
};

export default priceIndicationSlip;
