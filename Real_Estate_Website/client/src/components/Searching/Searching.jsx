import React from 'react'

const Searching = ({filter, setFilter}) => {
  return (
    <div className='flexCenter search-bar'>
        
        <input placeholder="Searching by title, City, Country"  style={{
        padding: '10px',
        fontSize: '16px',
        width: '400px',
    }}
        type='text' value={filter} onChange={(e)=> setFilter(e.target.value)}/>
        
    </div>
  )
}

export default Searching