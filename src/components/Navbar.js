import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

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
                <Button variant="contained" color="success"><Link to="/">Home</Link></Button>
                <li><Link to="/about">About</Link></li>
                <li className="cart">
                
                <Button variant="outlined" color="primary">
                    <Link to="/cart"><ion-icon name="basket"></ion-icon>Cart
                    <span>{props.basketProps.basketNumbers}</span>
                    </Link>
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