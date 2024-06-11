/* eslint-disable react/jsx-key */
import { Link, useLoaderData } from "react-router-dom";
import Slider from "./slider";
import { useContext } from "react";
import { MyntraContext } from "../../data/myntraStore";
import '../css/App.css'


function Men() {

  const menItemData = useLoaderData();

  const { handleAddToBag, addToItemShow } = useContext(MyntraContext)

  return (
    <>
      <div className="container-fluid p-0 d-flex flex-column justify-content-start py-3">
        <nav aria-label="breadcrumb" className="m-0 px-4">
          <ol className="breadcrumb mb-3">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Library</a></li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
          <span className="footLink fs-6"><b className="text-black">Apparel</b> - 7419 items</span>
        </nav>


        <Slider />

        <div>
          <div className="container-fluid p-5 px-0 my-3" id="featured-3">
            <h3 className="pb-2 px-5 fw-bold ls text-uppercase color bigHeading">biggest deals on top brands</h3>

            <div className="container p-0 my-5 d-flex justify-content-center">
              <div className="container-fluid row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2">
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/1dce9c3e-77fa-48f1-85a3-d3c136c1d73e1598892377652-USPA.jpg" />

                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3fa337a0-c792-4038-8d12-50d463c189a11598892377363-Levis.jpg" />

                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg" />

                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg" />

                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/a7d3676a-9694-4a84-835e-0408fdad884b1598892377407-Nike.jpg" />

                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/cec595c6-c7ec-4259-af8b-997a33a09ce71598892377444-Puma.jpg" />

                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/0206da63-a7cc-4f83-8527-90d7dc74706b1598892377489-Skechers.jpg" />

                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/d977e7ac-67dd-4fa6-b922-fe0057385dfa1598892377205-Crocs.jpg" />


              </div>
            </div>

          </div>
        </div>


        <div>
          <h3 className="pb-2 px-5 fw-bold ls text-uppercase color text-start bigHeading">myntra fashion store</h3>
          <div className="container-fluid p-0 px-0 my-3 d-flex justify-content-center" id="featured-3">
            <div className="container-fluid p-0 my-5 row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center">
              {menItemData.map(items =>
                <div className="cardMain d-flex justify-content-center">
                  <Link to="/men/products" className="text-decoration-none" onClick={() => addToItemShow(items)} >
                    <div className="card rounded-0 border-0 mb-3 mx-auto" id="menCard">

                      <img className="card-img-top rounded-0" src={items.img} alt="Title" />

                      <div className="card-body lh-sm p-2">
                        <h6 className="card-title fw-bold heading mb-2">{items.brand}</h6>
                        <p className="card-text footLink small">{items.body}</p>
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="card-title fw-bold mb-0 heading">Rs.{items.prize}</h6>
                          <small className=" text-decoration-line-through verysmall footLink">Rs. {items.originalPrice}</small>
                          <small className="discount verysmall fw-bold">(58% OFF)</small>

                        </div>
                        <button onClick={() => handleAddToBag(items)} className="w-100 btn btn-danger btn-sm mt-2 fw-bold">ADD TO CART</button>
                      </div>
                    </div>
                  </Link>
                </div>)}

            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Men;