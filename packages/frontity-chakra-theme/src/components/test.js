import React from "react";
import { Box, PseudoBox } from "@chakra-ui/core";
import Script from "@frontity/components";

const Test = props => (
  <PseudoBox
    aria-label="Search this site"
    as="button"
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexShrink="0"
    size="46px"
    ml={{ base: "auto", lg: "3rem" }}
    {...props}
  >
    xxxx
  </PseudoBox>
);

export default Test;
