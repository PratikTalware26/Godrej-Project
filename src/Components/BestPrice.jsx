import React from 'react'
import "./BestPrice.css"

const BestPrice = () => {
  return (
    <div className='d-flex align-items-center p-4 price-cont'>
        <div className='w-100'>
        <div className="head-cont">
        <h2 className='text-center p-4 text-light'>Best Pricing</h2>
      </div>
      <div className="pricetable-cont">
        <table className="table table-hover text-center">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Type</th>
              <th>Area (Sq.Ft.)</th>
              <th>Price Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2 BHK</td>
              <td>828</td>
              <td>
                <button className='btn main-btn'>
                  View Price
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>3 BHK</td>
              <td>1000</td>
              <td>
                <button className='btn main-btn'>
                  View Price
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>3 BHK</td>
              <td>1477</td>
              <td>
                <button className='btn main-btn'>
                  View Price
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}

export default BestPrice