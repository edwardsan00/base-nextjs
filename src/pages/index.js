import React from 'react'
import { Button } from '@material-ui/core'
import HomeText from 'components/Home'
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button color='primary' variant='contained'>Material</Button>
      <HomeText />
    </div>
  )
}

export default Home
