import { Link } from "react-router-dom"
import Address from "./ItemsInBag/Address"
import BagPayment from "./ItemsInBag/BagPayment"
import { BsShieldFillCheck } from "react-icons/bs"
import '../css/App.css'
import { useState } from "react"


function BagSummary() {


  const [mode, setMode] = useState("Bag")

  return (
    <>
      <div>
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
                        <Link to=""  onClick={() => setMode("Bag")} className={`nav-link text-uppercase fw-bold fs-6 ${mode === "Bag" ? "modeActive" : ""}`} aria-current="page" href="#">bag</Link>
                      </li>

                      <li className="nav-item listDivider"></li>

                      <li className="nav-item bagListItem">
                        <Link to=""  onClick={() => setMode("Add")} className={`nav-link text-uppercase fw-bold fs-6 ${mode === "Add" ? "modeActive" : ""}`} aria-current="page" href="#">address</Link>
                      </li>

                      <li className="nav-item listDivider"></li>

                      <li className="nav-item bagListItem">
                        <Link to=""  onClick={() => setMode("Pay")} className={`nav-link text-uppercase fw-bold fs-6 ${mode === "Pay" ? "modeActive" : ""}`} aria-current="page" href="#">payment</Link>
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
        {/* <BagItem /> */}
        <Address />
        <BagPayment />
      </div>
      
    </>

  )
}

export default BagSummary