import React from 'react'

const Add = () => {
  return (
    <div>

            <div className="conatiner">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-control">Product Name</label>
<input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">


                        <label htmlFor="" className="form-control">Product Code</label>
<input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">


                        <label htmlFor="" className="form-control">Product description</label>
<textarea name="" id="" className="form-control"></textarea>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">


                        <label htmlFor="" className="form-control">Product image</label>
<input type="file" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-control">Price</label>
<input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">

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