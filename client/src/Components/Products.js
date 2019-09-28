import React from 'react';
import Filter from './Filter';
import Footer from './Footer';
import '../lib/css/styles.css';

function Products(props) {
    return (
        <div>
            {/* Header */}
            <div className="container">
               <div className="row">
                   <div className="col-md-12">
                   <h1 className="product-intro">Look to the stars</h1>
                   <div className="product-info">
                       <p>"Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious." - <span className="quote-author">Stephen Hawking</span></p>
                   </div>
                   </div>
               </div>
            </div>
            <Filter allProducts={props.allProducts}/>
            <Footer />
        </div>
    )
}

export default Products;