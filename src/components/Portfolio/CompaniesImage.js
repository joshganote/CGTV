import React from 'react';
import './Portfolio.css';

export const PortfolioCompaniesImage = (props) => {

  return(
    <div className="ML-container2">
    <div className="img-container">
      <img  src={props.imgSource} alt="production" className="yt" />
    </div>
    <div className="logo-text">
      <div className="left-line"></div>
      <p className="headertxt top">{props.header}</p>
      <p className="headertxt bottom">{props.subHeader}</p>
      <p className="stuff">{props.description}</p>
      <div className="ml-btn-wrapper">
          <button onClickCapture={props.videoSource} onClick={props.click} className="ml-btn">{props.btnName}</button>
        </div>
    </div>
  </div>
  )
}