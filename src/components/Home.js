import React, { useState } from 'react';
// import react from '../images/react.jpg';
// import go from '../images/go.png';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

// import typescript from '../images/ts.jpg';
// import cpp from '../images/cplusplus.jpg';
// import rust from '../images/rust.png';
import books from '../data/books';


const Home = (props) => {
    
    console.log('home props', props);
    
    return(
        <div className="container">
            
            {/* <div className="image">
                <img src={rust} alt="rust" />
                <h3>Rust</h3>
                <h3>$15.00</h3>
                <a onClick={() => props.addBasket('rust')} className="addToCart cart1" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={go} alt="go" />
                <h3>Go</h3>
                <h3>$35.00</h3>
                <a onClick={() => props.addBasket('go')} className="addToCart cart2" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={typescript} alt="Black Hoddie" />
                <h3>Typescript</h3>
                <h3>$15.00</h3>
                <a onClick={() => props.addBasket('typescript')} className="addToCart cart3" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={cpp} alt="cpp" />
                <h3>C++</h3>
                <h3>$5.00</h3>
                <a onClick={() => props.addBasket('cpp')} className="addToCart cart4" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={react} alt="Grey Hoddie" className="resize"/>
                <h3>ReactJS</h3>
                <h3>$6.00</h3>
                <a onClick={() => props.addBasket('react')} className="addToCart cart1" href="#">Add to Cart</a>
            </div> */}

            {/* Use map function to iterate through the books.json file to get all information */}
            {books.map((book, index) => {
                
                return (
                        <div className="image" key={index}>
                        <img src={`../images/${book.imgUrl}`} alt={book.name} />
                        <h3>{book.name}</h3>
                        <h3>${book.price}.00</h3>
                        <a onClick={() => props.addBasket(book.tagName)} className="addToCart cart1" href="#">Add to Cart</a>
                    </div>
                )
            }
             )}
        </div>
    );
}

export default connect(null, { addBasket })(Home);