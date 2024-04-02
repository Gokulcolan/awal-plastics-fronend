import React from 'react'
import { MdArrowRight } from "react-icons/md";

const PipelineDuration = () => {
  return (
    <>
      <div className="chart-container">
        <div className="chart-heading">
          <div className="chart-heading-flex">

            <h2>Pipelines Duration</h2>
          </div>
          <p>THIS YEAR <span style={{verticalAlign:'super'}}>.</span> PIPELINE <span style={{verticalAlign:'super'}}>.</span> Won,Lost</p>
        </div>
        <div className="chart box-contain" style={{height:'226px'}}>
          <h5><MdArrowRight /> &nbsp;20 days(86%)</h5>
          <h2>20 days</h2>
          <h6>Days (Average)</h6>

        </div>
      </div>
    </>
  )
}

export default PipelineDuration