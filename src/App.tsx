import { useState } from 'react'
import styled from "styled-components"

const Header = styled.header`
  height: 5em;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  box-shadow: 0 2px 0 0 ${(props) => props.theme.colors.shadow};
`
const Shell = styled.div`
  height: calc(100% - 5em);
  width: 100%;
`


const Sidebar = styled.aside`
  height: 100%;
  width: 5em;
  background-color: ${(props) => props.theme.colors.secondary};
`
const Container = styled.main`
  height: 100%;
`

function App() {

  return (
    <Container>
      <Header />
      <Shell >
        <Sidebar />
      </Shell>
    </Container>
  )
}

export default App
