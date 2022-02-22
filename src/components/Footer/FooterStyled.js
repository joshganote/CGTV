import styled, { css } from "styled-components";
import { BsInstagram, BsYoutube, BsTwitter, BsTwitch } from "react-icons/bs";
import { MdOutlineCopyright } from "react-icons/md";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 0 4rem;
  transition: 0.3s ease padding;
  height: 6em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  position: relative;
  margin-top: auto;

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
    transition: 0.3s ease padding;
  }
`;

export const LogoFooter = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const Logo = styled.p`
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 0.75em;
  }
`;

export const CopyrightIcon = styled(MdOutlineCopyright)`
  color: white;
  font-size: 1em;
  margin-left: 2px;

  @media screen and (max-width: 768px) {
    font-size: 0.5em;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    margin-top: 5px;
  }
`;

export const InstagramIcon = styled(BsInstagram)`
  color: white;
  font-size: 1.5em;
  margin-right: 1em;

  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

export const YouTubeIcon = styled(BsYoutube)`
  color: white;
  font-size: 1.5em;
  margin-right: 1em;

  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

export const TwitterIcon = styled(BsTwitter)`
  color: white;
  font-size: 1.5em;
  margin-right: 1em;

  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

export const TwitchIcon = styled(BsTwitch)`
  color: white;
  font-size: 1.5em;
  margin-right: 1em;

  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;
