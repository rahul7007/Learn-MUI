import React, { useState, useEffect } from 'react'

export default function Notes() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])


  return (
    <div>
      {
        notes.map((val) => {
          return (
            <p key={val.id}>{val.title}</p>
          )
        })
      }
    </div>
  )
}
