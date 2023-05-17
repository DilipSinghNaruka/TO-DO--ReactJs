import React from 'react'
import "./task.css"
function Task({title, description, deletetask, index}) {
  return (
     <div className="output">
            <p>{title}</p>
            <span>{description}</span>
            <button onClick={()=>deletetask(index)}>delete</button> {/* aro function isliye hai bcz ye parameter send kar raha hai agar hanm direct fucntion me perametar send karte hai to vo call ho jata hai */}
        </div>
  )
}

export default Task