import React from "react";
import "./leadsInboxStyles.scss";
import Image from "next/image";
import insta from "@/assets/icons/insta-logo.svg";
import telephone from "@/assets/icons/telephone.svg";
import whatsappLogo from "@/assets/icons/logos_whatsapp-icon.svg";
import behrain from "@/assets/icons/bahrain-flag.svg";
import arabiFlag from "@/assets/icons/arabi-flg.svg";
import UAE from "@/assets/icons/united-arab-emirates.svg";
import tickMark from "@/assets/icons/charm_circle-tick.svg";
import user1 from "@/assets/icons/user-profile-1.svg";
import user2 from "@/assets/icons/user-profile-2.svg";
import user3 from "@/assets/icons/user-profile-3.svg";
import dropdown from "@/assets/icons/select-dropdown.svg";
import email from "@/assets/icons/email.svg";
import CommonLayout from "@/layout/commonLayout";
import useRouterPush from "@/hooks/routerUtils";

const LeadsInbox = () => {
  const push = useRouterPush();

  const createPPJO = () => {
    push("/SD/estimation/contact-informations/");
  };

  // /SD/contact-information/priceIndicationSlip/

  const priceIndicationSlip = () => {
    push("/SD/estimation/contact-informations/priceIndicationSlip");
  };

  const quotationApproved = () => {
    push("/SD/estimation/contact-informations/quotationApproved/");
  };

  return (
    <>
      <div className="leads-Inbox-container">
        <table className="leads-inbox-table">
          <thead>
            <tr>
              <th>Date Received</th>
              <th>Lead Number</th>
              <th>Customer Name</th>
              <th>Project Name</th>
              <th>Status</th>
              <th>Assign</th>
              <th>PPJO</th>
              <th>Sales Rep</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Company</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {/* 1st */}
            <tr>
              <td>Jan-10-2024</td>
              <td>LN200001</td>
              <td>
                <span className="td-wrapper-between">
                  John Peter
                  <Image src={insta} alt="" />
                </span>
              </td>
              <td>Havelock Interiors</td>
              <td>Review</td>
              <td>
                <span className="dummy-dropdown">
                  Leslie
                  <button>
                    <Image src={dropdown} />
                  </button>
                </span>
              </td>
              <td>
                <span className="td-btn" onClick={createPPJO}>
                  Create PPJO
                </span>
              </td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={user1} alt="" />
                  Leslie
                </span>
              </td>
              <td>
                <span className="td-btn-conjested"> Move To Contacts</span>
              </td>

              <td>abc@gmail.com</td>
              <td>Agently Inc</td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={behrain} alt="" />
                  +973 6145895424
                </span>
              </td>
            </tr>

            {/* 2nd */}
            <tr>
              <td>Jan-02-2024</td>
              <td>LN2005401</td>
              <td>
                <span className="td-wrapper-between">
                  John Peter
                  <Image src={email} alt="" />
                </span>
              </td>
              <td>School Sign Board</td>
              <td>Negotiation</td>
              <td>
                <span className="dummy-dropdown">
                  Chona
                  <button>
                    <Image src={dropdown} />
                  </button>
                </span>
              </td>
              <td>
                <span className="progress-wrapper">
                  <div className="row">
                    <p>Estimation</p>
                    <div className="red-progress">
                      <progress id="file" value="80" max="100">
                        {" "}
                      </progress>
                    </div>
                  </div>
                  <div className="row">
                    <p>Artwork</p>
                    <div className="orange-progress">
                      <progress id="file" value="65" max="100">
                        {" "}
                      </progress>
                    </div>
                  </div>
                </span>
              </td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={user2} alt="" />
                  Chona
                </span>
              </td>
              <td>
                <span className="td-btn-conjested">Move To Contacts</span>
              </td>

              <td>abc@gmail.com</td>
              <td>Monday.com</td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={arabiFlag} alt="" />
                  +973 6145895424
                </span>
              </td>
            </tr>

            {/* 3rd */}
            <tr>
              <td>Dec-31-2023</td>
              <td>LN2000054</td>
              <td>
                <span className="td-wrapper-between">
                  John Doe
                  <Image src={telephone} alt="" />
                </span>
              </td>
              <td>Aaron</td>
              <td>Pending</td>
              <td>
                <span className="dummy-dropdown">
                  Sanju
                  <button>
                    <Image src={dropdown} />
                  </button>
                </span>
              </td>
              <td>
                <span className="progress-wrapper">
                  <div className="row">
                    <p>Estimation</p>
                    <div className="red-progress">
                      <progress id="file" value="65" max="100">
                        {" "}
                      </progress>
                    </div>
                  </div>
                  <div className="row">
                    <p>Artwork</p>
                    <div className="green-progress">
                      <progress id="file" value="100" max="100">
                        {" "}
                      </progress>
                    </div>
                    <Image src={tickMark} alt="" />
                  </div>
                </span>
              </td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={user3} alt="" />
                  Sanju
                </span>
              </td>
              <td>
                <span className="td-btn-conjested">Move To Contacts</span>
              </td>

              <td>abc@gmail.com</td>
              <td>Grubers.Inc</td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={UAE} alt="" />
                  +973 6145895424
                </span>
              </td>
            </tr>

            {/* 4rd */}
            <tr>
              <td>Jan-02-2024</td>
              <td>LN2005401</td>
              <td>
                <span className="td-wrapper-between">
                  John Peter
                  <Image src={insta} alt="" />
                </span>
              </td>
              <td>School Sign Board</td>
              <td>Negotiation</td>
              <td>
                <span className="dummy-dropdown">
                  Leslie
                  <button>
                    <Image src={dropdown} />
                  </button>
                </span>
              </td>
              <td>
                <span className="progress-wrapper">
                  <div className="row">
                    <p>Estimation</p>
                    <div className="red-progress">
                      <progress id="file" value="100" max="100">
                        {" "}
                      </progress>
                    </div>
                  </div>
                  <div className="row">
                    <p>Artwork</p>
                    <div className="orange-progress">
                      <progress id="file" value="49" max="100">
                        {" "}
                      </progress>
                    </div>
                  </div>
                </span>
              </td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={user1} alt="" />
                  Leslie
                </span>
              </td>
              <td>
                <span className="td-btn-conjested">Move To Contacts</span>
              </td>

              <td>abc@gmail.com</td>
              <td>Agently Inc</td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={arabiFlag} alt="" />
                  +973 6145895424
                </span>
              </td>
            </tr>

            {/* 5th */}
            <tr>
              <td>Jan-10-2024</td>
              <td>LN200001</td>
              <td>
                <span className="td-wrapper-between">
                  John Peter
                  <Image src={whatsappLogo} alt="" />
                </span>
              </td>
              <td>Havelock Interiors</td>
              <td>Review</td>
              <td>
                <span className="dummy-dropdown">
                  Leslie
                  <button>
                    <Image src={dropdown} />
                  </button>
                </span>
              </td>
              <td>
                <span className="td-btn" onClick={priceIndicationSlip}>
                  Price Indication Slip
                </span>
              </td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={user2} alt="" />
                  Aaron
                </span>
              </td>
              <td>
                <span className="td-btn-conjested">Move To Contacts</span>
              </td>

              <td>abc@gmail.com</td>
              <td>Agently Inc</td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={UAE} alt="" />
                  +973 6145895424
                </span>
              </td>
            </tr>
            <tr>
              <td>Jan-10-2024</td>
              <td>LN200001</td>
              <td>
                <span className="td-wrapper-between">
                  John Peter
                  <Image src={insta} alt="" />
                </span>
              </td>
              <td>Havelock Interiors</td>
              <td>Review</td>
              <td>
                <span className="dummy-dropdown">
                  Leslie
                  <button>
                    <Image src={dropdown} />
                  </button>
                </span>
              </td>
              <td>
                <span className="td-btn" onClick={quotationApproved}>
                  Sales Order Generated
                </span>
              </td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={user1} alt="" />
                  Leslie
                </span>
              </td>
              <td>
                <span className="td-btn-conjested">Move To Contacts</span>
              </td>

              <td>abc@gmail.com</td>
              <td>Agently Inc</td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={behrain} alt="" />
                  +973 6145895424
                </span>
              </td>
            </tr>
            <tr>
              <td>Jan-10-2024</td>
              <td>LN200001</td>
              <td>
                <span className="td-wrapper-between">
                  John Peter
                  <Image src={insta} alt="" />
                </span>
              </td>
              <td>Havelock Interiors</td>
              <td>Review</td>
              <td>
                <span className="dummy-dropdown">
                  Leslie
                  <button>
                    <Image src={dropdown} />
                  </button>
                </span>
              </td>
              <td>
                <span className="td-btn" onClick={createPPJO}>
                  Create PPJO
                </span>
              </td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={user1} alt="" />
                  Leslie
                </span>
              </td>
              <td>
                <span className="td-btn-conjested">Move To Contacts</span>
              </td>

              <td>abc@gmail.com</td>
              <td>Agently Inc</td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={behrain} alt="" />
                  +973 6145895424
                </span>
              </td>
            </tr>
            <tr>
              <td>Jan-10-2024</td>
              <td>LN200001</td>
              <td>
                <span className="td-wrapper-between">
                  John Peter
                  <Image src={insta} alt="" />
                </span>
              </td>
              <td>Havelock Interiors</td>
              <td>Review</td>
              <td>
                <span className="dummy-dropdown">
                  Leslie
                  <button>
                    <Image src={dropdown} />
                  </button>
                </span>
              </td>
              <td>
                <span className="td-btn" onClick={createPPJO}>
                  Create PPJO
                </span>
              </td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={user1} alt="" />
                  Leslie
                </span>
              </td>
              <td>
                <span className="td-btn-conjested">Move To Contacts</span>
              </td>

              <td>abc@gmail.com</td>
              <td>Agently Inc</td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={behrain} alt="" />
                  +973 6145895424
                </span>
              </td>
            </tr>

            <tr>
              <td>Dec-31-2023</td>
              <td>LN2000054</td>
              <td>
                <span className="td-wrapper-between">
                  John Doe
                  <Image src={telephone} alt="" />
                </span>
              </td>
              <td>Aaron</td>
              <td>Pending</td>
              <td>
                <span className="dummy-dropdown">
                  Sanju
                  <button>
                    <Image src={dropdown} />
                  </button>
                </span>
              </td>
              <td>
                <span className="td-btn" onClick={createPPJO}>
                  Create PPJO
                </span>
              </td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={user3} alt="" />
                  Sanju
                </span>
              </td>
              <td>
                <span className="td-btn-conjested">Move To Contacts</span>
              </td>

              <td>abc@gmail.com</td>
              <td>Grubers.Inc</td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={UAE} alt="" />
                  +973 6145895424
                </span>
              </td>
            </tr>

            <tr>
              <td>Jan-02-2024</td>
              <td>LN2005401</td>
              <td>
                <span className="td-wrapper-between">
                  John Peter
                  <Image src={insta} alt="" />
                </span>
              </td>
              <td>School Sign Board</td>
              <td>Negotiation</td>
              <td>
                <span className="dummy-dropdown">
                  Leslie
                  <button>
                    <Image src={dropdown} />
                  </button>
                </span>
              </td>
              <td>
                <span className="td-btn" onClick={createPPJO}>
                  Create PPJO
                </span>
              </td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={user1} alt="" />
                  Leslie
                </span>
              </td>
              <td>
                <span className="td-btn-conjested">Move To Contacts</span>
              </td>

              <td>abc@gmail.com</td>
              <td>Agently Inc</td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={arabiFlag} alt="" />
                  +973 6145895424
                </span>
              </td>
            </tr>

            <tr>
              <td>Jan-10-2024</td>
              <td>LN200001</td>
              <td>
                <span className="td-wrapper-between">
                  John Peter
                  <Image src={whatsappLogo} alt="" />
                </span>
              </td>
              <td>Aaron</td>
              <td>Review</td>
              <td>
                <span className="dummy-dropdown">
                  Leslie
                  <button>
                    <Image src={dropdown} />
                  </button>
                </span>
              </td>
              <td>
                <span className="td-btn">Sample Requested</span>
              </td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={user2} alt="" />
                  Aaron
                </span>
              </td>
              <td>
                <span className="td-btn">Move To Contacts</span>
              </td>

              <td>abc@gmail.com</td>
              <td>Agently Inc</td>
              <td>
                <span className="td-wrapper-between">
                  <Image src={UAE} alt="" />
                  +973 6145895424
                </span>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

LeadsInbox.getLayout = (page) => (
  <CommonLayout
    primaryData={{
      search: false,
    }}
  >
    {page}
  </CommonLayout>
);
export default LeadsInbox;
