import PropTypes from 'prop-types'
import React from 'react'
import NewCustomer from '../Containers/NewCustomer'

export default class Customer extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this
            .props
            .fetchCustomer()
    }
    render() {
        return <NewCustomer/>
    }
    static propTypes = {
        fetchCustomer: PropTypes.func.isRequired
    }
}
