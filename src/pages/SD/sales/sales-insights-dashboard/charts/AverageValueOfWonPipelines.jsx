import React from 'react'
import { MdArrowRight } from "react-icons/md";

const AverageValueOfWonPipelines = () => {
  return (
    <>
      <div className="chart-container">
        <div className="chart-heading">
          <div className="chart-heading-flex">

            <h2>Average value of won Pipelines</h2>
          </div>
          <p>THIS YEAR <span style={{verticalAlign:'super'}}>.</span> Won</p>
        </div>
        <div className="chart box-contain" style={{height:'226px',background:'white'}}>
          <h5><MdArrowRight /> &nbsp;BHD 992.000(0%)</h5>
          <h2>BHD 992.000(0%)</h2>
          <h6>Average Pipeline Value</h6>

        </div>
      </div>
    </>
  )
}

export default AverageValueOfWonPipelines