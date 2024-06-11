import { useContext } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { MyntraContext } from "../../../data/myntraStore";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { GoTag } from "react-icons/go";
import { Link } from "react-router-dom"
import { BsShieldFillCheck } from "react-icons/bs";

function BagItem() {

  const { ItemList, removeFromBag } = useContext(MyntraContext)

  return (
    <>
      <div className="container-fluid">
        <div className="container col-xxl-8 px-4">
          <div className="row flex-lg-row g-4 py-3">

            <div className="container-fluid p-0 py-4">
              <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid d-flex justify-content-between align-items-center px-5 border-bottom pb-4">


                  <h4 className="fw-bold">Shopping Bag</h4>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">

                    <ul className="navbar-nav mb-2 mb-lg-0 align-items-center" id="bagList">

                      <li className="nav-item bagListItem">
                        <Link to="/bag/bag-items" className="nav-link text-uppercase fw-bold fs-6" aria-current="page" href="#">bag</Link>
                      </li>

                      <li className="nav-item listDivider"></li>

                      <li className="nav-item bagListItem">
                        <Link to="/bag/address" className="nav-link text-uppercase fw-bold fs-6" aria-current="page" href="#">address</Link>
                      </li>

                      <li className="nav-item listDivider"></li>

                      <li className="nav-item bagListItem">
                        <Link to="/bag/payment" className="nav-link text-uppercase fw-bold fs-6" aria-current="page" href="#">payment</Link>
                      </li>

                    </ul>

                  </div>


                  <div className="d-flex align-items-center gap-2 justify-content-center secure">
                    <BsShieldFillCheck color="#14958F" size={30} />
                    <span className=" text-uppercase">100 % secure</span>
                  </div>
                </div>
              </nav>

            </div>



            <div className="col-10 col-sm-8 col-lg-6">
              <div className="d-flex flex-column gap-3">

                {/* delivery address */}
                <div className="delivery-address border row row-cols-2 rounded-3 p-3">
                  <div className="ps-0 col-8">Deliver to: <b>ADDRESS</b></div>
                  <button className="text-uppercase col-4 float-end p-2 btn btn-outline-danger fw-semibold">change address</button>
                </div>

                {/* offers */}
                <div className="offers border row row-cols-1 rounded-3 p-3">
                  <div className="ps-0 col-8 d-flex align-items-center mb-1"><BiSolidOffer size={25} className="me-1" /> <b>Available Offers</b></div>
                  <small className="verysmall px-0">10% Instant Discount in SBI Credit Card and Credit card EMI transantions on min. spend of ₹5,000. TCA</small>
                </div>

                {ItemList.map(items =>
                  <div key={items} className="card item-card mb-1 p-2 row row-cols-1">
                    <div className="row g-0">
                      <div className="col-md-3">
                        <img src={items.img} className="img-fluid rounded-2" />
                      </div>
                      <div className="col-md-9">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">{items.brand}</h5>
                          <p className="card-text">{items.body}</p>
                          <h6 className="card-text fw-bold mb-3">Rs. {items.prize}</h6>
                          <button onClick={() => removeFromBag(items.key)} className="btn-outline-danger btn gap-2 d-flex align-items-center">
                            <span>Remove from Bag</span>
                            <IoRemoveCircleOutline size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>)}


              </div>
            </div>


            <div className="col-lg-6">
              <div className="container-fluid p-0 border priceMain rounded-2 p-3">


                <div className="coupons flex-column d-flex border-bottom pb-3">
                  <h6 className="fw-bold text-uppercase">coupons</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <span><GoTag /> <b>Apply Coupons</b></span>
                    <button className="btn btn-outline-danger text-uppercase fw-semibold">apply</button>
                  </div>
                </div>

                <div className="price-details pt-3">
                  <h6 className="text-uppercase fw-bold">price deatils: <span className="text-capitalize ms-2">(1 item)</span></h6>

                  <div className="totalPrice border-bottom py-3">

                    {/* MRP */}
                    <span className="d-flex justify-content-between align-items-center fw-normal mb-1">
                      <span>Total MRP</span>
                      <span>Rs. {ItemList.reduce((amount, value) => amount + value.prize)}</span>
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

export default BagItem