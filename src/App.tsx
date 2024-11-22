import { useState } from 'react'
import styled from "styled-components"
import { Shell } from './components/Shell'
import useSidebarStore from './lib/stores/sidebar'
import { List } from '@phosphor-icons/react'
const Header = styled.header`
  height: 5em;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  box-shadow: 0 2px 0 0 ${(props) => props.theme.colors.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
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
const Hamburger = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.border};
  box-shadow: 0 2px 0 0 ${(props) => props.theme.colors.shadow};
  padding: 0.5em;
  margin-left: auto;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.hoverSecondary};
  }
  @media (max-width: 665px) {
    display: flex;
  }
`

function App() {
  const setSidebarEnabled = useSidebarStore((state) => state.setSidebarEnabled)

  return (
    <Container>
      <Header >
        <Title>Widgets</Title>
        <Hamburger onClick={() => setSidebarEnabled(!useSidebarStore.getState().sidebarEnabled)}>
          <List size={20} />
        </Hamburger>
      </Header>
      <Shell />
    </Container >
  )
}

export default App
