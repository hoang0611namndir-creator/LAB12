import React from 'react';
import products from './product.js';
import Cards from './ProductCard.js';

function ProductList() {
  const product = products;
  return (
    <div>
      <div className="container mt-4">
                <div className="row">
                    {products.map((product) => (
                        <div className="col-md-4 mb-3" key={product.id}>
                            <Cards name={product.name} price={product.price} image={product.image} />
                        </div>
                    ))}
                </div>
            </div>

    </div>
  )
}

export default ProductList
