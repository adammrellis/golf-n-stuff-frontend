import PropTypes from 'prop-types'

export default {
  customer: PropTypes.shape({
    customer: PropTypes.array,
    singleCustomer: PropTypes.array,
    addCustomer: PropTypes.func,
    removeCustomer: PropTypes.func,
    updateCustomer: PropTypes.func
  }),
}