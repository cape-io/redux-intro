import React, { PropTypes } from 'react'

function Pop({ isActive }) {
  if (!isActive) return null
  return <h2>POP!</h2>
}

Pop.propTypes = {
  isActive: PropTypes.bool.isRequired,
}
