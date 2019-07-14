import PropTypes from 'prop-types'
import React from 'react'
import Container from '../Containers/Customers'

export default class Customers extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this
      .props
      .fetchCustomers()
  }
  componentDidUpdate() {
    this
      .props
      .fetchCustomers()
  }
  render() {
    return <Container/>
  }

  static propTypes = {
    fetchCustomers: PropTypes.func.isRequired
  }
}
