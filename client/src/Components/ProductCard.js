import React from 'react'
import '../lib/css/styles.css'


function ProductCard(props) {
const {everything, telescopes, sextants, belowThousand, allProducts} = props


// Temp Fix to display MySQL :D
    return (
        allProducts
    )

// if (everything) {
//     const mappedProducts = props.allProducts.map(product => {

//         return (
//             <div>
//                 <div className="product-display">
//                     <h2 className="card product-name">{product.name}</h2>
//                     <img className="card product-img" src={product.image} alt={product.alt}/>
//                     <div className="card product-description">
//                         <p>{product.description}</p>
//                         <p>Price: ${product.price}</p>
//                     </div>
//                 </div>
//             </div>
//         )
//     })

//     return mappedProducts;
// } else if (telescopes) {
//     const mappedProducts = props.productsArray.filter(product=>product.telescope).map(product => {

//     return (
//         <div>
//             <div className="product-display">
//                 <h2 className="card product-name">{product.name}</h2>
//                 <img className="card product-img" src={product.image} alt={product.alt}/>
//                 <div className="card product-description">
//                     <p>{product.description}</p>
//                     <p>Price: ${product.price}</p>
//                 </div>
//             </div>
//         </div>
//     )
// })

// return mappedProducts;

// } else if (sextants) {
//     const mappedProducts = props.productsArray.filter(product=>product.sextant).map(product => {

//     return (
//         <div>
//             <div className="product-display">
//                 <h2 className="card product-name">{product.name}</h2>
//                 <img className="card product-img" src={product.image} alt={product.alt}/>
//                 <div className="card product-description">
//                     <p>{product.description}</p>
//                     <p>Price: ${product.price}</p>
//                 </div>
//             </div>
//         </div>
//     )
// })

// return mappedProducts;

// } else if (belowThousand) {
//     const mappedProducts = props.productsArray.filter(product=>product.belowThousand).map(product => {

//     return (
//         <div>
//             <div className="product-display">
//                 <h2 className="card product-name">{product.name}</h2>
//                 <img className="card product-img" src={product.image} alt={product.alt}/>
//                 <div className="card product-description">
//                     <p>{product.description}</p>
//                     <p>Price: ${product.price}</p>
//                 </div>
//             </div>
//         </div>
//     )
// })

// return mappedProducts;

// }
}



  export default ProductCard