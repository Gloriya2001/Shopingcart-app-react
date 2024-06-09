import React from 'react'
import Navbar from './Navbar'

const Search = () => {
  return (
    <div>
<Navbar/>
            <div className="container">
                <div className="row g-3">
                    <h2>Search product</h2>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <lable className="form-label">Product Name</lable>
    <input type="text" className="form-control" />


                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success">Search</button>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Search