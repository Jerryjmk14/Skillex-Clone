import { Box, Stack } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import { footerIcons, navLink } from "../constants/data";
import styled from "styled-components";
import DefaultButton from "./DefaultButton";
import logoCopyright from "../assets/images/logo-copyright.svg";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

export default function Footer() {
  return (
    <div>
      <FooterWrapper>
        <Logo />
        <Stack direction="row" spacing={3}>
          {navLink.map((link) => {
            return (
              <LinkWrapper key={link.id}>
                <Link href={link.href}>{link.navName}</Link>
              </LinkWrapper>
            );
          })}
        </Stack>
        <label>
          Join our community
          <br />
          <InputContainer type="text" />
          <DefaultButton type="search">GO</DefaultButton>
        </label>
      </FooterWrapper>
      <FooterIconContainer>
        <Stack direction="row" spacing={2}>
          <img
            src={logoCopyright}
            alt="copyright-logo"
            style={{ width: "40px" }}
          />
          <span>2021 Halo Lab. All rights reserved</span>
        </Stack>
        <Stack direction="row" spacing={3}>
          {footerIcons.map((data) => {
            return (
              <div key={data.id}>
                <a href="#">
                  <img src={data.icon} alt="logo" style={{ width: "40px" }} />
                </a>
              </div>
            );
          })}
        </Stack>
      </FooterIconContainer>
      <FooterDark>
        <FavoriteRoundedIcon />
        <a href="#">Like</a> & <a href="#">Follow</a> from you. New free to use
        projects from us.
      </FooterDark>
    </div>
  );
}

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 20px;
  font-size: 20px;
`;

const FooterIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 3rem 0;
`;

const LinkWrapper = styled(Stack)`
  list-style-type: none;
  font-size: 20px;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: revert;
  }
`;

const InputContainer = styled.input`
  padding: 15px;
`;

const FooterDark = styled.div`
  background-color: #1e1e2f;
  text-align: center;
  font-size: 22px;
  color: white;
  padding: 3rem;

  a {
    color: white;
  }
`;
