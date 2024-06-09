import React, { useState } from 'react'
import Navbar from './Navbar'

const Delete = () => {

const [data,setData] = useState(

{
    "pdtCode":""
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
                <div className="row g-3">
                    <h2>Delete Product</h2>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">Product code</label>
                        <input type="text" className="form-control" name='pdtCode' value={data.pdtCode} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button className="btn btn-danger" onClick={outputHandler}>Delete</button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Delete