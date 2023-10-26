import React from 'react'

const Searching = ({filter, setFilter}) => {
  return (
    <div className='flexCenter search-bar'>
        
        <input placeholder="Searching by title"
        type='text' value={filter} onChange={(e)=> setFilter(e.target.value)}/>
        <button className='button'>
           Search
        </button>
    </div>
  )
}

export default Searching