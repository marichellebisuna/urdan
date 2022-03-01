import React from 'react'

const Shipping = () => {
  return (
   
    <div className="cart-calculate-discount-wrap mb-40">
        <h4>Calculate shipping </h4>
        <div className="calculate-discount-content">
            <div className="select-style mb-15">
                <select className="select-two-active">
                    <option>Bangladesh</option>
                    <option>Bahrain</option>
                    <option>Azerbaijan</option>
                    <option>Barbados</option>
                    <option>Barbados</option>
                </select>
            </div>
            <div className="select-style mb-15">
                <select className="select-two-active">
                    <option>State / County</option>
                    <option>Bahrain</option>
                    <option>Azerbaijan</option>
                    <option>Barbados</option>
                    <option>Barbados</option>
                </select>
            </div>
            <div className="input-style">
                <input type="text" placeholder="Town / City"/>
            </div>
            <div className="input-style">
                <input type="text" placeholder="Postcode / ZIP"/>
            </div>
            <div className="calculate-discount-btn btn-hover">
                <a className="btn theme-color" href="#">Update</a>
            </div>
        </div>
    </div>

  )
}

export default Shipping