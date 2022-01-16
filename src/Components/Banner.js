import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(../banner.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
      textAlign: "center",
      justifyContent: "center",
      flexDirection: "column",
      height : "40%", 
      display : "flex "
  },
}));
const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"   
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat ",
            }}
          >
              Cryptochain
          </Typography>
          <Typography variant="subtitle2"
          style={{
              fontWeight: "bold",
              color : "gold" ,
              textTransform: "capitalize",
              fontFamily: "montserrat",
          }}>
          Track the prices of CRYPTO"ASSETS" 
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
