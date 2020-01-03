import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(r => (
 	 <li>{r.Title}</li>  
 	
  ))
  return <ul> {options} </ul>
}

export default Suggestions
