import "../../css/App.css"
import { GoStar } from "react-icons/go";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoMdCard } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { RiBankFill } from "react-icons/ri";
import { RiDiscountPercentLine } from "react-icons/ri";
import { useState } from "react";

function BagPayment() {

  const [paymode, setPaymode] = useState("")

  return (
    <>
      <div className="container-fluid">
        <div className="container col-xxl-8 px-4">
          <div className="row flex-lg-row g-4 py-3">
            <div className="col-10 col-sm-8 col-lg-6">
              

              <div className="container-fluid">
                <h5 className="fw-bold">Choose payment mode</h5>

                <div className="container-fluid p-0 d-flex border border-secondary-subtle">
                  <div className="leftPay">
                    <div className="payModes">
                      <ul className="list-group">

                        <li onClick={() => setPaymode("rec")} className={`list-group-item pointer py-3 d-flex align-items-center fw-bold border-start-0 rounded-0 bgPayGrey border-secondary-subtle border-top-0 border-end ${paymode === "rec" ? "payActive" : ""}`}>
                          <GoStar className="me-2" color="black" />
                          <span className="small">Recommended</span>
                        </li>
                        <li onClick={() => setPaymode("cash")} className={`list-group-item pointer py-3  d-flex align-items-center fw-bold border-start-0 rounded-0 bgPayGrey border-secondary-subtle border-end ${paymode === "cash" ? "payActive" : ""}`}>
                          <FaRegMoneyBillAlt className="me-2" color="black" />
                          <span className="small">Cash On Delivery (Cash/UPI)</span>
                        </li>
                        <li onClick={() => setPaymode("upi")} className={`list-group-item pointer py-3  d-flex align-items-center fw-bold border-start-0 rounded-0 bgPayGrey border-secondary-subtle border-end ${paymode === "upi" ? "payActive" : ""}`}>
                          <IoMdCard className="me-2" color="black" />
                          <span className="small">UPI (Pay via any App)</span>
                        </li>
                        <li onClick={() => setPaymode("card")} className={`list-group-item pointer py-3  d-flex align-items-center fw-bold border-start-0 rounded-0 bgPayGrey border-secondary-subtle border-end ${paymode === "card" ? "payActive" : ""}`}>
                          <FaRegCreditCard className="me-2" color="black" />
                          <span className="small">Credit/Debit Card</span>
                        </li>
                        <li onClick={() => setPaymode("wallet")} className={`list-group-item pointer py-3  d-flex align-items-center fw-bold border-start-0 rounded-0 bgPayGrey border-secondary-subtle border-start-0 border-end ${paymode === "wallet" ? "payActive" : ""}`}>
                          <IoWalletOutline className="me-2" color="black" />
                          <span className="small">Wallets</span>
                        </li>
                        <li onClick={() => setPaymode("paylater")} className={`list-group-item pointer py-3  d-flex align-items-center fw-bold border-start-0 rounded-0 bgPayGrey border-secondary-subtle border-start-0 border-end ${paymode === "paylater" ? "payActive" : ""}`}>
                          <RiMoneyRupeeCircleLine className="me-2" color="black" />
                          <span className="small">Pay Later</span>
                        </li>
                        <li onClick={() => setPaymode("emi")} className={`list-group-item py-3 pointer  d-flex align-items-center fw-bold border-start-0 rounded-0 bgPayGrey border-secondary-subtle border-start-0 border-end ${paymode === "emi" ? "payActive" : ""}`}>
                          <RiDiscountPercentLine className="me-2" color="black" />
                          <span className="small">EMI</span>
                        </li>
                        <li onClick={() => setPaymode("net")} className={`list-group-item py-3 pointer  d-flex align-items-center fw-bold border-bottom-0 rounded-0 bgPayGrey border-secondary-subtle border-start-0 border-end ${paymode === "net" ? "payActive" : ""}`}>
                          <RiBankFill className="me-2" color="black" />
                          <span className="small">Net Banking</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="rightPay p-3">
                    
                  </div>
                </div>
              </div>

            </div>


            <div className="col-lg-6">
              <div className="container-fluid p-0 priceMainAdd border-start border-secondary-subtle p-3">
                <h6 className="text-uppercase color fw-bold">delivery estimates</h6>

                <div className="pb-3 px-2">
                  <div key="" className="row align-items-center">
                    <img src="" alt="" className="col-2" />
                    <span className="mb-0 col-9 px-0">Estimated Delivery By: <b className="ms-1">Mon, May 27 2024</b></span>
                  </div>


                </div>









                <div className="price-details pt-3">
                  <h6 className="text-uppercase fw-bold">price deatils: <span className="text-capitalize ms-2">(1 item)</span></h6>

                  <div className="totalPrice border-bottom py-3">

                    {/* MRP */}
                    <span className="d-flex justify-content-between align-items-center fw-normal mb-1">
                      <span>Total MRP</span>
                    </span>

                    {/* SWD */}
                    <span className="d-flex justify-content-between align-items-center fw-normal mb-1">
                      <span>Social Work Donation</span>
                      <span>Rs. 10</span>
                    </span>

                    {/* Platform fee */}
                    <span className="d-flex justify-content-between align-items-center fw-normal mb-1">
                      <span>Platform Fee</span>
                      <span>Rs. 20</span>
                    </span>

                    {/* Shipping fee */}
                    <span className="d-flex justify-content-between align-items-center fw-normal mb-1">
                      <span>Shipping Fee</span>
                      <span>FREE</span>
                    </span>

                  </div>

                  <div className="totalAmount d-flex justify-content-between align-items-center my-2">
                    <span className="text-capitalize"><b>total amount</b></span>
                    <span><b>Rs. 1979</b></span>
                  </div>


                  <button className="btn btn-danger text-uppercase fw-semibold w-100 mt-1">Continue</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default BagPayment