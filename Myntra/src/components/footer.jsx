import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { GrYoutube } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import org from '../assets/img/org.png';
import rtrn from '../assets/img/return.png';
import './css/App.css'

function Footer() {
  return (
    <div>
      <div className="container-fluid p-0" id='footer'>
        <footer className="py-5 container">

          <div className="row row-cols-4">
            <div className="col-6 col-md-2 mb-3">
              <div className="mb-3">
                <h5 className="text-uppercase color mb-4 small fw-bold heading">online shopping</h5>
                <ul className="nav flex-column">
                  <li className="nav-item"><a href="" className="nav-link verysmall footLink p-0 text-capitalize">men</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">women</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">kids</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">home & living</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">beauty</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">gift cards</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">myntra insider</a></li>
                </ul>
              </div>

              <div>
                <h5 className="text-uppercase color mb-4 small fw-bold pt-2 heading">useful links</h5>
                <ul className="nav flex-column">
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">blog</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">career</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">site map</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">corporate information</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">whitehat</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">cleartrip</a></li>
                </ul>
              </div>

            </div>

            <div className="col-6 col-md-2 mb-3">
              <div className="mb-3">
                <h5 className="text-uppercase color mb-4 small fw-bold heading">customer policies</h5>
                <ul className="nav flex-column">
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">contact us</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">FAQ</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">T&C</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">terms of use</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">track orders</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">shipping</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">cancellation</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">returns</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">privacy policy</a></li>
                  <li className="nav-item"><a href="#" className="nav-link verysmall footLink p-0 text-capitalize">grievance officer</a></li>
                </ul>
              </div>
            </div>

            <div className="col-6 col-md-4 mb-3 flex-column" id="myntraApps">

              <div className="mb-4">
                <h5 className="text-uppercase color mb-4 small fw-bold heading">experience myntra app on mobile</h5>
                <ul className="nav gap-2">
                  <li className="nav-item mb-2 me-1"><a href="#" className="nav-link p-0 text-body-secondary"><img className="apps" src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0" width={140} /></a></li>

                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><img className="apps" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/135px-Download_on_the_App_Store_Badge.svg.png?20170219160111" width={140} /></a></li>
                </ul>
              </div>

               
              <div>
                <h5 className="text-uppercase color mb-2 small fw-bold heading">keep in touch</h5>
                <ul className="nav gap-3 align-items-center">
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><BsFacebook className="apps2" color="#696E79" size={25} /></a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><BsTwitter className="apps2" color="#696E79" size={25} /></a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><GrYoutube className="apps2" color="#696E79" size={25} /></a></li>
                  <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><FaInstagram className="apps2" color="#696E79" size={25} /></a></li>
                </ul>
              </div>

            </div>

            <div className="col-6 col-md-4 mb-3">

              <ul className="nav w-100">
                <li className="nav-item mb-4 gap-3 d-flex justify-content-start align-items-center">
                  <span><img src={org} width={50} /></span>
                  <span><b className="heading fw-bold text-uppercase">100% ORIGINAL</b> <span className="footLink verysmall">guarantee for all products at myntra.com</span></span>
                </li>
                <li className="nav-item mb-2 gap-3 d-flex justify-content-start align-items-center">
                  <span><img src={rtrn} width={50} /></span>
                  <span><b className="heading fw-bold">Return within 14 days</b> <span className="verysmall footLink"> of receiving your order</span></span>
                </li>
              </ul>

            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <span className="footLink fs-6">in case of any concern, <a target="_blank" href="https://www.myntra.com/contactus" className="contact fw-bolder">Contact Us</a></span>
            <span className="footLink fs-6 text-center">© 2024 www.myntra.com. All rights reserved.</span>
            <span className="text-capitalize fs-6 footLink">a flipkart company</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer