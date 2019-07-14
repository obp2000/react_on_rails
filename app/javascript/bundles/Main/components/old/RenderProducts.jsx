import PropTypes from 'prop-types';
import React from 'react';
import ProductsHeader from './ProductsHeader';
import Loading from '../Loading';
import Product from './Product';

const RenderProducts = ({products, totalCount, isFetching, handleDelete}) => {
    return <div>
        <h3>Ткани ({totalCount})</h3>
        <table className="table table-sm table-striped table-bordered table-hover">
            <ProductsHeader/>
            <tbody>
                {!isFetching
                    ? products.map((product) => {
                        return <Product
                            product={product}
                            key={product.id}
                            handleDelete={handleDelete.bind(this, product.id)}/>
                    })
                    : <Loading/>}
            </tbody>
        </table>
    </div>
}

export default RenderProducts
