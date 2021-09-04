import React from 'react'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a new page
      </Typography>
      <Button
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>
    </Container>
  )
}
