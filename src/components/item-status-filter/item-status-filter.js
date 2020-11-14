import React from 'react'
import './item-status-filter.css'

const ItemStatusFilter = () => {
    return(
        <div className='btn-group'>
            <button className='btn btn-info' type='button'>All</button>
            <button className='btn btn-outline-secondary' type='button'>Done</button>
            <button className='btn btn-outline-secondary' type='button'>Undone</button>
        </div>
    )
}

export default ItemStatusFilter