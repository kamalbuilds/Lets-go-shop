import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar(props) {
  console.log("Top Navbar", props);

  useEffect(() => {
    console.log(getNumbers());
    getNumbers();
  }, []);
  return (
    <header>
      <div className="overlay"></div>
      <nav>
        <h2>Let's Shop 💝</h2>
        <ul>
          <li>
            <Link to="/">
              <Button
                variant="contained"
                sx={{ color: "Black", backgroundColor: "orange" }}
              >
                Home
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <Button
                variant="contained"
                sx={{ color: "Black", backgroundColor: "orange" }}
              >
                About
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <Button
                variant="contained"
                startIcon={
                  <ShoppingCartIcon style={{ color: "green" }} size="large" />
                }
                style={{
                  backgroundColor: "orange",
                  color: "green",
                  listStyle: "none",
                  textDecoration: "none",
                }}
              >
                <span>{props.basketProps.basketNumbers}</span>
              </Button>
            </Link>
          </li>
        </ul>
        </nav>
       
    </header>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(Navbar);
