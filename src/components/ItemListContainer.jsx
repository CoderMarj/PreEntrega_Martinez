import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1 style = {{ color: 'blue', fontWeight: '600', marginTop: '3rem' }}>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer