import { useState } from 'react'
import styled from "styled-components"
import { Shell } from './components/Shell'

const Header = styled.header`
  height: 5em;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  box-shadow: 0 2px 0 0 ${(props) => props.theme.colors.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  margin: 0;
  display: inline-block;
  margin-right: 0.5em;
`
const Container = styled.div`
  height: 100%;
`
function App() {

  return (
    <Container>
      <Header >
        <Title>Widgets</Title>
      </Header>
      <Shell />
    </Container >
  )
}

export default App
