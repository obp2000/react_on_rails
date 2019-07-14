import PropTypes from 'prop-types'
import React from 'react'
import Container from '../Containers/Products'

export default class Products extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this
            .props
            .fetchProducts()
    }
    componentDidUpdate() {
        this
            .props
            .fetchProducts()
    }
    render() {
        return <Container/>
    }

    static propTypes = {
        fetchProducts: PropTypes.func.isRequired
    }
}
