import { useState } from 'react'
import styled from "styled-components"
import { Shell } from './components/Shell'

const Header = styled.header`
  height: 5em;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  box-shadow: 0 2px 0 0 ${(props) => props.theme.colors.shadow};
`
const Container = styled.div`
  height: 100%;
`
function App() {

  return (
    <Container>
      <Header />
      <Shell />
    </Container >
  )
}

export default App
