import { Fragment } from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import { FormattedMessage } from "react-intl";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import NavLink from "components/nav-link/nav-link";
import {
  TERMS_PAGE,
  ABOUTUS_PAGE,
  POLICY_PAGE,
  CONTACTUS_PAGE,
  PRODUCT_AND_SERVICES_PAGE,
  REFUND_PAGE,
  SHIPPING_AND_DELIVERY_PAGE,
  PRICING_POLICY_PAGE,
  REGISTERED_BUSINESS_NAME_PAGE,
} from "site-settings/site-navigation";

const Box = styled.div(
  css({
    display: "grid",
    gridGap: "5px",
    gridTemplateColumns: "repeat(1, minmax(180px, 1fr))",
    "@media screen and (min-width: 440px)": {
      gridTemplateColumns: "repeat(2, minmax(180px, 1fr))",
    },
    px: 10,
    background: "rgb(0, 128, 96)",
    width: "50%",
    padding: "30px 15px",
    border: "10px",
    border_radius: "10px",
    a: {
      content: "a",
      white_space: "pre",
      fontFamily: "Roboto",
      display: "block",
      padding: "3px 0",
      color: "#85E0AE",
      fontSize: "14px",
      fontWeight: 500,
    },
    h5: {
      fontSize: "14px",
      fontWeight: 500,
      margin: "0 0 2px",
      color: "white",
    },
  }),
  {
    marginBottom: 0.5,
    width: "100%",
    textAlign: "left",
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    position: "relative",
  }
);

const About = styled.div(
  css({
    backgroundColor: "#51C9A6",
    fontFamily: "Roboto",
    div: {
      width: "76rem",
      margin: "0 auto",
      padding: "30px",
    },
    h5: {
      fontSize: "26px",
      color: "#fff",
      margin: "20px 0 0",
    },
    p: {
      color: "#ccf8eb",
      fontSize: "12px",
      marginTop: "5px",
    },
    h6: {
      fontSize: "12px",
      fontWeight: 400,
      marginTop: "20px",
      marginBottom: "10px",
      color: "#016347",
      textAlign: "center",
    },
  })
);

const Footer = () => {
  return (
    <Fragment>
      <Box>
        <Grid>
          <Row
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Col>
              <h5>POLICIES</h5>
              <NavLink
                className="menu-item"
                href={REFUND_PAGE.href}
                label={REFUND_PAGE.defaultMessage}
                intlId={REFUND_PAGE.id}
              />
              <NavLink
                className="menu-item"
                href={SHIPPING_AND_DELIVERY_PAGE.href}
                label={SHIPPING_AND_DELIVERY_PAGE.defaultMessage}
                intlId={SHIPPING_AND_DELIVERY_PAGE.id}
              />
              <NavLink
                className="menu-item"
                href={PRICING_POLICY_PAGE.href}
                label={PRICING_POLICY_PAGE.defaultMessage}
                intlId={PRICING_POLICY_PAGE.id}
              />
            </Col>
            <Col>
              <h5>MEDSMITRA</h5>
              <NavLink
                className="menu-item"
                href={ABOUTUS_PAGE.href}
                label={ABOUTUS_PAGE.defaultMessage}
                intlId={ABOUTUS_PAGE.id}
              />
              <NavLink
                className="menu-item"
                href={CONTACTUS_PAGE.href}
                label={CONTACTUS_PAGE.defaultMessage}
                intlId={CONTACTUS_PAGE.id}
              />
              <NavLink
                className="menu-item"
                href={PRODUCT_AND_SERVICES_PAGE.href}
                label={PRODUCT_AND_SERVICES_PAGE.defaultMessage}
                intlId={PRODUCT_AND_SERVICES_PAGE.id}
              />
            </Col>
            <Col>
              <h5>HELP</h5>
              <NavLink
                className="menu-item"
                href={POLICY_PAGE.href}
                label={POLICY_PAGE.defaultMessage}
                intlId={POLICY_PAGE.id}
              />
              <NavLink
                className="menu-item"
                href={TERMS_PAGE.href}
                label={TERMS_PAGE.defaultMessage}
                intlId={TERMS_PAGE.id}
              />
              <NavLink
                className="menu-item"
                href={REGISTERED_BUSINESS_NAME_PAGE.href}
                label={REGISTERED_BUSINESS_NAME_PAGE.defaultMessage}
                intlId={REGISTERED_BUSINESS_NAME_PAGE.id}
              />
            </Col>
            <Col>
              <h5>STAY CONNECTED</h5>
              <NavLink
                className="menu-item"
                href={POLICY_PAGE.href}
                label={POLICY_PAGE.defaultMessage}
                intlId={POLICY_PAGE.id}
              />
              <NavLink
                className="menu-item"
                href={TERMS_PAGE.href}
                label={TERMS_PAGE.defaultMessage}
                intlId={TERMS_PAGE.id}
              />
              <NavLink
                className="menu-item"
                href={REGISTERED_BUSINESS_NAME_PAGE.href}
                label={REGISTERED_BUSINESS_NAME_PAGE.defaultMessage}
                intlId={REGISTERED_BUSINESS_NAME_PAGE.id}
              />
            </Col>
          </Row>
        </Grid>
      </Box>
      <About>
        <div>
          <h5>ABOUT MEDSMITRA</h5>
          <p>
            Medsmitra is a website for delivering the Ayush Medicines and
            Supplements of your choice at your doorstep with just a few clicks –
            so whether it is the immunity boosters, the medicines with no
            side-effects or the effective homeo medicines you are looking for –
            Yes – we deliver them at your doorstep.The best part of Medsmitra is
            the convenience of delivery at home. We provide you with choices of
            the well known brands and the upcoming brands of all Ayush medicines
            under one roof.
          </p>
          <h6>Copyright© 2020. All rights reserved.</h6>
        </div>
      </About>
    </Fragment>
  );
};
export default Footer;
