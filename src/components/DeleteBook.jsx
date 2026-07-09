import React from 'react'

const DeleteBook = () => {
  return (
    <div>

<div className="container">
                <div className="row">
                    <div className="col col-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                                <label htmlFor="" className="form-label"> Book Code/ISBN </label>

                                <input type="text" className="form-control" />

                                <button className="btn btn-danger mt-3">Delete</button>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6"></div>
                        </div>






                    </div>
                </div>
            </div>





    </div>
  )
}

export default DeleteBook