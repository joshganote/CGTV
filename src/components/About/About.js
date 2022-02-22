import React from "react";
import Footer from "../Footer/Footer";
import { DefaultContainer, ContentContainer } from "../styles/globalStlyes";
import homeVideo from "../../assets/AGBackground.mp4";
import portrait from "../../assets/portrait3.png";
import { Library } from "../Library/Library";
import { Grid, Box } from "@mui/material";
import "./About.css";

export const About = () => {
  return (
    <DefaultContainer>
      <ContentContainer>
        <section>
          <div className="img-container">
            {Library.photo.map((img, index) => (
              <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                  <Grid item xs={3}>
                    {/* <div className="img-content"> */}
                    <img
                      src={img.imageSrc}
                      alt={img.alt}
                      className="about-img"
                      key={index}
                    />
                  </Grid>
                  <Grid item xs={9}>
                  <p className="img-content">{img.bio}</p>
                  </Grid>
                  {/* </div> */}
                </Grid>
              </Box>
            ))}
          </div>
        </section>
        <section></section>
      </ContentContainer>
      <Footer />
    </DefaultContainer>
  );
};
