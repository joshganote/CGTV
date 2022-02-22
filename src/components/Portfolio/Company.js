import React, { useRef, useState, useEffect } from "react";
import "./Portfolio.css";
import { VscPlayCircle } from "react-icons/vsc";
import { Library } from "../Library/Library";
import { useVideoAutoPlayback } from "./VideoHook";

export const PortfolioCompaniesVideo = (props) => {
  
  const [containerRef, videoRef] = useVideoAutoPlayback({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <div className="company-container">
      <div className="img-container" ref={containerRef}>
        <video
          playsInline
          loop
          muted
          className="company-preview"
          ref={videoRef}
        >
          <source
            src={props.videoPreview}
            type="video/mp4"
            alt="product preview"
          ></source>
        </video>
      </div>
      {/* <div className="left-line"> */}
      <div className="company-name-wrapper">
        <p className="header top">{props.header}</p>
        <p className="header bottom">{props.subHeader}</p>
        <p className="description">{props.description}</p>
        <div className="btn-wrapper">
          {/* <button className="play-btn"> */}
          <VscPlayCircle
            onClickCapture={props.videoSource}
            onClick={props.click}
            className="play-btn"
          />
          {/* <p className="btn-text">Watch</p> */}
          {/* </button> */}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export const PortfolioCompaniesImage = (props) => {
  const subHeader = Library.companyWithImg.filter((z) => z.subHeader === "");

  return (
    <div className="company-container">
      <div className="img-container">
        <img
          src={props.imgSource}
          alt="production"
          className="company-preview"
        />
      </div>
      {/* <div className="left-line"></div> */}
      <div className="company-name-wrapper">
        {subHeader ? (
          <p className="header top">{props.header}</p>
        ) : (
          <p className="header top">{props.header}</p>
        )}
        <p className="header bottom">{props.subHeader}</p>
        <p className="description">{props.description}</p>
        <div className="btn-wrapper">
          {/* <button className="play-btn"> */}
          <VscPlayCircle
            onClickCapture={props.videoSource}
            onClick={props.click}
            className="play-btn"
          />
          {/* <p className="btn-text">Watch</p> */}
          {/* </button> */}
        </div>
      </div>
    </div>
  );
};
