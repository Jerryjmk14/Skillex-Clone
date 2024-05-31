import React from "react";
import Logo from "./Logo";
import { navLink } from "../constants/data";
import { Box, Stack } from "@mui/material";
import styled from "styled-components";
import DefaultButton from "./DefaultButton";

export default function NavBar() {
  return (
    <NavWrapper>
      <Logo />
      <LinkWrapper direction="row" spacing={5}>
        {navLink.map((link) => {
          return (
            <li key={link.id}>
              <Link href={link.href}>{link.navName}</Link>
            </li>
          );
        })}
      </LinkWrapper>
      <DefaultButton>Login</DefaultButton>
      <DefaultButton type="fill">Free Trial</DefaultButton>
    </NavWrapper>
  );
}

const NavWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: 25px auto;
  font-size: 1.5rem;
`;
const LinkWrapper = styled(Stack)`
  list-style-type: none;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: revert;
  }
`;
