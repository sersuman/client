import React from 'react'
import { Container, Paper } from '@mui/material'

const Login = () => {
  
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  return (
    <Container component={"main"} maxWidth="xs">
      <Paper 
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }} >
        {isLoggedIn ? <span>login</span> : <span>register</span>}
      </Paper>
    </Container>
  )
}

export default Login