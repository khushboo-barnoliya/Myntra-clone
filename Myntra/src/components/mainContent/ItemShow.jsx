import { useContext } from "react";
import { GoStarFill } from "react-icons/go";
import { LuHeart } from "react-icons/lu";
import { MyntraContext } from "../../data/myntraStore";

function ItemShow() {

  const { itemShow } = useContext(MyntraContext)
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container col-8 px-4 py-5">

          <div className="row flex-lg-row align-items-center g-5 py-3 border rounded-3">


            {
              itemShow.map((items, i) => 
              <>
              
              <div key={i} className="col-10 col-sm-8 col-lg-5 mt-0">
              <img src={items.img} className="d-block mx-lg-auto img-fluid rounded-2" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>


            <div className="col-lg-7 mt-0" key={i}>
              <div>

                <div className="border-bottom py-3">
                  <h3 className=" fw-bold mb-0 text-capitalize company-name">{items.brand}</h3>
                  <p className="lead mb-3 item-name opacity-75">{items.body}</p>
                  <div className="ratings">
                    <div className="border d-inline-flex align-items-center justify-content-between">
                      <div className=" d-flex align-items-center">
                        <div className="star gap-1 d-flex align-items-center px-2"><span>{items.rating}</span> <span className=" d-flex align-items-center"><GoStarFill color="#14958F" /></span></div>
                        <div className="vr"></div>
                        <div className="rateCount px-2">{items.peopleRated}</div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="py-2">

                  {/* price */}
                  <div className="my-1 price">
                    <div className=" d-flex justify-content-start align-items-center gap-2">
                      <span className="lead fw-bold current-price">₹{items.prize}</span>
                      <span className=" opacity-75 original-price"><span className=" text-uppercase lead">mrp</span> <span className=" text-decoration-line-through lead ">₹{items.originalPrice}</span> </span>
                      <span className="discount fw-bold">({items.discount} OFF)</span>
                    </div>
                    <small className="teal fw-bold">inclusive of all taxes</small>
                  </div>


                  {/* size */}
                  <div className="my-2">
                    <h6 className="text-uppercase fs-5 fw-bold">select size</h6>

                    <div className="d-flex gap-1">
                      {
                        items.size.map(newSize => <div key={newSize} className="d-flex justify-content-between align-items-center">
                          <button className="sizeSpan btn"><span className="fw-semibold mb-0">{newSize}</span></button>
                        </div>)
                      }
                    </div>


                  </div>
                </div>

                <div className="add-to-bag d-flex justify-content-start gap-2 align-items-center">
                  <button className="btn addToBag fw-semibold rounded-0 px-4 fs-5">Add to Bag</button>
                  <button className="btn addToWish d-flex align-items-center gap-2 fw-semibold rounded-0 px-4 fs-5">
                    <span className=" d-flex align-items-center"><LuHeart /></span>
                    <span>Wishlist</span>
                  </button>
                </div>

                <div className="details my-2">
                  <span>{itemShow.productDetail.map(item => <div key={item}>
                    <small><p className="mb-0"><b className="me-2">Color:</b>{item.color}</p></small>
                    <small><p className="mb-0"><b className="me-2">Warranty:</b>{item.warranty}</p></small>
                    <small><p className="mb-0"><b className="me-2">Material:</b>{item.material}</p></small>
                  </div>)}</span>

                </div>
              </div>
            </div>
            </>)}
            
          </div>



        </div>
      </div>

    </>
  )
}

export default ItemShow