import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import NoteCard from '../components/NoteCard';

export default function Notes() {

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'ABC',
      details: 'AABBCC',
      exp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
    },
    {
      id: 2,
      title: 'MNO',
      details: 'MMNNOO',
      exp: "Lorem Ipsum is simply dummy text of the printing"
    },
    {
      id: 3,
      title: 'XYZ',
      details: 'XXYYZZ',
      exp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
    },
    {
      id: 4,
      title: 'PQR',
      details: 'PPQQRR',
      exp: "Lorem Ipsum is simply dummy"
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

      <Grid container spacing={3}>
        {notes.map((val) => {
          return (
            <Grid key={val.id} item md={4} sm={6} xs={12}>
              <NoteCard noteProps={val} />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}
