import React from "react";
import {
  FooterContainer,
  InstagramIcon,
  YouTubeIcon,
  TwitterIcon,
  TwitchIcon,
  Logo,
  LogoFooter,
  SocialContainer,
  CopyrightIcon,
} from "./FooterStyled";

const Footer = () => {
  return (
      <FooterContainer>
        <LogoFooter>
          <Logo>Complete Geek TV Productions</Logo>
          <CopyrightIcon />
        </LogoFooter>
        <SocialContainer>
          <a href="https://www.youtube.com/c/CompleteGeekTV">
            <YouTubeIcon />
          </a>
          <a href="https://www.instagram.com/completegeektv">
            <InstagramIcon />
          </a>
          <a href="https://twitter.com/completegeektv">
            <TwitterIcon />
          </a>
          <a href="https://www.twitch.com/completegeektv">
            <TwitchIcon />
          </a>
        </SocialContainer>
      </FooterContainer>
  );
};

export default Footer;
