import { Box, Flex } from "@chakra-ui/core";
import React from "react";
import Link from "../link";
import MobileMenu from "../menu";
import { isUrl, omitConnectProps } from "../helpers";
import { connect } from "frontity";

const SiteHeader = props => (
  <Box
    as="header"
    transition="transform ease .25s"
    width="100%"
    pos="fixed"
    top="0"
    left="0"
    zIndex="90"
    {...props}
  />
);

const SiteHeaderInner = props => (
  <Flex
    align="center"
    className="container"
    width={{ base: "auto", sm: "92%" }}
    mx="auto"
    height={{ sm: "70px" }}
    maxW="1550px"
    {...props}
  />
);

const Logo = ({ isImage = true, src }) =>
  isImage ? (
    <Box as="img" alt="JDC Logo" src={src} width="73px" />
  ) : (
    <Box
      fontSize="2xl"
      color="white"
      fontFamily="heading"
      textTransform="uppercase"
      fontWeight="bold"
    >
      {src}
    </Box>
  );

const SiteLogo = connect(({ state, ...props }) => {
  // check if the logo is a url,
  // we assume, if it's a url, it points to an image, else it's a text
  const isImage = isUrl(state.theme.logo);
  return (
    <Box display="block" flexShrink="0" {...omitConnectProps(props)}>
      <Link link="/home">
        <Logo isImage={isImage} src={state.theme.logo} />
        <span className="d-none">Logo</span>
      </Link>
    </Box>
  );
});

const Header = ({ children, ...props }) => (
  <SiteHeader {...props}>
    <SiteHeaderInner>
      <MobileMenu />
      <SiteLogo />
      {children}
      <Box className="donate">
        <Link link="https://donate.jdc.org/give/109212/#!/donation/checkout?c_src=jdcobtn&amp;c_src2=Home13">Donate</Link>
      </Box>
    </SiteHeaderInner>
  </SiteHeader>
);

export default Header;
