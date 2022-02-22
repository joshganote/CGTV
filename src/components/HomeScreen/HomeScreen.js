import React from "react";
import { Grid, Box } from "@mui/material";
import { ContentContainer, DefaultContainer } from "../styles/globalStlyes";
import MartinLogan from "../../assets/martingLogan.png";
import sampleImg from "../../assets/conor.png";
import homeVideo from "../../assets/AGBackground.mp4";

import "./HomeScreen.css";
import Footer from "../Footer/Footer";

export const HomeScreen = () => {
  return (
    <DefaultContainer>
      <video muted autoPlay className='home-video'>
        <source src={homeVideo} type="video/mp4"></source>
      </video>
      <ContentContainer>
        <div className="topSection-container">
          <h1 className="line-1 padding-top">
            Putting all the focus on <span className="focus">you</span>
          </h1>
          <h2 className="line-2">
            A production team working to capture all the moments that make your
            products come to life
          </h2>
        </div>
        {/* <section className="test3">
          <Box>
            <Grid container spacing={2}>
              <Grid item sm={12} md={6}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tristique libero sem, eget vehicula quam feugiat facilisis.
                  Proin consequat nunc aliquam nunc vehicula, ultrices tincidunt
                  lacus vestibulum. Nullam eget leo maximus, hendrerit ipsum
                  eget, varius eros. Phasellus pulvinar magna eget metus
                  viverra, nec mattis odio molestie. Fusce iaculis massa non
                  velit vestibulum, nec iaculis purus tempor. Praesent tempor
                  neque eget ante ultrices posuere. Praesent bibendum lacinia
                  dui id ultricies. Quisque eu mi at elit condimentum
                  vestibulum. Morbi mi tellus, dictum at velit quis, scelerisque
                  sollicitudin leo. Integer porta sed nisi vel pharetra.
                  Maecenas faucibus scelerisque condimentum. Donec mattis risus
                  sed risus faucibus mattis. Duis placerat ullamcorper purus, a
                  efficitur velit pellentesque ac. Mauris euismod condimentum
                  tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Morbi tincidunt risus sit amet velit lacinia porttitor.
                  Sed tincidunt condimentum dolor vel lacinia. Curabitur aliquet
                  bibendum arcu, eget pharetra libero tincidunt nec. In hac
                  habitasse platea dictumst. Pellentesque mollis ipsum quis enim
                  faucibus efficitur. Integer tempor vitae ante non vestibulum.
                  Aenean nunc lectus, sagittis a ex non, hendrerit vehicula
                  lorem. Proin est augue, malesuada in ullamcorper vel, auctor
                  eget sapien. Donec sed interdum turpis, nec bibendum orci.
                  Maecenas et elit a lectus tempus elementum vel ac enim.
                  Aliquam molestie metus eros, viverra tristique magna fringilla
                  in. Praesent quis interdum nisl, ac accumsan augue. Curabitur
                  cursus felis ut vestibulum maximus. Integer vel odio rutrum,
                  finibus ex laoreet, iaculis tortor. Mauris euismod condimentum
                  tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Morbi tincidunt risus sit amet velit lacinia porttitor.
                  Sed tincidunt condimentum dolor vel lacinia. Curabitur aliquet
                  bibendum arcu, eget pharetra libero tincidunt nec. In hac
                  habitasse platea dictumst. Pellentesque mollis ipsum quis enim
                  faucibus efficitur. Integer tempor vitae ante non vestibulum.
                  Aenean nunc lectus, sagittis a ex non, hendrerit vehicula
                  lorem. Proin est augue, malesuada in ullamcorper vel, auctor
                  eget sapien. Donec sed interdum turpis, nec bibendum orci.
                  Maecenas et elit a lectus tempus elementum vel ac enim.
                  Aliquam molestie metus eros, viverra tristique magna fringilla
                  in. Praesent quis interdum nisl, ac accumsan augue. Curabitur
                  cursus felis ut vestibulum maximus. Integer vel odio rutrum,
                  finibus ex laoreet, iaculis tortor.
                </p>
              </Grid>
              <Grid item sm={12} md={6}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tristique libero sem, eget vehicula quam feugiat facilisis.
                  Proin consequat nunc aliquam nunc vehicula, ultrices tincidunt
                  lacus vestibulum. Nullam eget leo maximus, hendrerit ipsum
                  eget, varius eros. Phasellus pulvinar magna eget metus
                  viverra, nec mattis odio molestie. Fusce iaculis massa non
                  velit vestibulum, nec iaculis purus tempor. Praesent tempor
                  neque eget ante ultrices posuere. Praesent bibendum lacinia
                  dui id ultricies. Quisque eu mi at elit condimentum
                  vestibulum. Morbi mi tellus, dictum at velit quis, scelerisque
                  sollicitudin leo. Integer porta sed nisi vel pharetra.
                  Maecenas faucibus scelerisque condimentum. Donec mattis risus
                  sed risus faucibus mattis. Duis placerat ullamcorper purus, a
                  efficitur velit pellentesque ac. Mauris euismod condimentum
                  tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Morbi tincidunt risus sit amet velit lacinia porttitor.
                  Sed tincidunt condimentum dolor vel lacinia. Curabitur aliquet
                  bibendum arcu, eget pharetra libero tincidunt nec. In hac
                  habitasse platea dictumst. Pellentesque mollis ipsum quis enim
                  faucibus efficitur. Integer tempor vitae ante non vestibulum.
                  Aenean nunc lectus, sagittis a ex non, hendrerit vehicula
                  lorem. Proin est augue, malesuada in ullamcorper vel, auctor
                  eget sapien. Donec sed interdum turpis, nec bibendum orci.
                  Maecenas et elit a lectus tempus elementum vel ac enim.
                  Aliquam molestie metus eros, viverra tristique magna fringilla
                  in. Praesent quis interdum nisl, ac accumsan augue. Curabitur
                  cursus felis ut vestibulum maximus. Integer vel odio rutrum,
                  finibus ex laoreet, iaculis tortor. Mauris euismod condimentum
                  tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Morbi tincidunt risus sit amet velit lacinia porttitor.
                  Sed tincidunt condimentum dolor vel lacinia. Curabitur aliquet
                  bibendum arcu, eget pharetra libero tincidunt nec. In hac
                  habitasse platea dictumst. Pellentesque mollis ipsum quis enim
                  faucibus efficitur. Integer tempor vitae ante non vestibulum.
                  Aenean nunc lectus, sagittis a ex non, hendrerit vehicula
                  lorem. Proin est augue, malesuada in ullamcorper vel, auctor
                  eget sapien. Donec sed interdum turpis, nec bibendum orci.
                  Maecenas et elit a lectus tempus elementum vel ac enim.
                  Aliquam molestie metus eros, viverra tristique magna fringilla
                  in. Praesent quis interdum nisl, ac accumsan augue. Curabitur
                  cursus felis ut vestibulum maximus. Integer vel odio rutrum,
                  finibus ex laoreet, iaculis tortor.
                </p>
              </Grid>
              <Grid item sm={12} md={6}></Grid>
            </Grid>
          </Box>
        </section> */}
      </ContentContainer>
      <Footer />
    </DefaultContainer>
  );
};


/* <div style={{ display: "flex" }}>
          <div className="container1">
            <div className="container2">
              <div className="content">
                <h1 className="content-text more-padding">
                  Putting all the focus on you
                </h1>
                <h2 className="content-text2 more-padding">
                  A production team working to capture all the moments that make
                  your products come to life
                </h2>
              </div>
            </div>
          </div> */
        /* <img src={sampleImg}/> */
        /* </div> */
        /* <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <p style={{textAlign: 'center', fontWeight: "bold", fontSize: "64px", height: '425px', display: 'block',
  marginBottom: '16px',
  lineHeight: '1.2em' }}>
                Capturing the all the moments that make you and your products come to life
              </p>
            </Grid>
          </Grid>
        </Box> */
        /* <div className="container1">
          <div className="container2">
            <div className="content">
              <h1 className="content-text">Capturing the all the moments that make you and your products come to life</h1>
            </div>
          </div>
        </div> */

      /* <h1 className="line-1 padding-middle">the focus</h1>
            <div className="test">
              <h1 className="line-1 padding-bottom">
                on <span className="focus">you</span>
              </h1>
            </div> */