import PropTypes from 'prop-types'
import React from 'react'
import PriceRubM from './PriceRubM'
import {PriceCoeffs} from './ProductConsts'

const Prices = ({price_rub_m}) => {
    return PriceCoeffs.map((coeff, index) => {
        return <PriceRubM key={index} price_rub_m={price_rub_m} coeff={coeff}/>
    })
}

Prices.propTypes = {
    price_rub_m: PropTypes.number
}

export default Prices
