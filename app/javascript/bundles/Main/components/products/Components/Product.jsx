import PropTypes from 'prop-types'
import React from 'react'
import Container from '../Containers/NewProduct'

export default class Product extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this
            .props
            .fetchProduct()
    }
    render() {
        return <Container/>
    }
    static propTypes = {
        fetchProduct: PropTypes.func.isRequired
    }
}