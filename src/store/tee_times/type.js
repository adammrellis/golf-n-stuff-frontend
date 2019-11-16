import PropTypes from 'prop-types'

export default {
  tee_time: PropTypes.shape({
    singleTee_time: PropTypes.object,
    addTee_time: PropTypes.func,
    removeTee_time: PropTypes.func,
    updateTee_time: PropTypes.func
  }),
}