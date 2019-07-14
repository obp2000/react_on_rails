import {connect} from 'react-redux'
import {formValueSelector} from 'redux-form'
import Prices from '../Prices'

const mapStateToProps = (state) => {
    const {dollar_price, dollar_rate, density, width} = formValueSelector('product')(state, 'dollar_price', 'dollar_rate', 'density', 'width')
    return {
        price_rub_m: dollar_price * dollar_rate * density * width / 100000
    }
}

export default connect(mapStateToProps)(Prices)
