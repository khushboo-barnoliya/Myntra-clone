/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom"


function EmptyBag() {
  return (
    <div>
      <div className="px-4 py-5 text-center">
        <img className="d-block mx-auto mb-4" src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" width={200} />
          <h3 className="fw-bold text-body-emphasis">Hey, it feel so light!</h3>
          <div className="col-lg-6 mx-auto">
            <p className="mb-4">There is nothing in your bag. Let's add some items</p>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to="/" type="button" className="btn addToWish rounded-0 text-uppercase fw-semibold">add items</Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default EmptyBag