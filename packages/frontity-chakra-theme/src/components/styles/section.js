import React from "react";
import { Box } from "@chakra-ui/core";

const sizes = {
  xs: "640px",
  sm: "700px",
  md: "750px",
  lg: "1150px",
  huge: "1550px",
  max: "2560px"
};

/**
 * @param {React.ComponentProps<typeof Box>} props
 */
const Section = ({ size = "md", ...props }) => (
  <Box {...props} />
);
export default Section;
