import React from 'react'
import Navbar from './Navbar'

const Add = () => {
  return (
    <div>
<Navbar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">

              <h1><b>Add Product</b></h1>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Product Name</label>
                <input type="text" className="form-control" />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                <label htmlFor="" className="form-label">Product Code</label>
                <input type="text" className="form-control" />


              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                <label htmlFor="" className="form-label">Product description</label>
                <textarea name="" id="" className="form-control"></textarea>

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                <label htmlFor="" className="form-label">Product image</label>
                <input type="file" className="form-control" />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Price</label>
                <input type="text" className="form-control" />

              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <button className="btn btn-success">Add</button>

              </div>

            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Add