import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Card1 from "../Assets/Card1.png";
import Card2 from "../Assets/Card2.png";
import Card3 from "../Assets/card3.png";
import Mobile from "../Assets/Mobile.png";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: "#fff"
    }
  },
  appBar: {
    position: "relative"
  },
  toolbarTitle: {
    flex: 1
  },
  layout: {
    width: "auto",
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 1200,
      marginLeft: "auto",
      marginRight: "auto"
    },
    paddingLeft: 0,
    paddingRight: 0
  },

  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing.unit * 2
  },
  cardActions: {
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing.unit * 2
    }
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid rgba(0, 0, 0, 0.12)`,
    padding: `${theme.spacing.unit * 6}px 0`
  },
  toolBar: {
    width: "auto",
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 1200,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  heroUnit: {
    minHeight: "600px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundSize: "80%"
  }
});

const tiers = [
  {
    title: "METAL",
    subheader: "INCLUDES",
    price: "0",
    description: [
      "Charcoal Black Metal Card",
      "2.15%1 Bonus Rate Checking Account",
      "5% Cash back on brands you love",
      "Free Cash Withdrawals",
      "Phone & Chat Support"
    ],
    buttonText: "SIGN UP NOW",
    buttonVariant: "outlined",
    icon: "BlackMetalCard",
    card_icon:"Card1",
  },
  {
    title: "PREMIUM",
    subheader: "INCLUDES",
    price: "15",
    description: [
      "Free Debit Card",
      "1.65%2 Bonus Rate Checking Account",
      "4% Cash back on brands you love",
      "Free Cash Withdrawals",
      "Phone & Chat Support"
    ],
    buttonText: "UP NEXT",
    buttonVariant: "contained",
    icon: "PREMIUM",
    card_icon:"Card2",
  },
  {
    title: "BASIC",
    subheader: "INCLUDES",
    price: "30",
    description: [
      "Free Debit Card",
      "1.15%3 Bonus Rate Checking Account",
      "3% Cash back on brands you love",
      "Free Cash Withdrawals",
      "Phone & Chat Support"
    ],
    buttonText: "COMMING SOON",
    buttonVariant: "outlined",
    icon: "BASIC",
    card_icon:"Card3",
  }
];
const cardIcon = card_icon => {
  if (card_icon === "Card1") {
    return Card1;
  } else if (card_icon === "Card2") {
    return Card2;
  } else {
    return Card3;
  }
};

function Landing(props) {
    const { classes } = props;

    return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Grid
          container
          spacing={16}
          alignItems="center"
          className={classes.heroUnit}
        >
          <Grid item xs={12} sm={6}>
            <div className={classes.heroContent}>
              <Typography
                component="h1"
                variant="h3"
                align="left"
                color="textPrimary"
                gutterBottom
              >
                The Most Powerful Checking Account
              </Typography>
              <Typography
                variant="h4"
                align="center"
                color="textSecondary"
                component="h"
              >
                Our checking account gives you higher returns
                than a savings account with no hidden fees.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div>
              <img
                src={Mobile}
                alt=""
                width="60%"
                style={{ marginLeft: "100px", marginTop:"100px" }}
              />
            </div>
          </Grid>
        </Grid>
        <Grid>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            style={{ marginTop: "100px" }}
          >
            Sign up early to save more
          </Typography>
          <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                component="h1"
              >
                Depending on the level of your checking account,<br/> 
                you’ll earn between 1.15%3 to 2.15%1 bonus rate.
              </Typography>
              
        </Grid>
        <Grid container spacing={5} style={{marginTop:"20px"}} alignItems="flex-end">
          {tiers.map(tier => (
            <Grid
              item
              xs={12}
              md={4}
            >
              <Card>
                <CardMedia
                  className={classes.media}
                  image={cardIcon(tier.card_icon)}
                />
                <CardContent>
                <CardActions className={classes.cardActions}>
                  <Button variant="contained" color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
                  <Typography
                    variant="h5"
                    align="center"
                    style={{ marginBottom: "20px" }}
                  >
                    {tier.title}
                  </Typography>
                  {tier.description.map(line => (
                    <Typography variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
     </React.Fragment>
  );}

export default (withStyles(styles)(Landing));
