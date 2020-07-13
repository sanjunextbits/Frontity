import { Box, PseudoBox, SimpleGrid } from "@chakra-ui/core";
import React from "react";
import { SocialMenu } from "./header/social-menu";
import { connect } from "frontity";

const FooterSection = props => (
  <Box
    as="footer"
    pos="relative"
    bg="primary.900"
    py={{ base: "32px", lg: "40px" }}
    {...props}
  />
);

const FooterSectionGroup = props => (
  <SimpleGrid
    maxWidth="1150px"
    mx="auto"
    width="90%"
    {...props}
  />
);

const FooterSectionItem = props => (
  <PseudoBox padding="24px" color="white" textAlign="center" {...props} />
);

const Footer = ({ state }) => (
  <FooterSection alignSelf="flex-end">
    <FooterSectionGroup>
      <div className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-4 widget footer_widget">
                    <div className="textwidget">
                        <h4>Get Updates</h4>
                        <form>
                        <input type="email" name="email" placeholder="Email Address" />
                        <button type="submit" className="hs-button primary large" >Sign Up for JDC Emails</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 widget footer_widgets">
                    <div id="footer-social">
                        <h4>Follow Us</h4>
                        <div className="copyrights-col-right">
                        <SocialMenu
                          ml="0"
                          justifyContent="center"
                          menu={state.theme.socialLinks}
                        />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 widget footer_widgets">
                <ul id="footer-stickers">
                      <li>
                          <a href="https://www.bbb.org/" target="_blank" id="footer-bbb">BBB</a>
                      </li>
                      <li>
                          <a href="https://www.charitynavigator.org/index.cfm?bay=search.summary&amp;orgid=3268"
                              target="_blank" id="footer-charitynavigator">Charity Navigator Four Star Charity</a>
                      </li>
                      <li>
                          <a href="https://www.charitywatch.org/" id="footer-charitywatch">Charity Watch Top-Rated</a>
                      </li>
                  </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-4 widget footer_widgets">
                    <h4>Info</h4>
                    <ul className="footer-info">
                        <li> <a href="/about/careers/">Careers With Us</a> </li>
                        <li> <a href="/about/financial-legal-documents/">Financial &amp; Legal Documents</a> </li>
                        <li> <a href="/about/privacy-policy/">Privacy Policy</a> </li>
                        <li> <a href="/about/operating-principles/">Operating Principles</a> </li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-4 widget footer_widgets">
                    <h4>&nbsp;</h4>
                    <ul className="footer-info">
                        <li> <a href="/about/annual-reports/">Annual Reports &amp; Global Strategy</a> </li>
                        <li> <a href="/home/jdcs-impact/">JDC's Impact</a> </li>
                        <li> <a href="/about/senior-staff/">Senior Staff</a> </li>
                        <li> <a href="/about/jdcs-supporters-2/">JDC's Supporters</a> </li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-4 widget footer_widgets">
                    <h4>Partners</h4>
                    <ul id="footer-partners">
                        <li> <a id="footer-jfna" href="https://www.jewishfederations.org/" target="_blank">Partner Agency of
                                The Jewish Federations of North America</a> </li>
                        <li> <a id="footer-claims" href="http://www.claimscon.org/" target="_blank">Claims Conference - The
                                Conference on Jewish Material Claims Against Germany</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>      
    </FooterSectionGroup>
  </FooterSection>
);

export default connect(Footer);
