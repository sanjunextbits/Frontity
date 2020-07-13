import { Box, PseudoBox, VisuallyHidden } from "@chakra-ui/core";
import React from "react";
import { SiteMenu } from "./navigation";
import {
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram
} from "react-icons/io";
import Link from "../link";

// warning for showSocialLinks and menu.length
export const SocialMenu = ({ menu, ...props }) => (
  <SiteMenu spacing="30px" ml="24px" position={{ sm: "relative" }} {...props}>
    {menu.map(([name, link]) => {
      const SocialIcon = icons[name];
      return (
        <SocialMenuItem key={name} label={name} link={link} icon={SocialIcon} />
      );
    })}
  </SiteMenu>
);

const SocialMenuItem = ({ icon, label, link, ...props }) => (
  <PseudoBox
    color="accent.400"
    transition="all 0.3s"
    _hover={{ color: "white" }}
    as="li"
    listStyleType="none"
    margin="0"
    {...props}
  >
    <Link link={link}>
      <Box as={icon} size="24px" />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Link>
  </PseudoBox>
);

const icons = {
  twitter: IoLogoTwitter,
  pinterest: IoLogoPinterest,
  facebook: IoLogoFacebook,
  linkedin: IoLogoLinkedin,
  instagram: IoLogoInstagram
};

const SocialNav = ({ menu, ...props }) => (
  <Box ml="auto" className="social-nav" display={{ base: "none", lg: "block" }} {...props}>
    <SocialMenu className="social-icons" menu={menu} />
  </Box>
);

export default SocialNav;
