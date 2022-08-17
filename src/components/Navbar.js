import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Navbar(props) {
    console.log('Navbar',props);

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
                <Button variant="contained" color="success" href="/">Home</Button>
                <li><Link to="/about">About</Link></li>
                <li className="cart">
                
                <Button variant="contained" color="primary" size="small" href="/cart">
                    <IconButton color="success" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                    <span>{props.basketProps.basketNumbers}</span>
                </Button>

                
                </li>
            </ul> 
            </nav>
      </header>
    );
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(Navbar);