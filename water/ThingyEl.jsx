import React, { PropTypes } from 'react'

function Thingy({ toggleActive, isActive }) {
  const txt = 'toggle'
  return (
    <div>
      <h2>{isActive ? 'active' : 'not active'}</h2>
      <button onClick={toggleActive}>{txt}</button>
    </div>
  )
}

Thingy.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
}
