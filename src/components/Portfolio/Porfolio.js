import React, { useState, useEffect, useVideoAutoPlayback } from "react";
import { ContentContainer, DefaultContainer } from "../styles/globalStlyes";
import { Grid, Box } from "@mui/material";
import Footer from "../Footer/Footer";
import { IoClose } from "react-icons/io5";
import { Oval } from "react-loading-icons";
import { PortfolioCompaniesVideo, PortfolioCompaniesImage } from "./Company";
import ReactPlayer from 'react-player';

// import { PortfolioCompaniesImage } from "./CompaniesImage.js";

import "./Portfolio.css";
import { Library } from "../Library/Library";

const Portfolio = () => {
  const [videoPlay, isVideoPlay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [videoPath, setVideoPath] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  // async function videoCall() {
  //   isVideoPlay(true);
  //   setLoading(true);
  //   await fetch(videoPath, { mode: "no-cors" });
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }

  // console.log(currentImage, 'yooooooo')
  // function changeImg() {
  //   const imageList = Library.companies.filter(item => item.imgSource.length > 1);
  //   console.log(imageList, 'yoooo')
  //   console.log('test2');
  //   if (currentImage < imageList) {
  //     console.log('test3');
  //     setCurrentImage(+1);
  //   } else {
  //     console.log('test4');
  //     setCurrentImage(0);
  //   }
  // }

  // useEffect(() => {
  //   setInterval(() => {
  //     changeImg()
  //     console.log('test')
  //   }, 1000);
  // }, [])
  // const playVideo = document.querySelectorAll("#vid");
  // const observer = new IntersectionObserver((entries) => {
  //   console.log(entries);
  // });
  // observer.observe(playVideo);

  return (
    <>
      <div>
        <div className="portfolio-introduction">
          <h1 style={{ color: "white" }}>
            Come take a look what we've done for other companies
          </h1>
          <h1 style={{ color: "white" }}>
            We're passionate about the products you make because well... we're
            probably already using them
          </h1>
        </div>
        {Library.companyWithVideo.map((item, index) => (
          <PortfolioCompaniesVideo
            id="vid"
            key={index}
            header={item.header}
            subHeader={item.subHeader}
            videoPreview={item?.videoPreview}
            description={item.description}
            btnName={item.btnName}
            videoSource={() => setVideoPath(item.videoSource)}
            click={() => isVideoPlay(true)}
          />
        ))}
        {Library.companyWithImg.map((item, index) => (
          <PortfolioCompaniesImage
            key={index}
            header={item.header}
            subHeader={item.subHeader}
            imgSource={item.imgSource}
            description={item.description}
            btnName={item.btnName}
            click={() => isVideoPlay(true)}
            videoSource={() => setVideoPath(item.videoSource)}
            style={item.customStyle}
          />
        ))}
        {videoPlay ? (
          <>
            <div className="video-player isVisible">
              {loading ? (
                <div>
                  <Oval height={100} width={100} color="white" />
                </div>
              ) : (
                <div id="video-player">
                  
                  <ReactPlayer width="1000px" height="500px" className="video-test" url={videoPath} controls={true}/>
                  <div className="close">
                    <IoClose
                      size={30}
                      color="white"
                      onClick={() => isVideoPlay(false)}
                    />
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;

/* <div className="ML-container2">
          <div className="img-container">
            <img src={camera} alt="production" class="yt" />
          </div>
          <div className="logo-text">
            <div className="left-line"></div>
            <p className="headertxt top">Martin</p>
            <p className="headertxt bottom">Logan</p>
            <p className="stuff">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sed diam commodo, efficitur sapien ac, pretium eros. Mauris ac
              orci quis odio pellentesque hendrerit eget ac massa. Etiam blandit
              efficitur maximus. Cras nibh neque, convallis sit amet magna et.
            </p>
            <div className="ml-btn-wrapper">
                <button onClick={() => isVideoPlay(true)} className="ml-btn">Watch</button>
              </div>
          </div>
        </div> */
/* <Box>
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} sm={8}>
              <div className="header-border">
                <p className="top">Martin</p>
                <p className="bottom">Logan</p>
              </div>
              <Grid item sm={10}>
              <div className="martin-text">
                <p className="ml-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur sed diam commodo, efficitur sapien ac, pretium eros.
                  Mauris ac orci quis odio pellentesque hendrerit eget ac massa.
                  Etiam blandit efficitur maximus. Cras nibh neque, convallis
                  sit amet magna et, commodo semper quam. Donec vulputate
                  convallis enim id egestas. Nunc eu mollis velit. Cras viverra
                  elit sit amet porta porttitor. Praesent tempor felis elit, sit
                  metus. Suspendisse potenti.
                </p>
              </div>
              </Grid>
              <Grid item sm={12}>
              <div className="ml-btn-wrapper">
                <button onClick={() => isVideoPlay(true)} className="ml-btn">Watch</button>
              </div>
              </Grid>
            </Grid>
            <Grid item lg={8} md={8} sm={12}>
              <img src={production} alt="ML" className="avm" />
            </Grid>
          </Grid>
        </Box>
        {videoPlay ? (
          <>
            <div className="video-player isVisible">
              {loading ? (
                <div>
                  <Oval height={100} width={100} color="white" />
                </div>
              ) : (
                <div id="video-player">
                  <iframe
                    width="1280"
                    height="720"
                    className="video-test"
                    src={cgtv1}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                  <div className="close">
                    <IoClose
                      size={30}
                      color="white"
                      onClick={() => isVideoPlay(false)}
                    />
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <></>
        )} */
/* <div className="header-text">
          <h1 className="product-header">Product Demo</h1>
          <div className="divider"></div>
        </div> */
/* <div className="img-wrapper">
          <Grid container spacing={1}>
            {Library.videos.map((video, index) => (
              <>
                <Grid item md={6} sm={12} key={index}>
                  <img
                    src={video.portPic}
                    alt="photos"
                    onClickCapture={() => setVideoPath(video.portVideo)}
                    onClick={videoCall}
                    className="port-pic"
                  />
                </Grid>
                {videoPlay ? (
                  <>
                    <div className="video-player isVisible">
                      {loading ? (
                        <div>
                        <Oval height={100} width={100} color="white" />
                        </div>
                      ) : (
                        <div id="video-player">
                        <iframe
                          width="1280"
                          height="720"
                          className="video-test"
                          src={videoPath}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                        <div className="close">
                          <IoClose
                            size={30}
                            color="white"
                            onClick={() => isVideoPlay(false)}
                          />
                        </div>
                      </div>
                      )}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </>
            ))}
          </Grid> */
/* <>
            {videoPlay ? (
              <>
                <div className="video-player isVisible" key={index}>
                  <div id="video-player">
                    <iframe
                      width="1280"
                      height="720"
                      className="video-test"
                      src={video.portVideo}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                    <div className="close">
                      <IoClose
                        size={30}
                        color="white"
                        onClick={() => isVideoPlay(false)}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </> */
/* </div>
      </div> */
/* <div className="header-text m-top">
        <h1 className="product-header">Product Review</h1>
        <div className="divider"></div>
      </div>
      <div className="img-wrapper">
        <Grid container spacing={1}>
          {Library.videos.map((video, index) => (
            <>
              <Grid item md={6} sm={12} key={index}>
                <img
                  src={video.portPic}
                  alt="photos"
                  onClickCapture={() => setVideoPath(video.portVideo)}
                  onClick={() => isVideoPlay(true)}
                  className="port-pic"
                />
              </Grid>
              {videoPlay ? (
                <>
                  <div className="video-player isVisible">
                    <div id="video-player">
                      <iframe
                        width="1280"
                        height="720"
                        className="video-test"
                        src={videoPath}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                      />
                      <div className="close">
                        <IoClose
                          size={30}
                          color="white"
                          onClick={() => isVideoPlay(false)}
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          ))}
        </Grid> */

/* <div className="video-player isVisible">
      {loading ? (
        <div>
          <Oval height={100} width={100} color="white" />
        </div>
      ) : (
        <div id="video-player">
          <iframe
            width="1280"
            height="720"
            className="video-test"
            src={videoPath}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <div className="close">
            <IoClose
              size={30}
              color="white"
              onClick={() => isVideoPlay(false)}
            />
          </div>
        </div>
      )}
    </div> */
/* <iframe
  className="video-test"
  src={`https://www.youtube.com/embed/v9dIysPyKPw`}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title="Embedded youtube"
/> */
/* <iframe
    className="video-test"
    src={`https://www.youtube.com/embed/v9dIysPyKPw`}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
  /> */
// <>
//   <div className="video-player isVisible">
//     <div id="video-player">
//       <iframe
//         width="1280"
//         height="720"
//         className="video-test"
//         src={homeVideo}
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//         title="Embedded youtube"
//       />
//     </div>
//     <div className="close">
//     <IoClose size={30} color="white" onClick={() => isVideoPlay(false)}/>
//   </div>
//   </div>
// </>
/* <div className="hello">
  <div className="player-wrapper">
    <ReactPlayer
      className="react-player"
      url="https://www.youtube.com/embed/v9dIysPyKPw"
      width="100%"
      height="100%"
    />
  </div>
  </div> */
/* <div className="video-container">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=v9dIysPyKPw"
              width="50%"
              height="50%"
              controls={true}
            />
          </div>
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=v9dIysPyKPw"
              width="50%"
              height="50%"
              controls={true}
            />
          </div>
        </div> */
