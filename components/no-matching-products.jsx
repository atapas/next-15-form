import React from 'react'

const NoMatchingProducts = ({query}) => {
  return (
    <div className="p-3 bg-gray-300 m-2 rounded">
      <p>No Matching Products Found for the query <strong>{query}</strong></p>
    </div>
  )
}

export default NoMatchingProducts