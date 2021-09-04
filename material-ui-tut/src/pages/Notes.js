import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';

export default function Notes() {

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'ABC',
      details: 'AABBCC'
    },
    {
      id: 2,
      title: 'MNO',
      details: 'MMNNOO'
    },
    {
      id: 3,
      title: 'XYZ',
      details: 'XXYYZZ'
    },
  ])

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => res.json())
  //     .then(data => setNotes(data))
  // }, [])


  return (
    <Container>
      {/* <Grid container>
        <Grid item md={3} sm={6} xs={12}>
          <Paper> 1 </Paper>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Paper> 2 </Paper>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Paper> 3 </Paper>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Paper> 4 </Paper>
        </Grid>
      </Grid> */}

      <Grid container>
        {notes.map((val) => {
          return (
            <Grid key={val.id} item md={4} sm={6} xs={12}>
              <Paper>{val.title}</Paper>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}
