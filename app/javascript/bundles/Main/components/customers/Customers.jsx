import PropTypes from 'prop-types'
import React from 'react'

import Loading from '../Loading'
import CustomersHeader from './CustomersHeader'
import Customer from './Customer'

const Customers = ({customers, totalCount, isFetching}) => <div>
  <h3>Покупатели ({totalCount})</h3>
  <table className="table table-sm table-striped table-bordered table-hover">
    <CustomersHeader/>
    <tbody>
      {!isFetching
        ? customers.map((customer, index) => {
          return <Customer {...customer} key={index}/>;
        })
        : <Loading/>}
    </tbody>
  </table>
</div>

Customers.propTypes = {
  customers: PropTypes.array.isRequired,
  totalCount: PropTypes.number,
  isFetching: PropTypes.bool
}

Customers.defaultProps = {
  customers: []
}

export default Customers
