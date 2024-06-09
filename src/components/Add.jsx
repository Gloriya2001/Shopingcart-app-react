import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {

  const [data, setData] = useState(
    {
      "pdtName":"",
      "pdtCode":"",
      "description":"",
      "pdtimg":"",
      "price":"",
    }

  )
  const inputHandler = (event) => {
    setData({...data,[event.target.name]:event.target.value})

  }
  const outputHandler = () => {
    console.log(data)
  }



  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">

              <h1><b>Add Product</b></h1>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Product Name</label>
                <input type="text" className="form-control" name='pdtName' value={data.pdtName} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                <label htmlFor="" className="form-label">Product Code</label>
                <input type="text" className="form-control" name='pdtCode' value={data.pdtCode} onChange={inputHandler} />


              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                <label htmlFor="" className="form-label">Product description</label>
                <textarea id="" className="form-control" name='description' value={data.description} onChange={inputHandler}></textarea>

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                <label htmlFor="" className="form-label">Product image</label>
                <input type="file" className="form-control" name='pdtimg' value={data.pdtimg} onChange={inputHandler}/>

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Price</label>
                <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler}/>

              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <button className="btn btn-success" onClick={outputHandler}>Add</button>

              </div>

            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Add