import { Box, PseudoBox } from "@chakra-ui/core";
import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchButton = props => (
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
    <Box size={6} color="white" as={IoIosSearch} />
  </PseudoBox>
);

export default SearchButton;
