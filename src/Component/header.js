import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../Assets/on-juno-logo.png";
const styles = () => ({
  appBar: {
    // position: "relative"
    marginBottom: "20px"
  },
  toolbarTitle: {
    flex: 1
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    backgroundSize: "30%"
  },
  mainToolbar: {
    display: "flex",
    justifyContent: "space-between",
    background: "#fff"
  },
  active_member: {
    border: "2px solid #327C93",
    borderRadius: "50px",
    padding: "4px",
    width: "64px",
    height: "64px"
  },
  buttonStyle: { marginLeft: "10px" },
  logoutStyle: { textDecoration: "none" },
  mainLink: {
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "18px",
    color: "#222222",
    marginRight: "20px",
    background: "transparent",
    textTransform: "capitalize",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "transparent",
      boxShadow: "none"
    }
  },
  profileIcon: {
    // color: "#fff",
    borderRadius: "50px",
    height: "30px",
    width: "40px "
  }
});

const theme = createMuiTheme({
  overrides: {
    MuiMenu: {
      paper: {
        top: "7% !important"
      }
    }
  }
});

function Header(props) {
  const { classes} = props;

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" color="default" className={classes.appBar}>
            <Toolbar className={classes.mainToolbar}>
              <div className={classes.logoSection}>
                <div>
                <img src={logo} alt="" width="50%" />
                </div>
                
                </div>
                <div >
                  <Button
                      variant="contained"
                      className={classes.mainLink}
                      style={{marginLeft:"-500px"}}
                    >
                      Home
                    </Button>
                </div>
                
                
              <div>
                  <div>
                  
                    <Button
                      variant="contained"
                      className={classes.mainLink}
                    >
                      Signup
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.mainLink}
                    >
                      Login
                    </Button>
                  </div>
                </div>
                </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default (withStyles(styles)(Header));;
