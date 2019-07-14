import PropTypes from 'prop-types'
import React from 'react'
import ProductsHeader from './ProductsHeader'
import Loading from '../Loading'
import Product from './Product'

const Products = ({products, totalCount, isFetching}) => {
    return <div>
        <h3>Ткани ({totalCount})</h3>
        <table className="table table-sm table-striped table-bordered table-hover">
            <ProductsHeader />
            <tbody>
                {!isFetching
                    ? products.map((product) => {
                        return <Product {...product} key={product.id}/>
                    })
                    : <Loading/>}
            </tbody>
        </table>
    </div>
}

Products.propTypes = {
    products: PropTypes.array.isRequired,
    totalCount: PropTypes.number,
    isFetching: PropTypes.bool
}

Products.defaultProps = {
    products: []
}

export default Products