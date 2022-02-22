import React, { useState } from "react";
import {
  OpenMenu,
  CloseMenu,
  MobileLinks,
  MobileContainer,
  MobileHeader,
  MobileLeft,
  MobileRight,
  MobileLogo,
  DesktopContainer,
  NavHeader,
  LeftContainer,
  RightContainer,
  NavLink,
  Logo,
  LogoLink,
  MobileMenu,
  CenterContainer,
  ContactBorder,
} from "./NavbarElements";
import { Library } from "../Library/Library";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const contactName = Library.routeName.filter((x) => x.name === "CONTACT");
  const contactPath = Library.routeName.filter((x) => x.path === "/contact");

  window.addEventListener("resize", () => {
    if (document.body.clientWidth > 768) {
      setOpen(false);
    }
  });

  const scrollToTop = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <DesktopContainer>
        <NavHeader>
          <LeftContainer>
            <LogoLink to="/">
              <Logo>CGTV</Logo>
            </LogoLink>
          </LeftContainer>
          <CenterContainer>
            {Library.routeName.map((route, index) => (
              <NavLink key={index} to={route.path}>
                {route.name}
              </NavLink>
            ))}
          </CenterContainer>
          <RightContainer>
            <OpenMenu onClick={() => setOpen(true)} size={25} />
            <ContactBorder>
              <NavLink to={Library.contact.path}>
                {Library.contact.name}
              </NavLink>
            </ContactBorder>
          </RightContainer>
        </NavHeader>
      </DesktopContainer>
      <MobileContainer style={open ? { left: 0, overflowY: "hidden" } : {}}>
        <MobileHeader>
          <MobileLeft>
            <MobileLogo onClick={() => setOpen(false)}>
              <Logo>CGTV</Logo>
            </MobileLogo>
          </MobileLeft>
          <MobileRight>
            <CloseMenu onClick={scrollToTop} size={25} />
          </MobileRight>
        </MobileHeader>
        <MobileMenu>
          {Library.routeName.map((route, index) => (
            <MobileLinks
              key={index}
              to={route.path}
              onClick={() => setOpen(false)}
            >
              {route.name}
            </MobileLinks>
          ))}
        </MobileMenu>
      </MobileContainer>
    </>
  );
};

export default Navbar;
