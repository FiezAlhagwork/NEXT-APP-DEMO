
import React from 'react'

const ShowArticlePage = (props) => {
  return (
    <div>
        <h1>ShowArticlePage</h1>
        <h2>{props.params.title}</h2>
    </div>
    
  )
}

export default ShowArticlePage